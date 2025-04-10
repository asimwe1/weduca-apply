import { useState, useEffect } from "react";
import { 
  SlidersHorizontal, 
  Mail, 
  Bell, 
  Shield, 
  Smartphone, 
  Save,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { useAuth } from "../../context/AuthContext";

export default function Settings() {
  const { token, logout } = useAuth();
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState({
    adminName: "",
    emailAddress: "",
    timeZone: "",
    language: "",
    dateFormat: "",
    darkMode: false,
    emailNotifications: true,
    newSchoolRegistration: true,
    newStudentApplication: true,
    systemUpdates: false,
    twoFactorAuth: false,
    loginNotifications: true,
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/auth/settings', {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        setSettings(data);
      } catch (error: any) {
        toast.error(error.message || "Failed to load settings");
      }
    };
    fetchSettings();
  }, [token]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (name: string) => (checked: boolean) => {
    setSettings((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const response = await fetch('http://localhost:3000/api/auth/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(settings),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      toast.success("Settings saved successfully");
    } catch (error: any) {
      toast.error(error.message || "Failed to save settings");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Settings</h1>
        <div className="flex gap-3">
          <Button 
            className="bg-green-600 hover:bg-green-700"
            onClick={handleSave}
            disabled={saving}
          >
            <Save className="mr-2 h-4 w-4" />
            {saving ? "Saving..." : "Save Changes"}
          </Button>
          <Button
            variant="outline"
            className="text-red-600 border-red-600"
            onClick={logout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-green-100 p-3 rounded-lg">
            <SlidersHorizontal className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">General Settings</h2>
            <p className="text-gray-500">Manage your account preferences</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <label className="block text-sm font-medium">
              Admin Name
              <Input
                name="adminName"
                value={settings.adminName}
                onChange={handleChange}
                className="mt-1"
              />
            </label>
            
            <label className="block text-sm font-medium">
              Email Address
              <Input
                name="emailAddress"
                value={settings.emailAddress}
                onChange={handleChange}
                className="mt-1"
              />
            </label>
            
            <label className="block text-sm font-medium">
              Time Zone
              <Input
                name="timeZone"
                value={settings.timeZone}
                onChange={handleChange}
                className="mt-1"
              />
            </label>
          </div>
          
          <div className="space-y-4">
            <label className="block text-sm font-medium">
              Language
              <Input
                name="language"
                value={settings.language}
                onChange={handleChange}
                className="mt-1"
              />
            </label>
            
            <label className="block text-sm font-medium">
              Date Format
              <Input
                name="dateFormat"
                value={settings.dateFormat}
                onChange={handleChange}
                className="mt-1"
              />
            </label>
            
            <div className="flex justify-between items-center pt-4">
              <div>
                <h3 className="font-medium">Dark Mode</h3>
                <p className="text-sm text-gray-500">Enable dark mode interface</p>
              </div>
              <Switch
                checked={settings.darkMode}
                onCheckedChange={handleSwitchChange("darkMode")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-green-100 p-3 rounded-lg">
            <Bell className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Notifications</h2>
            <p className="text-gray-500">Manage your notification preferences</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Email Notifications</h3>
              <p className="text-sm text-gray-500">Receive notifications via email</p>
            </div>
            <Switch
              checked={settings.emailNotifications}
              onCheckedChange={handleSwitchChange("emailNotifications")}
            />
          </div>
          <Separator />
          
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">New School Registration</h3>
              <p className="text-sm text-gray-500">When a new school registers</p>
            </div>
            <Switch
              checked={settings.newSchoolRegistration}
              onCheckedChange={handleSwitchChange("newSchoolRegistration")}
            />
          </div>
          <Separator />
          
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">New Student Application</h3>
              <p className="text-sm text-gray-500">When a student submits an application</p>
            </div>
            <Switch
              checked={settings.newStudentApplication}
              onCheckedChange={handleSwitchChange("newStudentApplication")}
            />
          </div>
          <Separator />
          
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">System Updates</h3>
              <p className="text-sm text-gray-500">Information about system changes</p>
            </div>
            <Switch
              checked={settings.systemUpdates}
              onCheckedChange={handleSwitchChange("systemUpdates")}
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-green-100 p-3 rounded-lg">
            <Shield className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Security</h2>
            <p className="text-gray-500">Manage your security settings</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Two-Factor Authentication</h3>
              <p className="text-sm text-gray-500">Add an extra layer of security</p>
            </div>
            <Switch
              checked={settings.twoFactorAuth}
              onCheckedChange={handleSwitchChange("twoFactorAuth")}
            />
          </div>
          <Separator />
          
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Login Notifications</h3>
              <p className="text-sm text-gray-500">Get alerted about new device logins</p>
            </div>
            <Switch
              checked={settings.loginNotifications}
              onCheckedChange={handleSwitchChange("loginNotifications")}
            />
          </div>
          <Separator />

          <Button variant="outline" className="text-green-600">
            Change Password
          </Button>
        </div>
      </div>
    </div>
  );
}