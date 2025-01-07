import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex justify-between items-center w-full mt-2 px-6 py-1 z-50 backdrop-blur">
        <h1 className="text-2xl font-bold">
          <Link to="/">Zimmer</Link>
        </h1>

        <div>
          <Button variant={"secondary"}>
            <a href="/">글쓰기</a>
          </Button>
          <Button asChild>
            <Link to="/login">로그인</Link>
          </Button>
        </div>
      </header>
    </>
  );
}

export default Header;
