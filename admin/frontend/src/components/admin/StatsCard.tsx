import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TrendingDown, TrendingUp } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change?: {
    value: string;
    positive: boolean;
    description?: string;
  };
  icon: LucideIcon;
  iconColor?: string;
  iconBackground?: string;
  description?: string;
}

export default function StatsCard({
  title,
  value,
  change,
  icon: Icon,
  iconColor = "text-green-600",
  iconBackground = "bg-green-100",
  description,
}: StatsCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-lg shadow-sm p-6 flex items-start hover:shadow-md transition-shadow"
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className={cn("p-3 rounded-lg mr-4", iconBackground)}>
              <Icon className={cn("h-6 w-6", iconColor)} />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{description || title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="flex-1">
        <h3 className="text-gray-500 font-medium mb-1">{title}</h3>
        <div className="flex items-baseline justify-between">
          <motion.p 
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {value}
          </motion.p>
          {change && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    className={cn(
                      "flex items-center gap-1 px-2 py-1 rounded-full",
                      change.positive 
                        ? "bg-green-50 text-admin-secondary" 
                        : "bg-red-50 text-admin-danger"
                    )}
                  >
                    {change.positive ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span className="text-sm font-medium">
                      {change.positive ? "+" : ""}{change.value}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{change.description || `${change.positive ? 'Increase' : 'Decrease'} from previous period`}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>
    </motion.div>
  );
}
