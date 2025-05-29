import { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import { fetchData } from "@/utils/api";

export default function AddStudent() {
  const [loading, setLoading] = useState(false);
  const [sendEmail, setSendEmail] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nationality: "",
    gender: "",
    status: "active" as "active" | "pending" | "inactive",
    education: {
      level: "",
      field: "",
      school: "",
      graduationYear: "",
    },
    notes: "",
    joinDate: new Date().toISOString().split("T")[0],
    photo: "", // New field for photo URL
  });
  const navigate = useNavigate();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetchData('/api/students', {
        method: 'POST',
        body: JSON.stringify({ ...formData, sendEmail }),
      });
      toast.success("Student added successfully");
      navigate("/admin/students");
    } catch (error: any) {
      console.error('Failed to add student:', {
        message: error.message,
        response: error.response ? await error.response.json() : 'No response',
        formData,
      });
      toast.error("Failed to add student. Check the console for details.");
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
        <h1 className="text-2xl font-bold">Add New Student</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-lg">
              <User className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Student Information</h2>
              <p className="text-gray-500">Enter the personal details of the new student</p>
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
              <p className="text-gray-500">Enter details about the student's education</p>
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

          <div className="flex items-start space-x-2 my-4">
            <Checkbox
              id="sendEmail"
              checked={sendEmail}
              onCheckedChange={(checked) => setSendEmail(checked as boolean)}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="sendEmail"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email student with account details
              </label>
              <p className="text-sm text-gray-500">
                Send welcome email with login credentials to the student.
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline" type="button" asChild disabled={loading}>
              <Link to="/admin/students">Cancel</Link>
            </Button>
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Student"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}