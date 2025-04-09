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
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { fetchData } from "@/utils/api";

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

export default function AddApplication() {
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState<Student[]>([]);
  const [institutions, setInstitutions] = useState<Institution[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    student: "",
    institution: "",
    program: "",
    date: new Date().toISOString().split("T")[0], // Default to today
    status: "pending" as "pending" | "approved" | "rejected",
  });
  const navigate = useNavigate();

  // Fetch students and institutions on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const [studentsData, institutionsData] = await Promise.all([
          fetchData('/students'),
          fetchData('/institutions'),
        ]);
        setStudents(studentsData);
        setInstitutions(institutionsData);
      } catch (err: any) {
        console.error('Failed to fetch data:', err);
        setFetchError('Failed to load students or institutions. Please try again later.');
      }
    };

    loadData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetchData('/applications', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      toast.success("Application added successfully");
      navigate("/admin/applications");
    } catch (error: any) {
      console.error('Failed to add application:', {
        message: error.message,
        response: error.response ? await error.response.json() : 'No response',
        formData,
      });
      toast.error("Failed to add application. Check the console for details.");
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
        <h1 className="text-2xl font-bold">Add New Application</h1>
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

            <label className="block text-sm font-medium">
              Status <span className="text-red-500">*</span>
              <Select
                value={formData.status}
                onValueChange={handleSelectChange("status")}
                required
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

          <div className="flex justify-end gap-3">
            <Button variant="outline" type="button" asChild disabled={loading}>
              <Link to="/admin/applications">Cancel</Link>
            </Button>
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700"
              disabled={loading || students.length === 0 || institutions.length === 0}
            >
              {loading ? "Adding..." : "Add Application"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}