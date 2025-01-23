"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/ui/icons";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/user/login", {
        email,
        password,
      });
      alert("로그인 성공: " + JSON.stringify(response.data));
      // 로그인 성공 후 처리 로직 추가 (예: 토큰 저장, 페이지 이동 등)
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // AxiosError인 경우에만 처리
        alert("로그인 실패: " + (error.response?.data?.message || "서버 오류"));
      } else {
        // 기타 에러
        console.error("Unexpected error:", error);
        alert("로그인 실패: 예기치 못한 오류 발생");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuthLogin = (provider: string) => {
    // TODO: Implement OAuth login logic
    console.log(`Attempting to login with ${provider}`);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">로그인</CardTitle>
        <CardDescription className="text-center">
          계정에 로그인하거나 소셜 계정을 사용하세요
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
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
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            로그인
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
            handleOAuthLogin("Google 로그인 기능은 아직 구현되지 않았습니다.")
          }
        >
          <Icons.google className="mr-2 h-4 w-4" />
          Google로 로그인
        </Button>
      </CardContent>
      <CardFooter>
        <p className="text-center text-sm text-muted-foreground mt-2 w-full">
          계정이 없으신가요?{" "}
          <a
            href="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            회원가입
          </a>
        </p>
      </CardFooter>
    </Card>
  );
}
