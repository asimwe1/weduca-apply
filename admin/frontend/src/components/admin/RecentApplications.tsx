import { useState, useEffect } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { fetchData } from "@/utils/api";

type Status = "approved" | "pending" | "rejected";

interface Application {
  _id: string;
  student: {
    name: string;
    email: string;
    avatar?: string;
    initials: string;
  };
  school: string;
  program: string;
  date: string;
  status: Status;
}

const statusStyles = {
  approved: {
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    label: "Approved"
  },
  pending: {
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-700",
    label: "Pending"
  },
  rejected: {
    bgColor: "bg-red-50",
    textColor: "text-red-700",
    label: "Rejected"
  }
};

export default function RecentApplications() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadApplications = async () => {
      try {
        const data = await fetchData('/api/applications'); // Fetch from backend
        setApplications(data.map((app: any) => ({
          _id: app._id,
          student: {
            name: `${app.student.firstName} ${app.student.lastName}`,
            email: app.student.email,
            avatar: app.student.avatar || undefined,
            initials: `${app.student.firstName[0]}${app.student.lastName[0]}`,
          },
          school: app.institution.name,
          program: app.program,
          date: app.date,
          status: app.status,
        })));
      } catch (err) {
        setError('Failed to load recent applications');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadApplications();
  }, []);

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }

  if (loading) return <div className="p-6">Loading recent applications...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Recent Applications</h2>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Student</TableHead>
              <TableHead>School</TableHead>
              <TableHead>Program</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((application) => (
              <TableRow key={application._id}>
                <TableCell>
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-3">
                      {application.student.avatar ? (
                        <img src={application.student.avatar} alt={application.student.name} />
                      ) : (
                        <AvatarFallback className="bg-admin-primary text-white">
                          {application.student.initials}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div>
                      <div className="font-medium">{application.student.name}</div>
                      <div className="text-sm text-gray-500">{application.student.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{application.school}</TableCell>
                <TableCell>{application.program}</TableCell>
                <TableCell>{formatDate(application.date)}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={cn(
                      "font-normal",
                      statusStyles[application.status].bgColor,
                      statusStyles[application.status].textColor
                    )}
                  >
                    {statusStyles[application.status].label}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}