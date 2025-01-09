import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

export function SubmitPostForm() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // 여기에 실제 게시물 작성 로직이 들어갈 수 있습니다.
    setTimeout(() => {
      setIsLoading(false);
      alert("게시물 작성 기능은 아직 구현되지 않았습니다.");
    }, 2000);
  };

  return (
    <Card className="p-6">
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">제목</Label>
          <Input id="title" placeholder="제목을 입력하세요" required />
        </div>
        <div>
          <Label htmlFor="content">내용</Label>
          <Textarea
            id="content"
            placeholder="내용을 입력하세요 (마크다운 지원)"
            className="min-h-[200px]"
            required
          />
        </div>
        <div>
          <Label htmlFor="category">카테고리</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="카테고리 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">일반</SelectItem>
              <SelectItem value="tech">기술</SelectItem>
              <SelectItem value="question">질문</SelectItem>
              <SelectItem value="discussion">토론</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "게시 중..." : "게시하기"}
        </Button>
      </form>
    </Card>
  );
}
