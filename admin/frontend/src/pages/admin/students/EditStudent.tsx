import { useState, useEffect } from "react";
import { User, ArrowLeft, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { fetchData } from "@/utils/api";

interface StudentData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  nationality: string;
  gender: string;
  status: "active" | "pending" | "inactive";
  education: {
    level: string;
    field: string;
    school: string;
    graduationYear: string;
  };
  notes: string;
  joinDate: string;
  photo: string;
}

export default function EditStudent() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<StudentData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nationality: "",
    gender: "",
    status: "active",
    education: {
      level: "",
      field: "",
      school: "",
      graduationYear: "",
    },
    notes: "",
    joinDate: new Date().toISOString().split("T")[0],
    photo: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const data = await fetchData(`/api/students/${id}`);
        // Format dates for input fields
        data.dateOfBirth = data.dateOfBirth ? new Date(data.dateOfBirth).toISOString().split('T')[0] : '';
        data.joinDate = data.joinDate ? new Date(data.joinDate).toISOString().split('T')[0] : '';
        setFormData(data);
      } catch (error: any) {
        toast.error("Failed to load student data");
        console.error('Error fetching student:', error);
      }
    };

    fetchStudent();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name.includes("education.")) {
      const educationKey = name.split(".")[1];
      setFormData({
        ...formData,
        education: { ...formData.education, [educationKey]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSelectChange = (name: string) => (value: string) => {
    if (name.startsWith("education.")) {
      const educationKey = name.split(".")[1];
      setFormData({
        ...formData,
        education: { ...formData.education, [educationKey]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      toast.error("First name is required");
      return false;
    }
    if (!formData.lastName.trim()) {
      toast.error("Last name is required");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.nationality.trim()) {
      toast.error("Nationality is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await fetchData(`/api/students/${id}`, {
        method: 'PUT',
        body: JSON.stringify(formData),
      });
      toast.success("Student updated successfully");
      navigate("/admin/students");
    } catch (error: any) {
      console.error('Failed to update student:', error);
      toast.error("Failed to update student");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" asChild>
          <Link to="/admin/students">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Students
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Edit Student</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-green-100 p-3 rounded-lg">
            <User className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Student Information</h2>
            <p className="text-gray-500">Update the personal details of the student</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block text-sm font-medium">
            First Name <span className="text-red-500">*</span>
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="e.g. John"
              className="mt-1"
            />
          </label>
          <label className="block text-sm font-medium">
            Last Name <span className="text-red-500">*</span>
            <Input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="e.g. Doe"
              className="mt-1"
            />
          </label>
          <label className="block text-sm font-medium">
            Email <span className="text-red-500">*</span>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="e.g. john.doe@example.com"
              className="mt-1"
            />
          </label>
          <label className="block text-sm font-medium">
            Phone Number
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +1 (555) 123-4567"
              className="mt-1"
            />
          </label>
          <label className="block text-sm font-medium">
            Date of Birth
            <Input
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="mt-1"
            />
          </label>
          <label className="block text-sm font-medium">
            Nationality <span className="text-red-500">*</span>
            <Select
              value={formData.nationality}
              onValueChange={handleSelectChange("nationality")}
              required
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Canada">Canada</SelectItem>
                <SelectItem value="United States">United States</SelectItem>
                <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                <SelectItem value="India">India</SelectItem>
                <SelectItem value="China">China</SelectItem>
                <SelectItem value="Nigeria">Nigeria</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </label>
          <label className="block text-sm font-medium">
            Gender
            <Select
              value={formData.gender}
              onValueChange={handleSelectChange("gender")}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="prefer-not">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
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
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </label>
        </div>

        <div className="flex items-center gap-4 mt-8 mb-6">
          <div className="bg-green-100 p-3 rounded-lg">
            <GraduationCap className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Education Information</h2>
            <p className="text-gray-500">Update details about the student's education</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block text-sm font-medium">
            Highest Education Level
            <Select
              value={formData.education.level}
              onValueChange={handleSelectChange("education.level")}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select education level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="High School">High School</SelectItem>
                <SelectItem value="Diploma">Diploma</SelectItem>
                <SelectItem value="Bachelor's Degree">Bachelor's Degree</SelectItem>
                <SelectItem value="Master's Degree">Master's Degree</SelectItem>
                <SelectItem value="PhD">PhD</SelectItem>
              </SelectContent>
            </Select>
          </label>
          <label className="block text-sm font-medium">
            Field of Study
            <Input
              name="education.field"
              value={formData.education.field}
              onChange={handleChange}
              placeholder="e.g. Computer Science"
              className="mt-1"
            />
          </label>
          <label className="block text-sm font-medium">
            School/Institution
            <Input
              name="education.school"
              value={formData.education.school}
              onChange={handleChange}
              placeholder="e.g. University of Toronto"
              className="mt-1"
            />
          </label>
          <label className="block text-sm font-medium">
            Graduation Year
            <Input
              name="education.graduationYear"
              type="number"
              value={formData.education.graduationYear}
              onChange={handleChange}
              placeholder="e.g. 2023"
              className="mt-1"
            />
          </label>
        </div>

        <label className="block text-sm font-medium">
          Notes
          <Textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any additional information about the student..."
            rows={3}
            className="mt-1"
          />
        </label>

        <label className="block text-sm font-medium">
          Photo URL (Optional)
          <Input
            name="photo"
            type="url"
            value={formData.photo}
            onChange={handleChange}
            placeholder="e.g. https://example.com/photo.jpg"
            className="mt-1"
          />
          {formData.photo && (
            <img
              src={formData.photo}
              alt="Photo Preview"
              className="mt-2 h-20 w-20 object-cover rounded-full"
              onError={() => toast.error("Invalid photo URL")}
            />
          )}
        </label>

        <div className="flex justify-end gap-3">
          <Button variant="outline" type="button" asChild disabled={loading}>
            <Link to="/admin/students">Cancel</Link>
          </Button>
          <Button
            type="submit"
            className="bg-green-600 hover:bg-green-700"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </div>
  );
} 