import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 hidden lg:block shrink-0">
      <div className="sticky top-4 space-y-4 p-4">
        <Card>
          <CardHeader>
            <CardTitle>커뮤니티 정보</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              개발자들을 위한 커뮤니티입니다. 기술 토론, 질문, 팁 공유를
              환영합니다!
            </p>
            <Button className="w-full mt-4">
              <Link to="/post/submit">게시물 작성</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>바로가기</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-inside space-y-2">
              <li>
                <Link to="/notice">공지사항</Link>
              </li>
              <li>
                <Link to="/signup">회원가입</Link>
              </li>
              <li>
                <Link to="/notice">공지사항</Link>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </aside>
  );
}
