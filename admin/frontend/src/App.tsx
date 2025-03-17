
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Admin imports
import AdminLayout from "./components/admin/AdminLayout";
import AdminIndex from "./pages/admin/AdminIndex";
import Dashboard from "./pages/admin/Dashboard";
import Schools from "./pages/admin/Schools";
import AddSchool from "./pages/admin/AddSchool";
import Students from "./pages/admin/Students";
import AddStudent from "./pages/admin/AddStudent";
import Settings from "./pages/admin/Settings";
import AdminNotFound from "./pages/admin/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Index />} />
          
          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminIndex />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="schools" element={<Schools />} />
            <Route path="schools/add" element={<AddSchool />} />
            <Route path="students" element={<Students />} />
            <Route path="students/add" element={<AddStudent />} />
            <Route path="settings" element={<Settings />} />
            <Route path="analytics" element={<Dashboard />} /> {/* Placeholder */}
            <Route path="calendar" element={<Dashboard />} /> {/* Placeholder */}
            <Route path="reports" element={<Dashboard />} /> {/* Placeholder */}
            <Route path="*" element={<AdminNotFound />} />
          </Route>
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
