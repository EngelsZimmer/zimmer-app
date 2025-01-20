"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/icons";
import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // 여기에 실제 회원가입 로직이 들어갈 수 있습니다.
    setTimeout(() => {
      setIsLoading(false);
      alert("회원가입 기능은 아직 구현되지 않았습니다.");
    }, 2000);
  };

  const handleOAuthSignUp = (provider: string) => {
    // TODO: Implement OAuth login logic
    console.log(`Attempting to login with ${provider}`);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          회원가입
        </CardTitle>
        <CardDescription className="text-center">
          새로 가입하거나 소셜 계정을 사용하세요
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">비밀번호 확인</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            회원가입
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <Button
          variant="outline"
          type="button"
          className="w-full mt-4"
          onClick={() =>
            handleOAuthSignUp(
              "Google 회원가입 기능은 아직 구현되지 않았습니다.",
            )
          }
        >
          <Icons.google className="mr-2 h-4 w-4" />
          Google로 회원가입
        </Button>
      </CardContent>
      <CardFooter>
        <p className="text-center text-sm text-muted-foreground mt-2 w-full">
          회원이신가요?{" "}
          <a
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            로그인
          </a>
        </p>
      </CardFooter>
    </Card>
  );
}
