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
import { toast } from "sonner";

type Status = "approved" | "pending" | "rejected" | "under_review" | "withdrawn";

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
  submissionDate: string;
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
  },
  under_review: {
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    label: "Under Review"
  },
  withdrawn: {
    bgColor: "bg-gray-50",
    textColor: "text-gray-700",
    label: "Withdrawn"
  }
};

export default function RecentApplications() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadApplications = async () => {
      try {
        const response = await fetchData('/api/applications/recent');
        
        if (!Array.isArray(response)) {
          console.error('Expected array but got:', response);
          toast.error("Invalid data format received from server");
          return;
        }

        const transformedApplications = response.map((app: any) => {
          // Extract first and last name from email if student name is not available
          const emailName = app.student?.email?.split('@')[0] || '';
          const [firstName = '', lastName = ''] = emailName.split('.');
          
          return {
            _id: app._id,
            student: {
              name: app.student?.firstName && app.student?.lastName
                ? `${app.student.firstName} ${app.student.lastName}`
                : emailName.replace('.', ' '),
              email: app.student?.email || 'N/A',
              avatar: app.student?.avatar,
              initials: app.student?.firstName && app.student?.lastName
                ? `${app.student.firstName[0]}${app.student.lastName[0]}`
                : `${firstName[0]}${lastName[0]}`.toUpperCase(),
            },
            school: app.institution?.name || 'Unknown Institution',
            program: app.program || 'Unknown Program',
            submissionDate: app.submissionDate || app.createdAt || new Date().toISOString(),
            status: app.status || 'pending',
          };
        });

        setApplications(transformedApplications);
      } catch (err) {
        console.error('Error loading applications:', err);
        setError('Failed to load recent applications');
        toast.error("Failed to load recent applications");
      } finally {
        setLoading(false);
      }
    };

    loadApplications();
  }, []);

  function formatDate(dateString: string) {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch (error) {
      console.error('Date formatting error:', error);
      return 'Invalid Date';
    }
  }

  if (loading) return (
    <div className="p-6 text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
      <p className="mt-2 text-gray-600">Loading recent applications...</p>
    </div>
  );
  
  if (error) return (
    <div className="p-6 text-center">
      <div className="text-red-600 mb-2">⚠️ {error}</div>
      <button 
        onClick={() => window.location.reload()} 
        className="text-blue-600 hover:underline"
      >
        Try again
      </button>
    </div>
  );

  if (applications.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 text-center">
        <p className="text-gray-500">No recent applications found</p>
      </div>
    );
  }

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
                        <img 
                          src={application.student.avatar} 
                          alt={application.student.name}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
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
                <TableCell>{formatDate(application.submissionDate)}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={cn(
                      "font-normal",
                      statusStyles[application.status]?.bgColor || "bg-gray-50",
                      statusStyles[application.status]?.textColor || "text-gray-700"
                    )}
                  >
                    {statusStyles[application.status]?.label || "Unknown"}
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