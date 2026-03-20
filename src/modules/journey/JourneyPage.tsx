import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { GlassCard } from "@/shared/components/ui/GlassCard";
import { Helmet } from "react-helmet-async";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring", stiffness: 300, damping: 24 } 
  }
};

export const JourneyPage = () => {
  return (
    <>
      <Helmet>
        <title>Journey - {profile.name}</title>
      </Helmet>

      <div className="space-y-12 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center pt-8"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
            My <span className="text-gradient">Journey</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A timeline of my education and professional experiences.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto relative"
        >
          {/* Timeline connecting line */}
          <div className="absolute left-4 md:left-8 top-8 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-brand-500/20 to-transparent"></div>

          <div className="space-y-8">
            {education.map((edu) => (
              <motion.div key={edu.id} variants={itemVariants} className="relative pl-12 md:pl-24">
                {/* Timeline node */}
                <div className="absolute left-[11px] md:left-[27px] top-6 w-3 h-3 rounded-full bg-brand-500 shadow-[0_0_10px_rgba(139,92,246,0.5)] border border-brand-300"></div>
                
                <GlassCard className="group hover:border-brand-500/50 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 via-transparent to-brand-500/0 group-hover:from-brand-500/5 group-hover:to-brand-400/5 transition-colors duration-500" />
                  
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-brand-300 transition-colors">{edu.degree}</h3>
                      <p className="text-brand-400 font-medium mb-2">{edu.school}</p>
                      <p className="text-gray-400 leading-relaxed">{edu.description}</p>
                    </div>
                    
                    <div className="shrink-0 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 whitespace-nowrap">
                      {edu.period}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};