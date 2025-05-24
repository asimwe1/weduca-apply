import { useState, useEffect } from "react";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { fetchData } from "@/utils/api";
import FileUpload from "@/components/admin/FileUpload";

type Student = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
};

type Institution = {
  _id: string;
  name: string;
};

interface ApplicationData {
  student: string;
  institution: string;
  program: string;
  date: string;
  documentUrls: string[];
  referenceId?: string;
}

export default function AddApplication() {
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState<Student[]>([]);
  const [institutions, setInstitutions] = useState<Institution[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [formData, setFormData] = useState<ApplicationData>({
    student: "",
    institution: "",
    program: "",
    date: new Date().toISOString().split("T")[0],
    documentUrls: [],
  });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const referenceId = searchParams.get("reference");

  // Fetch students and institutions on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const [studentsData, institutionsData] = await Promise.all([
          fetchData('/api/students'),
          fetchData('/api/institutions'),
        ]);
        setStudents(studentsData);
        setInstitutions(institutionsData);

        // If there's a reference ID, load the reference application
        if (referenceId) {
          const referenceData = await fetchData(`/api/applications/${referenceId}`);
          setFormData(prev => ({
            ...prev,
            institution: referenceData.institution._id,
            program: referenceData.program,
          }));
        }
      } catch (err: any) {
        console.error('Failed to fetch data:', err);
        setFetchError('Failed to load required data. Please try again later.');
      }
    };

    loadData();
  }, [referenceId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (files: File[], uploadedUrls?: string[]) => {
    setFormData({
      ...formData,
      documentUrls: uploadedUrls || []
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate required fields
      if (!formData.student) {
        toast.error("Please select a student");
        setLoading(false);
        return;
      }
      if (!formData.institution) {
        toast.error("Please select an institution");
        setLoading(false);
        return;
      }
      if (!formData.program) {
        toast.error("Please enter a program");
        setLoading(false);
        return;
      }

      // Convert form data to a regular object for JSON submission
      const applicationData = {
        student: formData.student,
        institution: formData.institution,
        program: formData.program,
        date: formData.date,
        documentUrls: formData.documentUrls,
        status: "pending" // Always set status to pending for new applications
      };
      if (referenceId) {
        (applicationData as any).referenceId = referenceId;
      }

      console.log('Submitting application data:', applicationData);

      const response = await fetchData('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData),
      });

      toast.success("Application added successfully");
      navigate("/admin/dashboard");
    } catch (error: any) {
      console.error('Failed to add application:', {
        message: error.message,
        formData,
      });
      toast.error(error.message || "Failed to add application. Check the console for details.");
    } finally {
      setLoading(false);
    }
  };

  if (fetchError) {
    return (
      <div className="space-y-6 p-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link to="/admin/applications">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Applications
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Add New Application</h1>
        </div>
        <p className="text-red-500">{fetchError}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" asChild>
          <Link to="/admin/applications">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Applications
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">
          {referenceId ? "Add Application (with Reference)" : "Add New Application"}
        </h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-lg">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Application Information</h2>
              <p className="text-gray-500">Enter the details of the new application</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="block text-sm font-medium">
              Student <span className="text-red-500">*</span>
              <Select
                value={formData.student}
                onValueChange={handleSelectChange("student")}
                required
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select student" />
                </SelectTrigger>
                <SelectContent>
                  {students.map((student) => (
                    <SelectItem key={student._id} value={student._id}>
                      {student.firstName} {student.lastName} ({student.email})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>

            <label className="block text-sm font-medium">
              Institution <span className="text-red-500">*</span>
              <Select
                value={formData.institution}
                onValueChange={handleSelectChange("institution")}
                required
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select institution" />
                </SelectTrigger>
                <SelectContent>
                  {institutions.map((institution) => (
                    <SelectItem key={institution._id} value={institution._id}>
                      {institution.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>

            <label className="block text-sm font-medium">
              Program <span className="text-red-500">*</span>
              <Input
                name="program"
                value={formData.program}
                onChange={handleChange}
                required
                placeholder="e.g. Computer Science"
                className="mt-1"
              />
            </label>

            <label className="block text-sm font-medium">
              Application Date <span className="text-red-500">*</span>
              <Input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </label>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Supporting Documents</h2>
                <p className="text-gray-500">Upload application documents (max 75MB total)</p>
              </div>
            </div>

            <FileUpload onFilesChange={handleFileChange} />
            <p className="text-sm text-gray-500">
              Upload up to 3 files or a single ZIP file. Maximum total size: 75MB.
              Accepted formats: PDF, Word, ZIP, JPEG, PNG
            </p>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline" type="button" asChild disabled={loading}>
              <Link to="/admin/applications">Cancel</Link>
            </Button>
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700"
              disabled={loading || !formData.student || !formData.institution || !formData.program || students.length === 0 || institutions.length === 0}
            >
              {loading ? "Adding..." : "Add Application"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}