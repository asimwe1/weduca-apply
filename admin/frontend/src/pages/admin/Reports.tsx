import { FileText } from "lucide-react";
export default function Reports() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Reports (Coming Soon)</h1>
      <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center">
        <FileText className="h-10 w-10 text-gray-400 mr-2" />
        <p className="text-gray-500">Reporting features will be implemented soon.</p>
      </div>
    </div>
  );
}