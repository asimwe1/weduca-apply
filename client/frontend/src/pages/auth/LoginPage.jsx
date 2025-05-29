import { LoginForm } from "../../components/login-form"
import { WedukaBranding } from "../../components/weduka-branding"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-8">
        <WedukaBranding />

        <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
          </div>

          <LoginForm />

          <div className="text-center text-sm">
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <a href="/auth/signup" className="font-medium text-primary hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>

        <div className="text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Weduka Apply Ltd. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

