import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { GlassCard } from "@/shared/components/ui/GlassCard";
import { SkillPill } from "@/shared/components/ui/SkillPill";
import { Helmet } from "react-helmet-async";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
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

export const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects - {profile.name}</title>
      </Helmet>

      <div className="space-y-12 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center pt-8"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
            All <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive list of my selected works, experiments, and open-source contributions.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <GlassCard className="h-full flex flex-col group hover:border-brand-500/50 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 via-transparent to-brand-500/0 group-hover:from-brand-500/5 group-hover:to-brand-400/5 transition-colors duration-500" />
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <h2 className="text-xl font-bold mb-3 group-hover:text-brand-300 transition-colors">{project.title}</h2>
                  <p className="text-sm text-gray-400 mb-6 flex-1 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <SkillPill key={tech} skill={tech} className="bg-white/5 border border-white/10 text-xs text-gray-300" />
                    ))}
                    {project.technologies.length > 5 && (
                      <SkillPill skill={`+${project.technologies.length - 5}`} className="bg-brand-500/20 border border-brand-500/30 text-xs text-brand-300" />
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};