
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">WedukaApply Portal</h1>
        <p className="text-xl text-gray-600 mb-6">Your gateway to educational opportunities worldwide</p>
        <div className="space-x-4">
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link to="/admin">Enter Admin Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
