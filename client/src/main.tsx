import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import LoginPage from "./pages/users/login.tsx";
import SignupPage from "./pages/users/signup.tsx";
import CommentPage from "@/pages/comments/comment.tsx";
import NoticePage from "./pages/notices/notice.tsx";
import SubmitPostPage from "./pages/posts/submit-post.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/post/submit" element={<SubmitPostPage />} />
        <Route path="/comment/post_id" element={<CommentPage />} />
        <Route path="/notice" element={<NoticePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
