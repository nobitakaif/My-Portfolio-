import { AboutSection } from "@/components/AboutSection";
import { Header } from "@/components/Header";
import HeaderProvider from "@/components/HeaderProvider";
import { HeroSection } from "@/components/MainContent";
import { ProjectsSection } from "@/components/Projects";
import { SessionProvider } from "next-auth/react";



export default function Home() {
  
  return (
      <>
      <HeaderProvider/>
   
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
      </>
   
  );
}
