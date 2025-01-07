import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import LoginPage from "./pages/users/login.tsx";
import SignupPage from "./pages/users/signup.tsx";
import NoticeDetailPage from "@/pages/notices/notice-detail.tsx";
import NoticePage from "./pages/notices/notice.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/notice/detail" element={<NoticeDetailPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
