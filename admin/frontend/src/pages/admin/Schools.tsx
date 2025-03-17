import { useState } from "react";
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

type SchoolType = "University" | "College" | "Technical Institute" | "Language School";

interface SchoolData {
  id: string;
  name: string;
  location: string;
  country: string;
  type: SchoolType;
  programs: number;
  students: number;
  status: "active" | "inactive";
}

const schoolsData: SchoolData[] = [
  {
    id: "SCH-001",
    name: "University of Toronto",
    location: "Toronto, ON",
    country: "Canada",
    type: "University",
    programs: 276,
    students: 1542,
    status: "active"
  },
  {
    id: "SCH-002",
    name: "McGill University",
    location: "Montreal, QC",
    country: "Canada",
    type: "University",
    programs: 198,
    students: 1124,
    status: "active"
  },
  {
    id: "SCH-003",
    name: "Boston College",
    location: "Boston, MA",
    country: "United States",
    type: "College",
    programs: 145,
    students: 876,
    status: "active"
  },
  {
    id: "SCH-004",
    name: "University of California Berkeley",
    location: "Berkeley, CA",
    country: "United States",
    type: "University",
    programs: 224,
    students: 1320,
    status: "active"
  },
  {
    id: "SCH-005",
    name: "London School of Economics",
    location: "London",
    country: "United Kingdom",
    type: "University",
    programs: 132,
    students: 765,
    status: "active"
  },
  {
    id: "SCH-006",
    name: "Technical University of Munich",
    location: "Munich",
    country: "Germany",
    type: "Technical Institute",
    programs: 89,
    students: 543,
    status: "active"
  },
  {
    id: "SCH-007",
    name: "University of Melbourne",
    location: "Melbourne",
    country: "Australia",
    type: "University",
    programs: 156,
    students: 934,
    status: "active"
  },
  {
    id: "SCH-008",
    name: "Berlitz Language School",
    location: "Multiple Locations",
    country: "Multiple Countries",
    type: "Language School",
    programs: 24,
    students: 435,
    status: "inactive"
  }
];

export default function Schools() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredSchools = schoolsData.filter(school => {
    const matchesSearch = school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          school.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          school.country.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filter === "all" || 
                           (filter === "active" && school.status === "active") ||
                           (filter === "inactive" && school.status === "inactive");
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Schools Management</h1>
        <Button className="bg-green-600 hover:bg-green-700" asChild>
          <Link to="/admin/schools/add">
            <Plus className="mr-2 h-4 w-4" /> Add School
          </Link>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between bg-white p-4 rounded-lg shadow-sm">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search schools..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Filter className="h-4 w-4 text-gray-500" />
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Schools</SelectItem>
              <SelectItem value="active">Active Only</SelectItem>
              <SelectItem value="inactive">Inactive Only</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>School Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-center">Programs</TableHead>
                <TableHead className="text-center">Students</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSchools.map((school) => (
                <TableRow key={school.id} className="cursor-pointer hover:bg-gray-50">
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <div className="bg-green-100 p-2 rounded-md mr-3">
                        <School className="h-4 w-4 text-green-600" />
                      </div>
                      {school.name}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>{school.location}</div>
                    <div className="text-sm text-gray-500">{school.country}</div>
                  </TableCell>
                  <TableCell>{school.type}</TableCell>
                  <TableCell className="text-center">{school.programs}</TableCell>
                  <TableCell className="text-center">{school.students}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        school.status === "active"
                          ? "bg-green-50 text-green-700"
                          : "bg-gray-50 text-gray-700"
                      }
                    >
                      {school.status === "active" ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
