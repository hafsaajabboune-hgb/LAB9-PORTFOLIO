import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { GlassCard } from "@/shared/components/ui/GlassCard";
import { SkillPill } from "@/shared/components/ui/SkillPill";
import { Helmet } from "react-helmet-async";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.15 
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 300, damping: 24 } 
  }
};

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>{profile.name} - Portfolio</title>
      </Helmet>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-24"
      >
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center relative">
          


          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
            Hi, I'm <span className="text-gradient">{profile.name}</span>
            <br />
            {profile.title}
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
            {profile.bio}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand-500 to-cyan-500 text-white font-bold transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-105 active:scale-95">
              View Work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </section>

        {/* Selected Projects */}
        <section id="projects" className="scroll-mt-24">
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-display font-bold">Selected Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-brand-500/50 to-transparent"></div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {projects.slice(0, 4).map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <GlassCard className="h-full flex flex-col overflow-hidden group hover:border-brand-500/50 transition-colors duration-500 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 via-transparent to-brand-500/0 group-hover:from-brand-500/5 group-hover:to-brand-400/5 transition-colors duration-500" />
                  
                  <div className="relative z-10 flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-300 transition-colors">{project.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <SkillPill key={tech} skill={tech} className="bg-white/5 border-white/10 text-xs text-gray-300" />
                      ))}
                      {project.technologies.length > 4 && (
                        <SkillPill skill={`+${project.technologies.length - 4}`} className="bg-white/5 border-white/10 text-xs text-brand-300" />
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Skills */}
        <section>
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-display font-bold">Tech Stack</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
          </motion.div>

          <motion.div variants={containerVariants} className="flex flex-wrap gap-3">
            {profile.skills.map((skill) => (
              <motion.div key={skill} variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <SkillPill skill={skill} className="px-4 py-2 text-sm glass hover:bg-brand-500/20 hover:border-brand-500/50 transition-colors" />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </motion.div>
    </>
  );
};