import { useEffect, useState } from "react";
import { School, Users, GraduationCap, BarChart3 } from "lucide-react";
import StatsCard from "@/components/admin/StatsCard";
import RecentApplications from "@/components/admin/RecentApplications";
import TopSchools from "@/components/admin/TopSchools";
import { fetchData } from "@/utils/api";

interface DashboardStats {
  totalSchools: number;
  totalStudents: number;
  totalApplications: number;
  successRate: string;
}

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchData('/api/dashboard');
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch dashboard stats:', error);
      } finally {
        setLoading(false);
      }
    };
    loadStats();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Welcome back, Admin</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Total Schools" 
          value={stats?.totalSchools.toString() || '0'} 
          icon={School}
          iconBackground="bg-green-100"
          iconColor="text-green-600"
          change={{ value: "12%", positive: true }}
        />
        <StatsCard 
          title="Total Students" 
          value={stats?.totalStudents.toString() || '0'} 
          icon={Users}
          iconBackground="bg-green-100"
          iconColor="text-admin-secondary"
          change={{ value: "8%", positive: true }}
        />
        <StatsCard 
          title="Applications" 
          value={stats?.totalApplications.toString() || '0'} 
          icon={GraduationCap}
          iconBackground="bg-yellow-100"
          iconColor="text-admin-accent"
          change={{ value: "5%", positive: true }}
        />
        <StatsCard 
          title="Success Rate" 
          value={stats?.successRate || '0%'} 
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