import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import LoginPage from "./pages/users/login.tsx";
import SignupPage from "./pages/users/signup.tsx";
import PostDetailPage from "@/pages/posts/post-detail.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/post/detail" element={<PostDetailPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
