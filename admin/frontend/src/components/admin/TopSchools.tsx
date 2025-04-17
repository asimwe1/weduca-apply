import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { fetchData } from "@/utils/api";

type InstitutionApplication = {
  institutionId: string;
  institutionName: string;
  applicationCount: number;
};

type School = {
  id: number;
  name: string;
  applications: number;
  percentage: number;
  country: string;
};

export default function TopSchools() {
  const [schools, setSchools] = useState<School[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadApplicationsByInstitution = async () => {
      try {
        setLoading(true);
        const applicationsByInstitution: InstitutionApplication[] = await fetchData('/api/applications/by-institution');

        // Step 1: Calculate total applications
        const totalApplications = applicationsByInstitution.reduce(
          (sum, item) => sum + item.applicationCount,
          0
        );

        // Step 2: Map to School type and take top 5
        const schoolArray: School[] = applicationsByInstitution.slice(0, 5).map((item, index) => ({
          id: index + 1,
          name: item.institutionName,
          applications: item.applicationCount,
          percentage: totalApplications > 0 ? (item.applicationCount / totalApplications) * 100 : 0,
          country: getCountry(item.institutionName),
        }));

        setSchools(schoolArray);
      } catch (err: any) {
        console.error('Failed to fetch applications by institution:', err);
        setError('Failed to load top schools. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadApplicationsByInstitution();
  }, []);

  const getCountry = (universityName: string): string => {
    const countryMap: { [key: string]: string } = {
      "University of Toronto": "Canada",
      "McGill University": "Canada",
      "University of British Columbia": "Canada",
      "University of Waterloo": "Canada",
      "Queen's University": "Canada",
      "Harvard University": "United States",
      "University of Oxford": "United Kingdom",
      "National University of Singapore": "Singapore",
      "University of Melbourne": "Australia",
    };
    return countryMap[universityName] || "Unknown";
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-6">Top Schools by Applications</h2>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-6">Top Schools by Applications</h2>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Top Schools by Applications</h2>
      {schools.length === 0 ? (
        <p>No schools available.</p>
      ) : (
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
      )}
    </div>
  );
}