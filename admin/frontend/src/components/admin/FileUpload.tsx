import { useState, useRef } from 'react';
import { Upload, X, FileIcon, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const API_URL = import.meta.env.VITE_API_URL;

interface FileUploadProps {
  onFilesChange: (files: File[], uploadedUrls?: string[]) => void;
  maxFiles?: number;
  maxTotalSize?: number; // in bytes
  acceptedFileTypes?: string[];
  existingUrls?: string[];
}

const MAX_TOTAL_SIZE = 75 * 1024 * 1024; // 75MB in bytes
const MAX_FILES = 3;
const ACCEPTED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/zip',
  'application/x-zip-compressed',
  'image/jpeg',
  'image/png'
];

export default function FileUpload({
  onFilesChange,
  maxFiles = MAX_FILES,
  maxTotalSize = MAX_TOTAL_SIZE,
  acceptedFileTypes = ACCEPTED_TYPES,
  existingUrls = []
}: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>(existingUrls);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getTotalSize = (fileList: File[]) => {
    return fileList.reduce((acc, file) => acc + file.size, 0);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const uploadFiles = async (filesToUpload: File[]) => {
    setUploading(true);
    try {
      const formData = new FormData();
      filesToUpload.forEach((file) => {
        formData.append('documents', file);
      });

      // Get the token from localStorage
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('Please log in again');
        window.location.href = '/admin/login';
        return;
      }

      console.log('Uploading files:', filesToUpload.map(f => ({ name: f.name, type: f.type, size: f.size })));

      const response = await fetch(`${API_URL}/api/upload/documents`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Upload response error:', {
          status: response.status,
          statusText: response.statusText,
          errorText
        });

        if (response.status === 401) {
          toast.error('Session expired. Please log in again');
          window.location.href = '/admin/login';
          return;
        }

        let errorMessage = 'Upload failed';
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.error || errorData.message || 'Upload failed';
        } catch (e) {
          console.error('Error parsing error response:', e);
        }

        throw new Error(errorMessage);
      }

      const data = await response.json();
      if (!data.files || !Array.isArray(data.files)) {
        console.error('Invalid response format:', data);
        throw new Error('Invalid server response');
      }

      const urls = data.files.map((file: any) => file.url);
      setUploadedUrls(urls);
      onFilesChange(filesToUpload, urls);
      toast.success('Files uploaded successfully');
    } catch (error) {
      console.error('Upload error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to upload files');
      setFiles([]);
      onFilesChange([]);
    } finally {
      setUploading(false);
    }
  };

  const handleFiles = async (newFiles: FileList | null) => {
    if (!newFiles) return;

    const fileArray = Array.from(newFiles);
    console.log('Handling files:', fileArray.map(f => ({ name: f.name, type: f.type, size: f.size })));

    const isZip = fileArray.some(file => file.type.includes('zip'));

    // If it's a zip file, only allow one
    if (isZip && fileArray.length > 1) {
      toast.error('Please upload only one zip file');
      return;
    }

    // Check file count
    if (!isZip && files.length + fileArray.length > maxFiles) {
      toast.error(`Maximum ${maxFiles} files allowed`);
      return;
    }

    // Check file types
    const invalidFiles = fileArray.filter(
      file => !acceptedFileTypes.includes(file.type)
    );
    if (invalidFiles.length > 0) {
      console.log('Invalid file types:', invalidFiles.map(f => f.type));
      toast.error(`Invalid file type(s): ${invalidFiles.map(f => f.type).join(', ')}. Please upload PDF, Word, ZIP, or image files`);
      return;
    }

    // Check total size
    const newTotalSize = getTotalSize([...files, ...fileArray]);
    if (newTotalSize > maxTotalSize) {
      toast.error(`Total file size must be less than ${formatFileSize(maxTotalSize)}`);
      return;
    }

    const updatedFiles = [...files, ...fileArray];
    setFiles(updatedFiles);
    await uploadFiles(fileArray);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleRemoveFile = async (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    const newUrls = uploadedUrls.filter((_, i) => i !== index);
    setFiles(newFiles);
    setUploadedUrls(newUrls);
    onFilesChange(newFiles, newUrls);
  };

  return (
    <div className="space-y-4">
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer",
          isDragging ? "border-admin-primary bg-admin-primary/5" : "border-gray-300",
          (files.length >= maxFiles || uploading) && "opacity-50 cursor-not-allowed"
        )}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => !uploading && fileInputRef.current?.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          multiple={!files.some(f => f.type.includes('zip'))}
          accept={acceptedFileTypes.join(',')}
          onChange={(e) => handleFiles(e.target.files)}
          disabled={files.length >= maxFiles || uploading}
        />
        <Upload className="w-10 h-10 mx-auto mb-4 text-gray-400" />
        <p className="text-sm text-gray-600 mb-2">
          {uploading ? 'Uploading...' : 'Drag and drop your files here, or click to select files'}
        </p>
        <p className="text-xs text-gray-500">
          {files.some(f => f.type.includes('zip'))
            ? 'ZIP file uploaded'
            : `${files.length}/${maxFiles} files uploaded`}
          {' · '}
          {formatFileSize(getTotalSize(files))}/{formatFileSize(maxTotalSize)}
        </p>
      </div>

      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <FileIcon className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                  {uploadedUrls[index] && (
                    <p className="text-xs text-green-600">✓ Uploaded to cloud</p>
                  )}
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleRemoveFile(index)}
                disabled={uploading}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {getTotalSize(files) > maxTotalSize * 0.8 && (
        <div className="flex items-center space-x-2 text-amber-600 text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>Approaching maximum total size limit</span>
        </div>
      )}
    </div>
  );
} 