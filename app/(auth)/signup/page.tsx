import SignUp from "@/components/auth/Signup";
import { BackButton } from "@/components/ui/back-button";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <div className="absolute top-4 left-4">
          <BackButton />
        </div>
        <SignUp />
      </div>
    </div>
  );
}
