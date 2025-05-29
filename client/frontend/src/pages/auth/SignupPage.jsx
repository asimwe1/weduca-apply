import { SignupForm } from "../../components/signup-form"
import { WedukaBranding } from "../../components/weduka-branding"

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-8">
        <WedukaBranding />

        <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold tracking-tight">Create an account</h1>
            <p className="text-sm text-muted-foreground">Enter your information to get started</p>
          </div>

          <SignupForm />

          <div className="text-center text-sm">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <a href="/auth/login" className="font-medium text-primary hover:underline">
                Log in
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

