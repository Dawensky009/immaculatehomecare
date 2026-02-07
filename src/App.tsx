import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { SiteFooter } from "./components/SiteFooter";
import { Toaster } from "@/components/ui/toaster";
import HomePage from "./pages/HomePage";
import CareersPage from "./pages/CareersPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main role="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/careers" element={<CareersPage />} />
          </Routes>
        </main>
        <SiteFooter />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}
