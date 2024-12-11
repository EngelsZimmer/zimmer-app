import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import "./App.css";

const posts = [
  { id: 1, title: "첫 번째 게시물", author: "김철수", date: "2024-03-15" },
  {
    id: 2,
    title: "안녕하세요, 반갑습니다",
    author: "이영희",
    date: "2024-03-14",
  },
  { id: 3, title: "게시판 사용 방법", author: "관리자", date: "2024-03-13" },
  { id: 4, title: "오늘의 날씨", author: "기상캐스터", date: "2024-03-12" },
  { id: 5, title: "맛집 추천합니다", author: "미식가", date: "2024-03-11" },
];

function App() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">게시판</h1>

      {/* 검색 바 */}
      <div className="flex mb-4">
        <Input className="flex-grow mr-2" placeholder="검색어를 입력하세요" />
        <Button>검색</Button>
      </div>

      {/* 게시물 목록 */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">번호</TableHead>
            <TableHead>제목</TableHead>
            <TableHead>작성자</TableHead>
            <TableHead className="w-[100px]">날짜</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.author}</TableCell>
              <TableCell>{post.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* 페이지네이션 */}
      <div className="flex justify-center mt-4">
        <Button variant="outline" className="mx-1">
          이전
        </Button>
        <Button variant="outline" className="mx-1">
          1
        </Button>
        <Button variant="outline" className="mx-1">
          2
        </Button>
        <Button variant="outline" className="mx-1">
          3
        </Button>
        <Button variant="outline" className="mx-1">
          다음
        </Button>
      </div>
    </div>
  );
}

export default App;
