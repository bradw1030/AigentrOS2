import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import FrameworkClient from "@/components/sections/FrameworkClient";
import WorkflowDemo from "@/components/sections/WorkflowDemo";
import FounderSection from "@/components/sections/FounderSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FrameworkClient />
      <WorkflowDemo />
      <FounderSection />
      <FinalCTA />
    </main>
  );
}
