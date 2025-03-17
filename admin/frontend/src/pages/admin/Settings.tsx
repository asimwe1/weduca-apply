
import { useState } from "react";
import { 
  SlidersHorizontal, 
  Mail, 
  Bell, 
  Shield, 
  Smartphone, 
  Save
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

export default function Settings() {
  const [saving, setSaving] = useState(false);
  
  const handleSave = () => {
    setSaving(true);
    // Simulate API call
    setTimeout(() => {
      setSaving(false);
      toast.success("Settings saved successfully");
    }, 800);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Settings</h1>
        <Button 
          className="bg-green-600 hover:bg-green-700"
          onClick={handleSave}
          disabled={saving}
        >
          <Save className="mr-2 h-4 w-4" />
          {saving ? "Saving..." : "Save Changes"}
        </Button>
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
              <Input className="mt-1" defaultValue="Admin User" />
            </label>
            
            <label className="block text-sm font-medium">
              Email Address
              <Input className="mt-1" defaultValue="admin@WedukaApply.com" />
            </label>
            
            <label className="block text-sm font-medium">
              Time Zone
              <Input className="mt-1" defaultValue="(UTC-05:00) Eastern Time (US & Canada)" />
            </label>
          </div>
          
          <div className="space-y-4">
            <label className="block text-sm font-medium">
              Language
              <Input className="mt-1" defaultValue="English (US)" />
            </label>
            
            <label className="block text-sm font-medium">
              Date Format
              <Input className="mt-1" defaultValue="MM/DD/YYYY" />
            </label>
            
            <div className="flex justify-between items-center pt-4">
              <div>
                <h3 className="font-medium">Dark Mode</h3>
                <p className="text-sm text-gray-500">Enable dark mode interface</p>
              </div>
              <Switch />
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
            <Switch defaultChecked />
          </div>
          <Separator />
          
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">New School Registration</h3>
              <p className="text-sm text-gray-500">When a new school registers</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">New Student Application</h3>
              <p className="text-sm text-gray-500">When a student submits an application</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">System Updates</h3>
              <p className="text-sm text-gray-500">Information about system changes</p>
            </div>
            <Switch />
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
            <Switch />
          </div>
          <Separator />
          
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Login Notifications</h3>
              <p className="text-sm text-gray-500">Get alerted about new device logins</p>
            </div>
            <Switch defaultChecked />
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
