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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useAuth } from "../../context/AuthContext";
import { useLanguage } from "../../context/LanguageContext";

// Time zones data
const timeZones = [
  { value: "UTC", label: "UTC" },
  { value: "America/New_York", label: "Eastern Time (ET)" },
  { value: "America/Chicago", label: "Central Time (CT)" },
  { value: "America/Denver", label: "Mountain Time (MT)" },
  { value: "America/Los_Angeles", label: "Pacific Time (PT)" },
  { value: "Europe/London", label: "London (GMT)" },
  { value: "Europe/Paris", label: "Paris (CET)" },
  { value: "Asia/Tokyo", label: "Tokyo (JST)" },
];

// Languages data
const languages = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "pt", label: "Portuguese" },
  { value: "zh", label: "Chinese" },
];

// Date formats
const dateFormats = [
  { value: "MM/DD/YYYY", label: "MM/DD/YYYY" },
  { value: "DD/MM/YYYY", label: "DD/MM/YYYY" },
  { value: "YYYY-MM-DD", label: "YYYY-MM-DD" },
  { value: "DD.MM.YYYY", label: "DD.MM.YYYY" },
];

interface Settings {
  adminName: string;
  emailAddress: string;
  timeZone: string;
  language: string;
  dateFormat: string;
  emailNotifications: boolean;
  newSchoolRegistration: boolean;
  newStudentApplication: boolean;
  systemUpdates: boolean;
  twoFactorAuth: boolean;
  loginNotifications: boolean;
}

export default function Settings() {
  const { token, logout, user } = useAuth();
  const { currentLanguage, setLanguage, translations } = useLanguage();
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState<Settings>({
    adminName: "",
    emailAddress: "",
    timeZone: "UTC",
    language: "English",
    dateFormat: "MM/DD/YYYY",
    emailNotifications: true,
    newSchoolRegistration: true,
    newStudentApplication: true,
    systemUpdates: false,
    twoFactorAuth: false,
    loginNotifications: true,
  });

  const t = translations[currentLanguage];

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch(`${API_URL}/api/auth/settings`, {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        
        if (response.status === 404) {
          // If settings don't exist yet, use defaults with user data
          setSettings(prev => ({
            ...prev,
            adminName: user?.name || "",
            emailAddress: user?.email || "",
          }));
          setLoading(false);
          return;
        }

        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        setSettings(data);
      } catch (error: any) {
        toast.error(error.message || "Failed to load settings");
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, [token, user]);

  const validateSettings = () => {
    if (!settings.adminName.trim()) {
      toast.error("Admin name is required");
      return false;
    }
    if (!settings.emailAddress.trim()) {
      toast.error("Email address is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(settings.emailAddress)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setSettings((prev) => ({ ...prev, [name]: value }));
    if (name === 'language') {
      setLanguage(value);
    }
  };

  const handleSwitchChange = (name: string) => (checked: boolean) => {
    setSettings((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSave = async () => {
    if (!validateSettings()) return;

    setSaving(true);
    try {
      const response = await fetch(`${API_URL}/api/auth/settings`, {
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

  if (loading) {
    return <div className="p-6">Loading settings...</div>;
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{t.settings}</h1>
        <div className="flex gap-3">
          <Button 
            className="bg-green-600 hover:bg-green-700"
            onClick={handleSave}
            disabled={saving}
          >
            <Save className="mr-2 h-4 w-4" />
            {saving ? t.saving : t.save_changes}
          </Button>
          <Button
            variant="outline"
            className="text-red-600 hover:bg-red-50 border-red-600"
            onClick={logout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            {t.logout}
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-green-100 p-3 rounded-lg">
            <SlidersHorizontal className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{t.general_settings}</h2>
            <p className="text-gray-500">{t.manage_preferences}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <label className="block text-sm font-medium">
              {t.admin_name}
              <Input
                name="adminName"
                value={settings.adminName}
                onChange={handleChange}
                className="mt-1"
                placeholder="Enter your name"
                required
              />
            </label>
            
            <label className="block text-sm font-medium">
              {t.email_address}
              <Input
                name="emailAddress"
                type="email"
                value={settings.emailAddress}
                onChange={handleChange}
                className="mt-1"
                placeholder="your@email.com"
                required
              />
            </label>
            
            <label className="block text-sm font-medium">
              {t.time_zone}
              <Select
                value={settings.timeZone}
                onValueChange={handleSelectChange("timeZone")}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select time zone" />
                </SelectTrigger>
                <SelectContent>
                  {timeZones.map((tz) => (
                    <SelectItem key={tz.value} value={tz.value}>
                      {tz.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
          </div>
          
          <div className="space-y-4">
            <label className="block text-sm font-medium">
              {t.language}
              <Select
                value={settings.language }
                onValueChange={handleSelectChange("language")}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
            
            <label className="block text-sm font-medium">
              {t.date_format}
              <Select
                value={settings.dateFormat}
                onValueChange={handleSelectChange("dateFormat")}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select date format" />
                </SelectTrigger>
                <SelectContent>
                  {dateFormats.map((format) => (
                    <SelectItem key={format.value} value={format.value}>
                      {format.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-green-100 p-3 rounded-lg">
            <Bell className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{t.notifications}</h2>
            <p className="text-gray-500">{t.manage_notification_preferences}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">{t.email_notifications}</h3>
              <p className="text-sm text-gray-500">{t.receive_email_notifications}</p>
            </div>
            <Switch
              checked={settings.emailNotifications}
              onCheckedChange={handleSwitchChange("emailNotifications")}
            />
          </div>

          <Separator />

          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">{t.new_school_registration}</h3>
              <p className="text-sm text-gray-500">{t.get_notified_when_a_new_school_registers}</p>
            </div>
            <Switch
              checked={settings.newSchoolRegistration}
              onCheckedChange={handleSwitchChange("newSchoolRegistration")}
            />
          </div>

          <Separator />

          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">{t.new_student_application}</h3>
              <p className="text-sm text-gray-500">{t.get_notified_about_new_student_applications}</p>
            </div>
            <Switch
              checked={settings.newStudentApplication}
              onCheckedChange={handleSwitchChange("newStudentApplication")}
            />
          </div>

          <Separator />

          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">{t.system_updates}</h3>
              <p className="text-sm text-gray-500">{t.get_notified_about_system_updates}</p>
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
            <h2 className="text-xl font-semibold">{t.security}</h2>
            <p className="text-gray-500">{t.manage_security_preferences}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">{t.two_factor_authentication}</h3>
              <p className="text-sm text-gray-500">{t.enable_two_factor_authentication_for_added_security}</p>
            </div>
            <Switch
              checked={settings.twoFactorAuth}
              onCheckedChange={handleSwitchChange("twoFactorAuth")}
            />
          </div>

          <Separator />

          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">{t.login_notifications}</h3>
              <p className="text-sm text-gray-500">{t.get_notified_of_new_login_attempts}</p>
            </div>
            <Switch
              checked={settings.loginNotifications}
              onCheckedChange={handleSwitchChange("loginNotifications")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}