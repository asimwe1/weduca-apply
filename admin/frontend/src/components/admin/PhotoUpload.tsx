import { useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PhotoUpload() {
  const [photo, setPhoto] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [cloudinaryURL, setCloudinaryURL] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPhoto(file);
    setPreviewURL(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_unsigned_upload_preset"); // 👈 change this
    setUploading(true);

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", // 👈 change this
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      setCloudinaryURL(data.secure_url); // ✅ this is what you'll send to the DB
    } catch (err) {
      console.error("Cloudinary upload failed:", err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-dashed border-gray-300 text-center">
      <div className="flex flex-col items-center justify-center py-4">
        <Upload className="h-10 w-10 text-gray-400 mb-2" />
        <p className="text-sm text-gray-500 mb-1">Upload student photo</p>
        <p className="text-xs text-gray-400 mb-4">JPEG or PNG (max. 1MB)</p>

        <input
          type="file"
          accept="image/jpeg,image/png"
          onChange={handleFileChange}
          className="hidden"
          id="photo-upload"
        />

        <label htmlFor="photo-upload">
          <Button type="button" variant="outline" size="sm" asChild>
            <span>{uploading ? "Uploading..." : "Select File"}</span>
          </Button>
        </label>

        {photo && <p className="text-sm mt-2">Selected: {photo.name}</p>}

        {previewURL && (
          <img
            src={previewURL}
            alt="Preview"
            className="mt-4 rounded-md max-h-40"
          />
        )}

        {cloudinaryURL && (
          <p className="text-sm text-green-600 mt-2 break-all">
            ✅ Uploaded to: <br />
            {cloudinaryURL}
          </p>
        )}
      </div>
    </div>
  );
}
