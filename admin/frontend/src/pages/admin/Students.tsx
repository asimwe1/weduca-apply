import { useState, useEffect } from "react";
import { Search, Plus, Filter, Users, Edit } from "lucide-react";
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
import { fetchData } from "@/utils/api";

interface StudentData {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  nationality: string;
  applicationCount: number; // We'll compute this in the frontend
  status: "active" | "pending" | "inactive";
  joinDate: string;
}

interface Application {
  _id: string;
  student: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  institution: {
    _id: string;
    name: string;
  };
  program: string;
  date: string;
  status: string;
  __v: number;
}

const statusStyles = {
  active: { bgColor: "bg-green-50", textColor: "text-green-700", label: "Active" },
  pending: { bgColor: "bg-yellow-50", textColor: "text-yellow-700", label: "Pending" },
  inactive: { bgColor: "bg-gray-50", textColor: "text-gray-700", label: "Inactive" },
};

export default function Students() {
  const [students, setStudents] = useState<StudentData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadStudents = async () => {
      try {
        setLoading(true);

        // Step 1: Fetch students
        const studentsData = await fetchData('/students');
        if (!Array.isArray(studentsData)) throw new Error("Unexpected students response format");

        // Step 2: Fetch all applications
        const applicationsData: Application[] = await fetchData('/applications/all');
        if (!Array.isArray(applicationsData)) throw new Error("Unexpected applications response format");

        // Step 3: Count applications per student
        const applicationCounts: { [key: string]: number } = {};
        applicationsData.forEach((app) => {
          const studentId = app.student._id;
          applicationCounts[studentId] = (applicationCounts[studentId] || 0) + 1;
        });

        // Step 4: Map students data and include application count
        const studentsWithCounts = studentsData.map((student: any) => ({
          _id: student._id,
          firstName: student.firstName,
          lastName: student.lastName,
          email: student.email,
          nationality: student.nationality || "Unknown",
          applicationCount: applicationCounts[student._id] || 0, // Use the computed count
          status: student.status || "active",
          joinDate: student.joinDate,
        }));

        setStudents(studentsWithCounts);
      } catch (err) {
        setError("Failed to load students or applications. Please try again later.");
        console.error('Failed to fetch data:', err);
      } finally {
        setLoading(false);
      }
    };
    loadStudents();
  }, []);

  const filteredStudents = students.filter((student) => {
    const name = `${student.firstName} ${student.lastName}`;
    const matchesSearch =
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.nationality.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || filter === student.status;
    return matchesSearch && matchesFilter;
  });

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }

  return (
    <div className="space-y-6 p-6">
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

      {loading ? (
        <div className="text-center py-4">Loading students...</div>
      ) : error ? (
        <div className="text-center py-4 text-red-600">{error}</div>
      ) : filteredStudents.length === 0 ? (
        <div className="text-center py-4 text-gray-500">
          There are no students registered yet.
        </div>
      ) : (
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
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student._id} className="hover:bg-gray-50">
                    <TableCell>
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-3">
                          <AvatarFallback className="bg-admin-primary text-white">
                            {student.firstName[0] + student.lastName[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{`${student.firstName} ${student.lastName}`}</div>
                          <div className="text-sm text-gray-500">{student.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{student.nationality}</TableCell>
                    <TableCell className="text-center">{student.applicationCount}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`${statusStyles[student.status].bgColor} ${statusStyles[student.status].textColor}`}
                      >
                        {statusStyles[student.status].label}
                      </Badge>
                    </TableCell>
                    <TableCell>{formatDate(student.joinDate)}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                      >
                        <Link to={`/admin/students/edit/${student._id}`}>
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit {student.firstName} ${student.lastName}</span>
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
}