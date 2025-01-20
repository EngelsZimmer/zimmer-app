import Login from "@/components/auth/Login";
import { BackButton } from "@/components/ui/back-button";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <div className="absolute top-4 left-4">
          <BackButton />
        </div>
        <Login />
      </div>
    </div>
  );
}
