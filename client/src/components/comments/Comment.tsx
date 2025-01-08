import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// 더미 데이터
const post = {
  id: 1,
  title: "첫 번째 게시물",
  author: "김철수",
  date: "2024-03-15",
  views: 120,
  content:
    "이것은 첫 번째 게시물의 내용입니다. 여기에 게시글의 자세한 내용이 들어갑니다.",
};

const comments = [
  { id: 1, author: "이영희", content: "좋은 글이네요!", date: "2024-03-15" },
  {
    id: 2,
    author: "박지성",
    content: "흥미로운 내용입니다.",
    date: "2024-03-16",
  },
];

// 현재 로그인한 사용자 (더미 데이터)
const currentUser = {
  name: "김철수",
};

export default function Comment() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <div className="text-sm text-muted-foreground">
            작성자: {post.author} | 날짜: {post.date} | 조회수: {post.views}
          </div>
        </CardHeader>
        <CardContent>
          <p>{post.content}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">목록으로</Button>
          {currentUser.name === post.author && (
            <div>
              <Button variant="outline" className="mr-2">
                수정
              </Button>
              <Button variant="outline" className="text-destructive">
                삭제
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>

      <h2 className="text-xl font-bold mb-4">답글</h2>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>답글 작성</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="mb-4">
              <Input placeholder="이름" />
            </div>
            <div className="mb-4">
              <Textarea placeholder="답글 내용을 입력하세요" rows={4} />
            </div>
            <Button type="submit">답글 작성</Button>
          </form>
        </CardContent>
      </Card>

      {comments.map((comment) => (
        <Card key={comment.id} className="mb-4">
          <CardHeader>
            <div className="font-semibold">{comment.author}</div>
            <div className="text-sm text-muted-foreground">{comment.date}</div>
          </CardHeader>
          <CardContent>
            <p>{comment.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
