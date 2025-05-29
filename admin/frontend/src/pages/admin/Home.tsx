import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, FileSpreadsheet } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    try {
      setIsLoading(true);
      // Check if user is already logged in by checking local storage or context
      const token = localStorage.getItem('token');
      
      if (token) {
        navigate('/admin/dashboard');
      } else {
        // If not logged in, redirect to login page
        navigate('/auth/login');
      }
      
      toast.success("Redirecting to login page...");
    } catch (error) {
      toast.error("Unable to process your request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome to WedukaApply Admin Portal
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please{" "}
            <button 
              onClick={handleLogin}
              className="text-blue-600 hover:text-blue-700 font-medium underline decoration-2 decoration-blue-200 hover:decoration-blue-500 transition-all"
            >
              login
            </button>{" "}
            to access the admin panel and manage your educational institution's applications.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Applicant Management</h3>
              <p className="text-gray-600">Review and process student applications efficiently</p>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <FileSpreadsheet className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Data Analytics</h3>
              <p className="text-gray-600">Access detailed reports and analytics</p>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Program Management</h3>
              <p className="text-gray-600">Manage educational programs and courses</p>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Button
            onClick={handleLogin}
            disabled={isLoading}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 rounded-lg text-lg font-medium group"
          >
            <span className="inline-flex items-center space-x-2">
              <span>{isLoading ? "Please wait..." : "Access Dashboard"}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}