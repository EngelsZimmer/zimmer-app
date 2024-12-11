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
import Header from "./components/Header";
import Footer from "./components/Footer";

const posts = [
  {
    id: 1,
    title: "첫 번째 게시물",
    author: "김철수",
    date: "2024-03-15",
    views: 120,
  },
  {
    id: 2,
    title: "안녕하세요, 반갑습니다",
    author: "이영희",
    date: "2024-03-14",
    views: 85,
  },
  {
    id: 3,
    title: "게시판 사용 방법",
    author: "관리자",
    date: "2024-03-13",
    views: 250,
  },
  {
    id: 4,
    title: "오늘의 날씨",
    author: "기상캐스터",
    date: "2024-03-12",
    views: 180,
  },
  {
    id: 5,
    title: "맛집 추천합니다",
    author: "미식가",
    date: "2024-03-11",
    views: 95,
  },
];

function App() {
  return (
    <>
      <Header />
      <main className="container m-auto p-4 max-w-4xl">
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
              <TableHead className="w-1/12 text-center font-bold">
                번호
              </TableHead>
              <TableHead className="w-6/12 text-center font-bold">
                제목
              </TableHead>
              <TableHead className="w-2/12 text-center font-bold">
                작성자
              </TableHead>
              <TableHead className="w-2/12 text-center font-bold">
                날짜
              </TableHead>
              <TableHead className="w-1/12 text-center font-bold">
                조회수
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="text-center">{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell className="text-center">{post.author}</TableCell>
                <TableCell className="text-center">{post.date}</TableCell>
                <TableCell className="text-center">{post.views}</TableCell>
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
      </main>
      <Footer />
    </>
  );
}

export default App;
