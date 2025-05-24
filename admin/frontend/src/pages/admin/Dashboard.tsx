import { useEffect, useState } from "react";
import { School, Users, GraduationCap, BarChart3 } from "lucide-react";
import StatsCard from "@/components/admin/StatsCard";
import RecentApplications from "@/components/admin/RecentApplications";
import TopSchools from "@/components/admin/TopSchools";
import { fetchData } from "@/utils/api";
import { motion } from "framer-motion";

interface DashboardStats {
  totalSchools: number;
  totalStudents: number;
  totalApplications: number;
  successRate: string;
  changes?: {
    schools: { value: string; positive: boolean };
    students: { value: string; positive: boolean };
    applications: { value: string; positive: boolean };
    successRate: { value: string; positive: boolean };
  };
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="space-y-4 w-full max-w-md text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-admin-primary mx-auto"></div>
          <p className="text-gray-500 animate-pulse">Loading dashboard statistics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Welcome back, Admin</p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <StatsCard 
          title="Total Schools" 
          value={stats?.totalSchools.toString() || '0'} 
          icon={School}
          iconBackground="bg-green-100"
          iconColor="text-green-600"
          change={stats?.changes?.schools || { value: "12%", positive: true }}
          description="Total number of partner schools in our network"
        />
        <StatsCard 
          title="Total Students" 
          value={stats?.totalStudents.toString() || '0'} 
          icon={Users}
          iconBackground="bg-blue-100"
          iconColor="text-admin-secondary"
          change={stats?.changes?.students || { value: "8%", positive: true }}
          description="Total number of registered students"
        />
        <StatsCard 
          title="Applications" 
          value={stats?.totalApplications.toString() || '0'} 
          icon={GraduationCap}
          iconBackground="bg-yellow-100"
          iconColor="text-admin-accent"
          change={stats?.changes?.applications || { value: "5%", positive: true }}
          description="Total number of submitted applications"
        />
        <StatsCard 
          title="Success Rate" 
          value={stats?.successRate || '0%'} 
          icon={BarChart3}
          iconBackground="bg-purple-100"
          iconColor="text-purple-600"
          change={stats?.changes?.successRate || { value: "2%", positive: false }}
          description="Percentage of successful applications"
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2"
        >
          <RecentApplications />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <TopSchools />
        </motion.div>
      </div>
    </div>
  );
}