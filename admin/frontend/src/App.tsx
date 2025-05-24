import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as SonnerToaster } from 'sonner';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import ProtectedRoute from './components/admin/ProtectedRoute';
import Home from './pages/admin/Home';
import Login from './pages/admin/Login';
import ResetPassword from './pages/admin/ResetPassword';
import ForgotPassword from './pages/admin/ForgotPassword';
import AdminLayout from './components/admin/AdminLayout';
import AdminIndex from './pages/admin/AdminIndex';
import Dashboard from './pages/admin/Dashboard';
import Schools from './pages/admin/Schools';
import AddSchool from './pages/admin/AddSchool';
import Students from './pages/admin/Students';
import AddStudent from './pages/admin/AddStudent';
import EditStudent from './pages/admin/students/EditStudent';
import ViewStudent from './pages/admin/students/ViewStudent';
import Settings from './pages/admin/Settings';
import Analytics from './pages/admin/Analytics';
import Calendar from './pages/admin/Calendar';
import Reports from './pages/admin/Reports';
import AddApplication from './pages/admin/AddApplication';
import ViewApplication from './pages/admin/applications/ViewApplication';
import EditApplication from './pages/admin/applications/EditApplication';
import NotFound from './pages/NotFound';
import AllApplications from './pages/admin/AllApplications';

// Assuming queryClient is defined elsewhere
// import { queryClient } from './lib/queryClient'; // Adjust the import path as needed

function App() {
  return (
    <QueryClientProvider client={new QueryClient}>
      <TooltipProvider>
        <Toaster />
        <SonnerToaster position="top-right" expand={true} richColors closeButton />
        <LanguageProvider>
          <BrowserRouter>
            <AuthProvider>
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<Home />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/reset-password/:token" element={<ResetPassword />} />
                <Route path="/auth/forgot-password" element={<ForgotPassword />} />

                {/* Protected routes */}
                {/* Admin routes */}
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<AdminIndex />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="schools" element={<Schools />} />
                  <Route path="schools/add" element={<AddSchool />} />
                  <Route path="students" element={<Students />} />
                  <Route path="students/add" element={<AddStudent />} />
                  <Route path="students/edit/:id" element={<EditStudent />} />
                  <Route path="students/:id" element={<ViewStudent />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="analytics" element={<Analytics />} />
                  <Route path="calendar" element={<Calendar />} />
                  <Route path="reports" element={<Reports />} />
                  <Route path="applications" element={<AllApplications />} />
                  <Route path="applications/add" element={<AddApplication />} />
                  <Route path="applications/:id" element={<ViewApplication />} />
                  <Route path="applications/:id/edit" element={<EditApplication />} />
                </Route>

                {/* 404 route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;