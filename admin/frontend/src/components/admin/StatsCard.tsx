
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change?: {
    value: string;
    positive: boolean;
  };
  icon: LucideIcon;
  iconColor?: string;
  iconBackground?: string;
}

export default function StatsCard({
  title,
  value,
  change,
  icon: Icon,
  iconColor = "text-green-600",
  iconBackground = "bg-green-100",
}: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex items-start">
      <div className={cn("p-3 rounded-lg mr-4", iconBackground)}>
        <Icon className={cn("h-6 w-6", iconColor)} />
      </div>
      <div>
        <h3 className="text-gray-500 font-medium mb-1">{title}</h3>
        <div className="flex items-baseline">
          <p className="text-2xl font-bold">{value}</p>
          {change && (
            <span
              className={cn(
                "ml-2 text-sm font-medium",
                change.positive ? "text-admin-secondary" : "text-admin-danger"
              )}
            >
              {change.positive ? "+" : ""}{change.value}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
