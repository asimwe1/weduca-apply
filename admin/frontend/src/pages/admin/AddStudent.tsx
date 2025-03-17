
import { useState } from "react";
import { User, ArrowLeft, Upload, GraduationCap } from "lucide-react";
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

export default function AddStudent() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Student added successfully");
      navigate("/admin/students");
    }, 1000);
  };

  return (
    <div className="space-y-6">
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
            <div className="space-y-4">
              <label className="block text-sm font-medium">
                First Name <span className="text-red-500">*</span>
                <Input className="mt-1" required placeholder="e.g. John" />
              </label>
              
              <label className="block text-sm font-medium">
                Email <span className="text-red-500">*</span>
                <Input className="mt-1" type="email" required placeholder="e.g. john.doe@example.com" />
              </label>
              
              <label className="block text-sm font-medium">
                Date of Birth
                <Input className="mt-1" type="date" />
              </label>

              <label className="block text-sm font-medium">
                Nationality <span className="text-red-500">*</span>
                <Select required>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="usa">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="china">China</SelectItem>
                    <SelectItem value="nigeria">Nigeria</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </label>
            </div>
            
            <div className="space-y-4">
              <label className="block text-sm font-medium">
                Last Name <span className="text-red-500">*</span>
                <Input className="mt-1" required placeholder="e.g. Doe" />
              </label>
              
              <label className="block text-sm font-medium">
                Phone Number
                <Input className="mt-1" type="tel" placeholder="e.g. +1 (555) 123-4567" />
              </label>
              
              <label className="block text-sm font-medium">
                Gender
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="nonbinary">Non-binary</SelectItem>
                    <SelectItem value="prefer-not">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </label>

              <label className="block text-sm font-medium">
                Status <span className="text-red-500">*</span>
                <Select required defaultValue="active">
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
            <div className="space-y-4">
              <label className="block text-sm font-medium">
                Highest Education Level
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-school">High School</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                    <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                    <SelectItem value="master">Master's Degree</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                  </SelectContent>
                </Select>
              </label>
              
              <label className="block text-sm font-medium">
                Field of Study
                <Input className="mt-1" placeholder="e.g. Computer Science" />
              </label>
            </div>
            
            <div className="space-y-4">
              <label className="block text-sm font-medium">
                School/Institution
                <Input className="mt-1" placeholder="e.g. University of Toronto" />
              </label>
              
              <label className="block text-sm font-medium">
                Graduation Year
                <Input className="mt-1" type="number" placeholder="e.g. 2023" />
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium">
              Notes
              <Textarea 
                className="mt-1" 
                placeholder="Any additional information about the student..."
                rows={3}
              />
            </label>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-dashed border-gray-300 text-center">
            <div className="flex flex-col items-center justify-center py-4">
              <Upload className="h-10 w-10 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500 mb-1">Upload student photo</p>
              <p className="text-xs text-gray-400 mb-4">JPEG or PNG (max. 1MB)</p>
              <Button type="button" variant="outline" size="sm">
                Select File
              </Button>
            </div>
          </div>

          <div className="flex items-start space-x-2 my-4">
            <Checkbox id="terms" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms"
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
            <Button variant="outline" type="button" asChild>
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
