import { AboutSection } from "@/components/AboutSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/MainContent";
import { ProjectsSection } from "@/components/Projects";



export default function Home() {
  return (
      <>
    
       <Header/>
   
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
      </>
   
  );
}
