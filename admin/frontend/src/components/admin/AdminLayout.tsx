
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-green-50">
      <div className="sticky top-0 h-screen">
        <AdminSidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-10">
          <AdminHeader />
        </div>
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
