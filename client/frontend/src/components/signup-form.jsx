import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { Checkbox } from "./ui/Checkbox";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export function SignupForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    agreeToTerms: "",
  });

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      email: "",
      password: "",
      agreeToTerms: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return !newErrors.fullName && !newErrors.email && !newErrors.password && !newErrors.agreeToTerms;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (checked) => {
    setFormData((prev) => ({
      ...prev,
      agreeToTerms: checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Signup successful", formData);

      // Redirect to dashboard or verification page
      navigate("/dashboard");
    } catch (error) {
      console.error("Signup failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          name="fullName"
          placeholder="John Doe"
          autoComplete="name"
          value={formData.fullName}
          onChange={handleChange}
          disabled={isLoading}
          aria-invalid={!!errors.fullName}
        />
        {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
            disabled={isLoading}
            aria-invalid={!!errors.password}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
            disabled={isLoading}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Eye className="h-4 w-4 text-muted-foreground" />
            )}
            <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
          </Button>
        </div>
        {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
        <p className="text-xs text-muted-foreground">Password must be at least 8 characters long</p>
      </div>

      <div className="space-y-2">
        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={formData.agreeToTerms}
            onCheckedChange={handleCheckboxChange}
            disabled={isLoading}
          />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="terms" className="text-sm font-normal">
              I agree to the {" "}
              <Button variant="link" className="p-0 h-auto text-xs" type="button">
                Terms of Service
              </Button>
              and {" "}
              <Button variant="link" className="p-0 h-auto text-xs" type="button">
                Privacy Policy
              </Button>
            </Label>
          </div>
        </div>
        {errors.agreeToTerms && <p className="text-sm text-destructive">{errors.agreeToTerms}</p>}
      </div>

      <Button type="submit" className="w-full bg-green-600" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating account...
          </>
        ) : (
          "Create account"
        )}
      </Button>
    </form>
  );
}
