import { useState, useEffect } from "react";
import { fetchData } from "@/utils/api";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Eye, Edit2, Copy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

interface Application {
  _id: string;
  student: {
    firstName: string;
    lastName: string;
    email: string;
  };
  institution: {
    name: string;
  };
  program: string;
  submissionDate: string;
  status: 'pending' | 'under_review' | 'approved' | 'rejected' | 'withdrawn';
  lastUpdated: string;
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

export default function AllApplications() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    try {
      const data = await fetchData('/api/applications');
      setApplications(data);
    } catch (error) {
      toast.error("Failed to load applications");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = (action: string, application: Application) => {
    switch (action) {
      case 'view':
        navigate(`/admin/applications/${application._id}`);
        break;
      case 'edit':
        if (application.status === 'pending') {
          navigate(`/admin/applications/${application._id}/edit`);
        } else {
          toast.error("Only pending applications can be edited");
        }
        break;
      case 'reference':
        if (application.status === 'approved' || application.status === 'rejected') {
          navigate(`/admin/applications/add?reference=${application._id}`);
        } else {
          toast.error("Only approved or rejected applications can be used as reference");
        }
        break;
      default:
        break;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-admin-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">All Applications</h1>
        <Button onClick={() => navigate('/admin/applications/add')}>
          New Application
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead>
              <TableHead>Institution</TableHead>
              <TableHead>Program</TableHead>
              <TableHead>Submission Date</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((application) => (
              <TableRow key={application._id}>
                <TableCell>
                  <div>
                    <div className="font-medium">
                      {application.student.firstName} {application.student.lastName}
                    </div>
                    <div className="text-sm text-gray-500">
                      {application.student.email}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{application.institution.name}</TableCell>
                <TableCell>{application.program}</TableCell>
                <TableCell>
                  {format(new Date(application.submissionDate), 'MMM d, yyyy')}
                </TableCell>
                <TableCell>
                  {format(new Date(application.lastUpdated), 'MMM d, yyyy')}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`${statusStyles[application.status].bgColor} ${statusStyles[application.status].textColor}`}
                  >
                    {statusStyles[application.status].label}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleAction('view', application)}>
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </DropdownMenuItem>
                      {application.status === 'pending' && (
                        <DropdownMenuItem onClick={() => handleAction('edit', application)}>
                          <Edit2 className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                      )}
                      {(application.status === 'approved' || application.status === 'rejected') && (
                        <DropdownMenuItem onClick={() => handleAction('reference', application)}>
                          <Copy className="mr-2 h-4 w-4" />
                          Use as Reference
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
} 