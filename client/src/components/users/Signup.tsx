import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/icons";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // 여기에 실제 회원가입 로직이 들어갈 수 있습니다.
    setTimeout(() => {
      setIsLoading(false);
      alert("회원가입 기능은 아직 구현되지 않았습니다.");
    }, 2000);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">이름</Label>
          <Input id="name" type="text" required />
        </div>
        <div>
          <Label htmlFor="email">이메일</Label>
          <Input id="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="password">비밀번호</Label>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          회원가입
        </Button>
      </form>
      <div className="mt-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button
          variant="outline"
          type="button"
          className="w-full mt-4"
          onClick={() =>
            alert("Google 로그인 기능은 아직 구현되지 않았습니다.")
          }
        >
          <Icons.google className="mr-2 h-4 w-4" />
          Google로 회원가입
        </Button>
      </div>
    </div>
  );
}
