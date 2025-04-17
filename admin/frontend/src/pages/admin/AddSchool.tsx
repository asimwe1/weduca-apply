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
import { fetchData } from "@/utils/api";

export default function AddSchool() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    address: "", // Changed from 'location' to match backend
    country: "",
    email: "",
    description: "",
    logo: "", // URL or file handling TBD
    programs: 0,
    students: 0,
    status: "active" as "active" | "inactive",
    details: {
      schoolType: "",
      tuition: "",
      costOfLiving: "",
      undergradDuration: "",
      applicationFee: "",
      gradDuration: "",
    },
  });
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name.includes("details.")) {
      const detailKey = name.split(".")[1];
      setFormData({
        ...formData,
        details: { ...formData.details, [detailKey]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetchData('/api/institutions', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      toast.success("School added successfully");
      navigate("/admin/schools");
    } catch (error) {
      toast.error("Failed to add school. Please check your input and try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center">
          <School className="mr-2 h-6 w-6" /> Add New School
        </h1>
        <Button variant="outline" asChild>
          <Link to="/admin/schools">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Schools
          </Link>
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block text-sm font-medium">
            School Name <span className="text-red-500">*</span>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="e.g., University of Example"
            />
          </label>

          <label className="block text-sm font-medium">
            Type <span className="text-red-500">*</span>
            <Select
              value={formData.type}
              onValueChange={handleSelectChange("type")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select school type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="University">University</SelectItem>
                <SelectItem value="College">College</SelectItem>
                <SelectItem value="Institute">Institute</SelectItem>
              </SelectContent>
            </Select>
          </label>

          <label className="block text-sm font-medium">
            Address <span className="text-red-500">*</span>
            <Input
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="e.g., 123 Main St, City"
            />
          </label>

          <label className="block text-sm font-medium">
            Country <span className="text-red-500">*</span>
            <Input
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              placeholder="e.g., Canada"
            />
          </label>

          <label className="block text-sm font-medium">
            Email
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g., admissions@example.com"
            />
          </label>

          <label className="block text-sm font-medium">
            Number of Programs
            <Input
              name="programs"
              type="number"
              value={formData.programs}
              onChange={handleChange}
              placeholder="e.g., 150"
            />
          </label>

          <label className="block text-sm font-medium">
            Number of Students
            <Input
              name="students"
              type="number"
              value={formData.students}
              onChange={handleChange}
              placeholder="e.g., 1000"
            />
          </label>

          <label className="block text-sm font-medium">
            Status
            <Select
              value={formData.status}
              onValueChange={handleSelectChange("status")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </label>

          <label className="block text-sm font-medium col-span-2">
            Description
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter a brief description of the school..."
            />
          </label>

          {/* Details Section */}
          <label className="block text-sm font-medium">
            School Type (e.g., Public/Private)
            <Input
              name="details.schoolType"
              value={formData.details.schoolType}
              onChange={handleChange}
              placeholder="e.g., Public"
            />
          </label>

          <label className="block text-sm font-medium">
            Tuition
            <Input
              name="details.tuition"
              value={formData.details.tuition}
              onChange={handleChange}
              placeholder="e.g., $50,000 CAD / Year"
            />
          </label>

          <label className="block text-sm font-medium">
            Cost of Living
            <Input
              name="details.costOfLiving"
              value={formData.details.costOfLiving}
              onChange={handleChange}
              placeholder="e.g., $15,000 CAD / Year"
            />
          </label>

          <label className="block text-sm font-medium">
            Undergraduate Duration
            <Input
              name="details.undergradDuration"
              value={formData.details.undergradDuration}
              onChange={handleChange}
              placeholder="e.g., 4 years"
            />
          </label>

          <label className="block text-sm font-medium">
            Application Fee
            <Input
              name="details.applicationFee"
              value={formData.details.applicationFee}
              onChange={handleChange}
              placeholder="e.g., $150 CAD"
            />
          </label>

          <label className="block text-sm font-medium">
            Graduate Duration
            <Input
              name="details.gradDuration"
              value={formData.details.gradDuration}
              onChange={handleChange}
              placeholder="e.g., 2 years"
            />
          </label>

          <label className="block text-sm font-medium col-span-2">
            Logo URL (optional)
            <Input
              name="logo"
              value={formData.logo}
              onChange={handleChange}
              placeholder="e.g., https://example.com/logo.png"
            />
            <p className="text-sm text-gray-500 mt-1">
              Alternatively, upload a logo file (not implemented yet).
            </p>
          </label>
        </div>

        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/admin/schools")}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add School"}
          </Button>
        </div>
      </form>
    </div>
  );
}