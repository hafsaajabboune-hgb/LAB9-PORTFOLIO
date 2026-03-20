import { profile } from "@/data/profile";
import { Github, Mail } from "lucide-react";

export const FooterSection = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-brand-500/10 bg-white/5 dark:bg-black/10 backdrop-blur-md py-10 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-5xl flex flex-col items-center gap-6">
        <div className="flex items-center gap-6">
          <a 
            href={profile.socials.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 rounded-full bg-brand-500/10 text-brand-500 dark:text-brand-400 hover:bg-brand-500 hover:text-white transition-all hover:scale-110"
          >
            <Github size={22} />
          </a>
          <a 
            href={`mailto:${profile.email}`} 
            className="p-3 rounded-full bg-brand-500/10 text-brand-500 dark:text-brand-400 hover:bg-brand-500 hover:text-white transition-all hover:scale-110"
          >
            <Mail size={22} />
          </a>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide">
          © {year} {profile.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};