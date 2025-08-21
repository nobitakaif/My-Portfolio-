import { AboutSection } from "@/components/AboutSection";

import HeaderProvider from "@/components/HeaderProvider";
import { HeroSection } from "@/components/MainContent";
import { ProjectsSection } from "@/components/Projects";




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
