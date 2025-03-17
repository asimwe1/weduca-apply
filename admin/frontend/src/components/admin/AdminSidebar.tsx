
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  School, 
  Users, 
  Calendar, 
  Settings, 
  Menu, 
  X, 
  LogOut,
  BarChart3,
  FileText
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type SidebarLink = {
  icon: React.ElementType;
  label: string;
  path: string;
};

const sidebarLinks: SidebarLink[] = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
  { icon: School, label: "Schools", path: "/admin/schools" },
  { icon: Users, label: "Students", path: "/admin/students" },
  { icon: BarChart3, label: "Analytics", path: "/admin/analytics" },
  { icon: Calendar, label: "Calendar", path: "/admin/calendar" },
  { icon: FileText, label: "Reports", path: "/admin/reports" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
];

export default function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div 
      className={cn(
        "h-full bg-white border-r border-gray-200 flex flex-col transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && (
          <h1 className="text-xl font-bold text-green-600">WedukaApply</h1>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto"
        >
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </Button>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {sidebarLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "flex items-center py-3 px-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
              location.pathname === link.path && "bg-green-50 text-green-600 font-medium"
            )}
          >
            <link.icon size={20} className="min-w-5" />
            {!collapsed && <span className="ml-3">{link.label}</span>}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <Link
          to="/"
          className="flex items-center py-2 px-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <LogOut size={20} />
          {!collapsed && <span className="ml-3">Logout</span>}
        </Link>
      </div>
    </div>
  );
}
