import { BarChart3 } from "lucide-react";
export default function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Analytics (Coming Soon)</h1>
      <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center">
        <BarChart3 className="h-10 w-10 text-gray-400 mr-2" />
        <p className="text-gray-500">Analytics features will be implemented soon.</p>
      </div>
    </div>
  );
}