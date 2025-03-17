import { useState } from "react";
import { Search, Plus, Filter, Users } from "lucide-react";
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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

interface StudentData {
  id: string;
  name: string;
  email: string;
  initials: string;
  country: string;
  applications: number;
  status: "active" | "pending" | "inactive";
  joinDate: string;
}

const studentsData: StudentData[] = [
  {
    id: "STU-001",
    name: "Emma Wilson",
    email: "emma.w@example.com",
    initials: "EW",
    country: "Canada",
    applications: 3,
    status: "active",
    joinDate: "2023-06-12"
  },
  {
    id: "STU-002",
    name: "Michael Chen",
    email: "m.chen@example.com",
    initials: "MC",
    country: "China",
    applications: 5,
    status: "active",
    joinDate: "2023-05-24"
  },
  {
    id: "STU-003",
    name: "Sophia Rodriguez",
    email: "sophia.r@example.com",
    initials: "SR",
    country: "Mexico",
    applications: 2,
    status: "pending",
    joinDate: "2023-07-15"
  },
  {
    id: "STU-004",
    name: "James Johnson",
    email: "j.johnson@example.com",
    initials: "JJ",
    country: "United States",
    applications: 4,
    status: "active",
    joinDate: "2023-04-30"
  },
  {
    id: "STU-005",
    name: "Olivia Thompson",
    email: "o.thompson@example.com",
    initials: "OT",
    country: "United Kingdom",
    applications: 1,
    status: "inactive",
    joinDate: "2023-03-18"
  },
  {
    id: "STU-006",
    name: "Mohammed Al-Farsi",
    email: "m.alfarsi@example.com",
    initials: "MF",
    country: "UAE",
    applications: 3,
    status: "active",
    joinDate: "2023-06-05"
  },
  {
    id: "STU-007",
    name: "Aisha Patel",
    email: "a.patel@example.com",
    initials: "AP",
    country: "India",
    applications: 2,
    status: "pending",
    joinDate: "2023-07-22"
  },
  {
    id: "STU-008",
    name: "Lucas Silva",
    email: "l.silva@example.com",
    initials: "LS",
    country: "Brazil",
    applications: 3,
    status: "active",
    joinDate: "2023-05-14"
  }
];

const statusStyles = {
  active: {
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    label: "Active"
  },
  pending: {
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-700",
    label: "Pending"
  },
  inactive: {
    bgColor: "bg-gray-50",
    textColor: "text-gray-700",
    label: "Inactive"
  }
};

export default function Students() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredStudents = studentsData.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          student.country.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filter === "all" || filter === student.status;
    
    return matchesSearch && matchesFilter;
  });

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Students Management</h1>
        <Button className="bg-green-600 hover:bg-green-700" asChild>
          <Link to="/admin/students/add">
            <Plus className="mr-2 h-4 w-4" /> Add Student
          </Link>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between bg-white p-4 rounded-lg shadow-sm">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search students..."
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
              <SelectItem value="all">All Students</SelectItem>
              <SelectItem value="active">Active Only</SelectItem>
              <SelectItem value="pending">Pending Only</SelectItem>
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
                <TableHead className="w-[250px]">Student</TableHead>
                <TableHead>Country</TableHead>
                <TableHead className="text-center">Applications</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Join Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id} className="cursor-pointer hover:bg-gray-50">
                  <TableCell>
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-3">
                        <AvatarFallback className="bg-admin-primary text-white">
                          {student.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{student.name}</div>
                        <div className="text-sm text-gray-500">{student.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{student.country}</TableCell>
                  <TableCell className="text-center">{student.applications}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`${statusStyles[student.status].bgColor} ${statusStyles[student.status].textColor}`}
                    >
                      {statusStyles[student.status].label}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatDate(student.joinDate)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
