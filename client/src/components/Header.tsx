import { Button } from "@/components/ui/button";

function Header() {
  return (
    <>
      <header className="flex justify-between items-center w-full mt-2 px-6 py-1 z-50 backdrop-blur">
        <h1 className="text-2xl font-bold">
          <a href="/">Zimmer</a>
        </h1>

        <div>
          <Button variant={"secondary"}>
            <a href="/">글쓰기</a>
          </Button>
          <Button asChild>
            <a href="/">로그인</a>
          </Button>
        </div>
      </header>
    </>
  );
}

export default Header;
