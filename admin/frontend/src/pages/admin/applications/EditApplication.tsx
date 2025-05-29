import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { fetchData } from "@/utils/api";
import { toast } from "sonner";
import FileUpload from "@/components/admin/FileUpload";

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
  documentUrls: string[];
}

interface Institution {
  _id: string;
  name: string;
}

export default function EditApplication() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [institutions, setInstitutions] = useState<Institution[]>([]);
  const [application, setApplication] = useState<Application | null>(null);
  const [formData, setFormData] = useState({
    institution: "",
    program: "",
    status: "pending" as "pending" | "approved" | "rejected",
    documentUrls: [] as string[],
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const [applicationData, institutionsData] = await Promise.all([
          fetchData(`/api/applications/${id}`),
          fetchData("/api/institutions"),
        ]);

        if (applicationData.status !== "pending") {
          toast.error("Only pending applications can be edited");
          navigate(`/admin/applications/${id}`);
          return;
        }

        setApplication(applicationData);
        setInstitutions(institutionsData);
        setFormData({
          institution: applicationData.institution._id,
          program: applicationData.program,
          status: applicationData.status,
          documentUrls: applicationData.documentUrls,
        });
      } catch (error) {
        console.error("Failed to load application:", error);
        toast.error("Failed to load application details");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id, navigate]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (files: File[], uploadedUrls?: string[]) => {
    if (uploadedUrls) {
      setFormData((prev) => ({
        ...prev,
        documentUrls: [...new Set([...prev.documentUrls, ...uploadedUrls])],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const dataToSubmit = {
        ...formData,
        documentUrls: formData.documentUrls.length > 0 ? formData.documentUrls : application.documentUrls,
      };

      await fetchData(`/api/applications/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      toast.success("Application updated successfully");
      navigate(`/admin/applications/${id}`);
    } catch (error) {
      console.error("Failed to update application:", error);
      toast.error("Failed to update application");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-6">Loading application details...</div>;
  }

  if (!application) {
    return <div className="p-6 text-red-600">Application not found</div>;
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" asChild>
          <Link to={`/admin/applications/${id}`}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Application
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Edit Application</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Student Information</h2>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Name:</span>{" "}
                  {`${application.student.firstName} ${application.student.lastName}`}
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  {application.student.email}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block">
                <span className="font-medium">Institution</span>
                <Select
                  value={formData.institution}
                  onValueChange={handleSelectChange("institution")}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select institution" />
                  </SelectTrigger>
                  <SelectContent>
                    {institutions.map((inst) => (
                      <SelectItem key={inst._id} value={inst._id}>
                        {inst.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </label>

              <label className="block">
                <span className="font-medium">Program</span>
                <Input
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="mt-1"
                />
              </label>

              <label className="block">
                <span className="font-medium">Status</span>
                <Select
                  value={formData.status}
                  onValueChange={handleSelectChange("status")}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Documents</h2>
            <FileUpload
              onFilesChange={handleFileChange}
              existingUrls={formData.documentUrls}
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              asChild
              disabled={saving}
            >
              <Link to={`/admin/applications/${id}`}>Cancel</Link>
            </Button>
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700"
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
} 