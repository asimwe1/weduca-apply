import { useState, useEffect } from "react";
import { ArrowLeft, Plus, Edit, User, GraduationCap, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";
import { fetchData } from "@/utils/api";

interface StudentData {
  _id: string;
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

interface Application {
  _id: string;
  institution: {
    name: string;
  };
  program: string;
  submissionDate: string;
  status: "pending" | "under_review" | "approved" | "rejected" | "withdrawn";
}

const statusStyles = {
  active: { bgColor: "bg-green-50", textColor: "text-green-700", label: "Active" },
  pending: { bgColor: "bg-yellow-50", textColor: "text-yellow-700", label: "Pending" },
  inactive: { bgColor: "bg-gray-50", textColor: "text-gray-700", label: "Inactive" },
};

const applicationStatusStyles = {
  pending: { bgColor: "bg-yellow-50", textColor: "text-yellow-700", label: "Pending" },
  under_review: { bgColor: "bg-blue-50", textColor: "text-blue-700", label: "Under Review" },
  approved: { bgColor: "bg-green-50", textColor: "text-green-700", label: "Approved" },
  rejected: { bgColor: "bg-red-50", textColor: "text-red-700", label: "Rejected" },
  withdrawn: { bgColor: "bg-gray-50", textColor: "text-gray-700", label: "Withdrawn" },
};

export default function ViewStudent() {
  const [student, setStudent] = useState<StudentData | null>(null);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const loadStudentData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch student data
        const studentData = await fetchData(`/api/students/${id}`);
        setStudent(studentData);

        // Fetch student's applications
        const applicationsData = await fetchData(`/api/applications?student=${id}`);
        setApplications(applicationsData);
      } catch (err: any) {
        setError("Failed to load student data");
        console.error('Error fetching student:', err);
      } finally {
        setLoading(false);
      }
    };

    loadStudentData();
  }, [id]);

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }

  if (loading) {
    return <div className="text-center py-4">Loading student data...</div>;
  }

  if (error || !student) {
    return <div className="text-center py-4 text-red-600">{error || "Student not found"}</div>;
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link to="/admin/students">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Students
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Student Details</h1>
        </div>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link to={`/admin/students/edit/${student._id}`}>
            <Edit className="h-4 w-4 mr-2" />
            Edit Student
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Personal Information */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-2">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-lg">
              <User className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Personal Information</h2>
              <p className="text-gray-500">Student's personal details and contact information</p>
            </div>
          </div>

          <div className="flex items-center gap-6 mb-6">
            <Avatar className="h-20 w-20">
              {student.photo ? (
                <img
                  src={student.photo}
                  alt={`${student.firstName} ${student.lastName}`}
                  className="h-20 w-20 rounded-full object-cover"
                />
              ) : (
                <AvatarFallback className="bg-admin-primary text-white text-2xl">
                  {student.firstName[0] + student.lastName[0]}
                </AvatarFallback>
              )}
            </Avatar>
            <div>
              <h3 className="text-2xl font-semibold">{`${student.firstName} ${student.lastName}`}</h3>
              <p className="text-gray-500">{student.email}</p>
              <Badge
                variant="outline"
                className={`mt-2 ${statusStyles[student.status].bgColor} ${statusStyles[student.status].textColor}`}
              >
                {statusStyles[student.status].label}
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-medium text-gray-500">Phone Number</p>
              <p className="mt-1">{student.phone || "Not provided"}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Date of Birth</p>
              <p className="mt-1">{student.dateOfBirth ? formatDate(student.dateOfBirth) : "Not provided"}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Nationality</p>
              <p className="mt-1">{student.nationality}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Gender</p>
              <p className="mt-1">{student.gender || "Not specified"}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Join Date</p>
              <p className="mt-1">{formatDate(student.joinDate)}</p>
            </div>
          </div>
        </div>

        {/* Education Information */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-lg">
              <GraduationCap className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Education</h2>
              <p className="text-gray-500">Academic background</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Highest Education Level</p>
              <p className="mt-1">{student.education.level || "Not specified"}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Field of Study</p>
              <p className="mt-1">{student.education.field || "Not specified"}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">School/Institution</p>
              <p className="mt-1">{student.education.school || "Not specified"}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Graduation Year</p>
              <p className="mt-1">{student.education.graduationYear || "Not specified"}</p>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Applications</h2>
                <p className="text-gray-500">Student's application history</p>
              </div>
            </div>
            <Button asChild>
              <Link to={`/admin/applications/add?student=${student._id}`}>
                <Plus className="h-4 w-4 mr-2" />
                New Application
              </Link>
            </Button>
          </div>

          {applications.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No applications found for this student.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {applications.map((application) => (
                <Link
                  key={application._id}
                  to={`/admin/applications/${application._id}`}
                  className="block p-4 rounded-lg border border-gray-200 hover:border-green-500 transition-colors"
                >
                  <h3 className="font-medium">{application.institution.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{application.program}</p>
                  <div className="flex items-center justify-between mt-4">
                    <Badge
                      variant="outline"
                      className={`${applicationStatusStyles[application.status].bgColor} ${applicationStatusStyles[application.status].textColor}`}
                    >
                      {applicationStatusStyles[application.status].label}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {formatDate(application.submissionDate)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Notes */}
        {student.notes && (
          <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-3">
            <h2 className="text-xl font-semibold mb-4">Notes</h2>
            <p className="text-gray-700 whitespace-pre-wrap">{student.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
} 