
import { School, Users, GraduationCap, BarChart3 } from "lucide-react";
import StatsCard from "@/components/admin/StatsCard";
import RecentApplications from "@/components/admin/RecentApplications";
import TopSchools from "@/components/admin/TopSchools";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Welcome back, Admin</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Total Schools" 
          value="1,254" 
          icon={School}
          iconBackground="bg-green-100"
          iconColor="text-green-600"
          change={{ value: "12%", positive: true }}
        />
        <StatsCard 
          title="Total Students" 
          value="45,678" 
          icon={Users}
          iconBackground="bg-green-100"
          iconColor="text-admin-secondary"
          change={{ value: "8%", positive: true }}
        />
        <StatsCard 
          title="Applications" 
          value="8,765" 
          icon={GraduationCap}
          iconBackground="bg-yellow-100"
          iconColor="text-admin-accent"
          change={{ value: "5%", positive: true }}
        />
        <StatsCard 
          title="Success Rate" 
          value="75%" 
          icon={BarChart3}
          iconBackground="bg-purple-100"
          iconColor="text-purple-600"
          change={{ value: "2%", positive: false }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentApplications />
        </div>
        <div>
          <TopSchools />
        </div>
      </div>
    </div>
  );
}
