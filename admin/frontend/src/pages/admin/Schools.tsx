import { useState, useEffect } from "react";
import { Search, Plus, Filter, School } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { fetchData } from "@/utils/api";

interface SchoolData {
  _id: string;
  name: string;
  address: string; // Changed from 'location' to match backend
  country: string;
  type: string;
  programs: number;
  students: number;
  status: "active" | "inactive";
}

export default function Schools() {
  const [schools, setSchools] = useState<SchoolData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSchools = async () => {
      try {
        const data = await fetchData('/institutions');
        if (!Array.isArray(data)) {
          throw new Error("Unexpected response format from server");
        }
        setSchools(
          data.map((school: any) => ({
            _id: school._id,
            name: school.name,
            address: school.address, // Match backend field
            country: school.country || "Unknown",
            type: school.type || "University",
            programs: school.programs || 0,
            students: school.students || 0,
            status: school.status || "active",
          }))
        );
      } catch (err) {
        setError("Failed to load schools. Please try again later.");
        console.error('Failed to fetch schools:', err);
      } finally {
        setLoading(false);
      }
    };
    loadSchools();
  }, []);

  const filteredSchools = schools.filter((school) => {
    const matchesSearch =
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || filter === school.status;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Schools Management</h1>
        <Button className="bg-green-600 hover:bg-green-700" asChild>
          <Link to="/admin/schools/add">
            <Plus className="mr-2 h-4 w-4" /> Add School
          </Link>
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search schools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-32">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <div className="text-center py-4">Loading schools...</div>
      ) : error ? (
        <div className="text-center py-4 text-red-600">{error}</div>
      ) : filteredSchools.length === 0 ? (
        <div className="text-center py-4 text-gray-500">
          There are no schools registered yet.
        </div>
      ) : (
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Programs</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSchools.map((school) => (
                <TableRow key={school._id}>
                  <TableCell className="font-medium">{school.name}</TableCell>
                  <TableCell>{school.address}</TableCell>
                  <TableCell>{school.country}</TableCell>
                  <TableCell>{school.type}</TableCell>
                  <TableCell>{school.programs}</TableCell>
                  <TableCell>{school.students}</TableCell>
                  <TableCell>
                    <Badge
                      variant={school.status === "active" ? "default" : "secondary"}
                    >
                      {school.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}