import Comment from "@/components/comments/Comment";
import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";

function CommentPage() {
  return (
    <>
      <Header />
      <main className="flex w-full pt-4 mx-auto bg-gray-100">
        <Sidebar />
        <section className="flex-grow max-w-3xl w-full mx-auto p-4">
          <Comment />
        </section>
        <div className="w-64 hidden lg:block" />
      </main>
    </>
  );
}

export default CommentPage;
