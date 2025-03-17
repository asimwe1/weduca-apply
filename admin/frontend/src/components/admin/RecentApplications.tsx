
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

type Status = "approved" | "pending" | "rejected";

type Application = {
  id: string;
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
};

const applications: Application[] = [
  {
    id: "APP-2023-001",
    student: {
      name: "Emma Wilson",
      email: "emma.w@example.com",
      initials: "EW"
    },
    school: "University of Toronto",
    program: "Computer Science",
    date: "2023-09-15",
    status: "approved"
  },
  {
    id: "APP-2023-002",
    student: {
      name: "Michael Chen",
      email: "m.chen@example.com",
      initials: "MC"
    },
    school: "McGill University",
    program: "Business Administration",
    date: "2023-09-14",
    status: "pending"
  },
  {
    id: "APP-2023-003",
    student: {
      name: "Sophia Rodriguez",
      email: "sophia.r@example.com",
      initials: "SR"
    },
    school: "University of British Columbia",
    program: "Environmental Science",
    date: "2023-09-12",
    status: "rejected"
  },
  {
    id: "APP-2023-004",
    student: {
      name: "James Johnson",
      email: "j.johnson@example.com",
      initials: "JJ"
    },
    school: "University of Waterloo",
    program: "Engineering",
    date: "2023-09-10",
    status: "approved"
  },
  {
    id: "APP-2023-005",
    student: {
      name: "Olivia Thompson",
      email: "o.thompson@example.com",
      initials: "OT"
    },
    school: "Queen's University",
    program: "Psychology",
    date: "2023-09-08",
    status: "pending"
  }
];

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
  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
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
              <TableRow key={application.id}>
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
