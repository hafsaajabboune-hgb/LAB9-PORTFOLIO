
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Briefcase, User, Award, Mail } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ThemeToggle } from "@/shared/components/ThemeToggle";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { path: "/", id: "home", icon: Home, label: "Home" },
  { path: "/projects", id: "projects", icon: Briefcase, label: "Projects" },
  { path: "/journey", id: "journey", icon: User, label: "Journey" },
  { path: "/credentials", id: "credentials", icon: Award, label: "Credentials" },
  { path: "/contact", id: "contact", icon: Mail, label: "Contact" },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="glass rounded-full px-4 py-3 flex items-center gap-2 sm:gap-4 shadow-xl pointer-events-auto"
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.id}
              to={item.path}
              className={cn(
                "relative flex items-center justify-center p-2 sm:px-4 sm:py-2 rounded-full text-sm font-medium transition-colors hover:text-foreground",
                isActive ? "text-foreground" : "text-gray-500 dark:text-gray-400"
              )}
            >
              <span className="relative z-10 flex items-center gap-2">
                <item.icon className="w-4 h-4" />
                <span className="hidden sm:inline-block">{item.label}</span>
              </span>
              
              {isActive && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full border border-black/10 dark:border-white/20"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          );
        })}

        <div className="w-px h-6 bg-border mx-1 sm:mx-2 hidden sm:block"></div>
        <ThemeToggle />
      </motion.nav>
    </div>
  );
};
