import { Calendar as CalendarIcon } from "lucide-react";
export default function Calendar() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Calendar (Coming Soon)</h1>
      <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center">
        <CalendarIcon className="h-10 w-10 text-gray-400 mr-2" />
        <p className="text-gray-500">Calendar features will be implemented soon.</p>
      </div>
    </div>
  );
}