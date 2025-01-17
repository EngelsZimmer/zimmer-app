"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()} // 뒤로가기
      className="flex items-center px-4 py-2 bg-transparent border-none cursor-pointer"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      뒤로가기
    </button>
  );
}
