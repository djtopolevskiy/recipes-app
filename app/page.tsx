'use client'
import Image from "next/image";
import "./globals.css";
import HeaderLogo from "@/components/HeaderLogo";
import HeaderNav from "@/components/HeaderNav";
import Breakfast from "@/components/Breakfast";
import Dinner from "@/components/Dinner";
import Supper from "@/components/Supper";
import { useRef } from "react";

export default function Home() {

  const breakfastRef = useRef<HTMLDivElement>(null);
  const dinnerRef = useRef<HTMLDivElement>(null);
  const supperRef = useRef<HTMLDivElement>(null);
    
  const scrollToBreakfast = () => {
    breakfastRef.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest", });
  }
  
  const scrollToDinner = () => {
    dinnerRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  
  const scrollToSupper = () => {
    supperRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  
  return (
    <main className="flex h-full w-full flex-col items-center justify-start bg-[#F0E7DE] text-[#C72544] ">
      <header className="flex items-center justify-center sticky top-0 z-10 bg-[#F0E7DE] h-12 w-full text-center border-b border-b-[#C72544]">
        <nav className="flex items-center justify-between w-[1232px] px-4">
          <HeaderLogo />
          <h1 className="font-bold">Рецепти з Інтернету</h1>
          <HeaderNav
            scrollToBreakfast={scrollToBreakfast}
            scrollToDinner={scrollToDinner}
            scrollToSupper={scrollToSupper}
          />
        </nav>       
        
      </header>
      <section className="flex flex-col items-start justify-start h-full w-full text-center">        
        <div className="w-full scroll-mt-12" ref={breakfastRef}>
          {/* Breakfast */}
          <Breakfast />
        </div>
        <div className="w-full scroll-mt-12" ref={dinnerRef}>
          {/* Dinner */}
          <Dinner />
        </div>
        <div className="w-full scroll-mt-12" ref={supperRef}>
          {/* Supper */}
          <Supper />
        </div>
        
      </section>
      
      
      <footer className="flex flex-col items-center justify-center h-10 w-full border-t border-t-[#C72544]">
        <h1 className="font-bold">Смачного!!!</h1>
      </footer>

      
    </main>
  );
}
