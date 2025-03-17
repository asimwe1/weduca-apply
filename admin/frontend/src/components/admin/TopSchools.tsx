
import { Progress } from "@/components/ui/progress";

type School = {
  id: number;
  name: string;
  applications: number;
  percentage: number;
  country: string;
};

const schools: School[] = [
  {
    id: 1,
    name: "University of Toronto",
    applications: 328,
    percentage: 85,
    country: "Canada"
  },
  {
    id: 2,
    name: "Harvard University",
    applications: 296,
    percentage: 76,
    country: "United States"
  },
  {
    id: 3,
    name: "University of Oxford",
    applications: 245,
    percentage: 63,
    country: "United Kingdom"
  },
  {
    id: 4,
    name: "National University of Singapore",
    applications: 210,
    percentage: 54,
    country: "Singapore"
  },
  {
    id: 5,
    name: "University of Melbourne",
    applications: 189,
    percentage: 49,
    country: "Australia"
  }
];

export default function TopSchools() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Top Schools by Applications</h2>
      <div className="space-y-5">
        {schools.map((school) => (
          <div key={school.id}>
            <div className="flex justify-between items-center mb-1">
              <div>
                <span className="font-medium">{school.name}</span>
                <span className="text-sm text-gray-500 ml-2">({school.country})</span>
              </div>
              <span className="text-sm font-medium">{school.applications}</span>
            </div>
            <Progress value={school.percentage} className="h-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
