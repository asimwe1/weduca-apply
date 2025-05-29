import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, FileText, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fetchData } from "@/utils/api";
import { toast } from "sonner";

interface Document {
  url: string;
  originalName: string;
  filename: string;
  size?: number;
  format?: string;
  contentType?: string;
  uploadDate: string;
}

interface Application {
  _id: string;
  student: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  institution: {
    _id: string;
    name: string;
  };
  program: string;
  date: string;
  status: "pending" | "approved" | "rejected";
  documents: Document[];
  documentUrls: string[];
}

const statusStyles = {
  pending: { bgColor: "bg-yellow-50", textColor: "text-yellow-700", label: "Pending" },
  approved: { bgColor: "bg-green-50", textColor: "text-green-700", label: "Approved" },
  rejected: { bgColor: "bg-red-50", textColor: "text-red-700", label: "Rejected" },
};

export default function ViewApplication() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [application, setApplication] = useState<Application | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadApplication = async () => {
      try {
        const data = await fetchData(`/api/applications/${id}`);
        setApplication({
          ...data,
          documentUrls: data.documentUrls || []
        });
      } catch (err) {
        setError("Failed to load application details");
        console.error("Error loading application:", err);
      } finally {
        setLoading(false);
      }
    };

    loadApplication();
  }, [id]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (loading) {
    return <div className="p-6">Loading application details...</div>;
  }

  if (error || !application) {
    return <div className="p-6 text-red-600">{error || "Application not found"}</div>;
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link to="/admin/applications">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Applications
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Application Details</h1>
        </div>
        {application.status === "pending" && (
          <Button asChild>
            <Link to={`/admin/applications/${application._id}/edit`}>
              <Edit className="h-4 w-4 mr-2" />
              Edit Application
            </Link>
          </Button>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Student Information</h2>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Name:</span>{" "}
                {`${application.student.firstName} ${application.student.lastName}`}
              </p>
              <p>
                <span className="font-medium">Email:</span> {application.student.email}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Application Information</h2>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Institution:</span>{" "}
                {application.institution.name}
              </p>
              <p>
                <span className="font-medium">Program:</span> {application.program}
              </p>
              <p>
                <span className="font-medium">Application Date:</span>{" "}
                {formatDate(application.date)}
              </p>
              <div className="flex items-center gap-2">
                <span className="font-medium">Status:</span>{" "}
                <Badge
                  variant="outline"
                  className={`${statusStyles[application.status].bgColor} ${
                    statusStyles[application.status].textColor
                  }`}
                >
                  {statusStyles[application.status].label}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Documents</h2>
          <div className="space-y-3">
            {application.documents && application.documents.length > 0 ? (
              application.documents.map((doc, index) => {
                const fileSize = doc.size ? formatFileSize(doc.size) : '';
                const uploadDate = doc.uploadDate ? formatDate(doc.uploadDate) : '';
                
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-gray-500" />
                      <div>
                        <button
                          onClick={() => {
                            // Open in new tab and trigger download
                            window.open(doc.url, '_blank');
                          }}
                          className="text-blue-600 hover:underline font-medium cursor-pointer"
                        >
                          {doc.originalName}
                        </button>
                        <div className="text-sm text-gray-500">
                          {fileSize && <span className="mr-3">{fileSize}</span>}
                          {uploadDate && <span>Uploaded on {uploadDate}</span>}
                        </div>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-gray-500 hover:text-gray-700"
                      onClick={async () => {
                        try {
                          console.log('Downloading file:', doc);
                          // Try to fetch the file first
                          const response = await fetch(doc.url);
                          if (!response.ok) throw new Error('Download failed');
                          
                          // Create a blob from the response
                          const blob = await response.blob();
                          // Create a temporary URL for the blob
                          const url = window.URL.createObjectURL(blob);
                          // Create a temporary link element
                          const a = document.createElement('a');
                          a.href = url;
                          a.download = doc.originalName; // Use the original filename
                          document.body.appendChild(a);
                          a.click(); // Trigger the download
                          // Clean up
                          window.URL.revokeObjectURL(url);
                          document.body.removeChild(a);
                        } catch (error) {
                          console.error('Download error:', error);
                          // Fallback to opening in new tab
                          window.open(doc.url, '_blank');
                        }
                      }}
                    >
                      Download
                    </Button>
                  </div>
                );
              })
            ) : (
              <p className="text-gray-500">No documents attached</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 