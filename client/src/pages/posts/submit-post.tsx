import Sidebar from "@/components/common/Sidebar";
import Header from "@/components/common/Header";
import { SubmitPostForm } from "@/components/posts/SubmitPostForm";

export default function SubmitPostPage() {
  return (
    <>
      <Header />
      <main className="flex w-full pt-4 mx-auto bg-gray-100">
        <Sidebar />
        <section className="flex-grow max-w-3xl w-full mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6">새 게시물 작성</h1>
          <SubmitPostForm />
        </section>
        <div className="w-64 hidden lg:block" />
      </main>
    </>
  );
}
