import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex justify-between items-center w-full py-2 px-6 z-50 bg-gray-100 backdrop-blur">
        <h1 className="text-2xl font-bold">
          <Link to="/">Zimmer</Link>
        </h1>

        <div>
          <Button asChild>
            <Link to="/login">로그인</Link>
          </Button>
        </div>
      </header>
    </>
  );
}

export default Header;
