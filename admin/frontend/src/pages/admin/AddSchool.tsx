
import { useState } from "react";
import { School, ArrowLeft, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function AddSchool() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("School added successfully");
      navigate("/admin/schools");
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" asChild>
          <Link to="/admin/schools">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Schools
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Add New School</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-lg">
              <School className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">School Information</h2>
              <p className="text-gray-500">Enter the details of the new school</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <label className="block text-sm font-medium">
                School Name <span className="text-red-500">*</span>
                <Input className="mt-1" required placeholder="e.g. University of Toronto" />
              </label>
              
              <label className="block text-sm font-medium">
                Type <span className="text-red-500">*</span>
                <Select required>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select school type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="university">University</SelectItem>
                    <SelectItem value="college">College</SelectItem>
                    <SelectItem value="technical">Technical Institute</SelectItem>
                    <SelectItem value="language">Language School</SelectItem>
                  </SelectContent>
                </Select>
              </label>
              
              <label className="block text-sm font-medium">
                Website
                <Input className="mt-1" type="url" placeholder="https://www.example.edu" />
              </label>
            </div>
            
            <div className="space-y-4">
              <label className="block text-sm font-medium">
                Location <span className="text-red-500">*</span>
                <Input className="mt-1" required placeholder="e.g. Toronto, ON" />
              </label>
              
              <label className="block text-sm font-medium">
                Country <span className="text-red-500">*</span>
                <Select required>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="usa">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                    <SelectItem value="germany">Germany</SelectItem>
                    <SelectItem value="france">France</SelectItem>
                  </SelectContent>
                </Select>
              </label>
              
              <label className="block text-sm font-medium">
                Email <span className="text-red-500">*</span>
                <Input className="mt-1" type="email" required placeholder="admissions@school.edu" />
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium">
              Description
              <Textarea 
                className="mt-1" 
                placeholder="Brief description of the school..."
                rows={4}
              />
            </label>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-dashed border-gray-300 text-center">
            <div className="flex flex-col items-center justify-center py-4">
              <Upload className="h-10 w-10 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500 mb-1">Upload school logo</p>
              <p className="text-xs text-gray-400 mb-4">SVG, PNG or JPG (max. 2MB)</p>
              <Button type="button" variant="outline" size="sm">
                Select File
              </Button>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline" type="button" asChild>
              <Link to="/admin/schools">Cancel</Link>
            </Button>
            <Button 
              type="submit" 
              className="bg-green-600 hover:bg-green-700"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add School"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
