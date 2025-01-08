import SignUp from "@/components/users/Signup";
import { BackButton } from "@/components/ui/back-button";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="absolute top-4 left-4">
        <BackButton />
      </div>
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">회원가입</h1>
        <SignUp />
      </div>
    </div>
  );
}
