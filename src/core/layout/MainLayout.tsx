
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "./FooterSection";
import { ThemeToggle } from "@/shared/components/ThemeToggle";
import { PageWrapper } from "@/components/PageWrapper";

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <PageWrapper />
      <FooterSection />
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggle />
      </div>
    </div>
  );
};