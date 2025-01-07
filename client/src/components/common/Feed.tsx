import { useState } from "react";
import { PostCard } from "@/components/posts/PostCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// 더미 데이터
const posts = [
  {
    id: 1,
    title: "React 18의 새로운 기능들",
    author: "리액트매니아",
    upvotes: 120,
    downvotes: 5,
    comments: 23,
    time: "3시간 전",
  },
  {
    id: 2,
    title: "Next.js vs Gatsby: 어떤 것을 선택해야 할까?",
    author: "프론트엔드개발자",
    upvotes: 89,
    downvotes: 12,
    comments: 45,
    time: "5시간 전",
  },
  {
    id: 3,
    title: "TypeScript 팁: 생산성을 높이는 10가지 방법",
    author: "타입스크립트고수",
    upvotes: 210,
    downvotes: 8,
    comments: 56,
    time: "8시간 전",
  },
  {
    id: 4,
    title: "CSS-in-JS: 장단점 분석",
    author: "스타일링전문가",
    upvotes: 76,
    downvotes: 23,
    comments: 34,
    time: "12시간 전",
  },
  {
    id: 5,
    title: "웹 성능 최적화: 실제 사례 연구",
    author: "성능튜닝전문가",
    upvotes: 150,
    downvotes: 3,
    comments: 28,
    time: "1일 전",
  },
];

export default function Feed() {
  const [sortBy, setSortBy] = useState("hot");

  // 정렬 로직 (실제로는 서버에서 처리하는 것이 좋습니다)
  const sortedPosts = [...posts].sort((a, b) => {
    if (sortBy === "hot")
      return b.upvotes - b.downvotes - (a.upvotes - a.downvotes);
    if (sortBy === "new")
      return new Date(b.time).getTime() - new Date(a.time).getTime();
    if (sortBy === "top") return b.upvotes - a.upvotes;
    return 0;
  });

  return (
    <div>
      <div className="mb-4">
        <Select onValueChange={(value) => setSortBy(value)}>
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="정렬 기준" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hot">인기</SelectItem>
            <SelectItem value="new">최신</SelectItem>
            <SelectItem value="top">TOP</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-4">
        {sortedPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
