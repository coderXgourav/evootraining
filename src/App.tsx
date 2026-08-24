import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCta } from "@/components/site/MobileCta";

import { Home } from "@/pages/Home";
import { Coaching } from "@/pages/Coaching";
import { BookCoaching } from "@/pages/BookCoaching";
import { HolidayCamps } from "@/pages/HolidayCamps";
import { Coaches } from "@/pages/Coaches";
import { Locations } from "@/pages/Locations";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { Terms, Privacy, Cancellation } from "@/pages/Terms";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-background font-sans text-foreground selection:bg-white selection:text-black">
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/coaching/book" element={<BookCoaching />} />
            <Route path="/holiday-camps" element={<HolidayCamps />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal/terms" element={<Terms />} />
            <Route path="/legal/privacy" element={<Privacy />} />
            <Route path="/legal/cancellation" element={<Cancellation />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <MobileCta />
        <Toaster position="top-right" theme="dark" richColors />
      </div>
    </BrowserRouter>
  );
}
