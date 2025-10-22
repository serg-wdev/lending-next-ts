"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Отключаем автоматическое восстановление скролла
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Удаляем якорь из URL если он есть
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    
    // Принудительно прокручиваем в самый верх
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Schedule />
      <Community />
      <Footer />
    </main>
  );
}

