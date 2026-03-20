import { profile } from "@/data/profile";
import { certifications } from "@/data/certifications";
import { GlassCard } from "@/shared/components/ui/GlassCard";
import { Helmet } from "react-helmet-async";
import { motion, Variants } from "framer-motion";
import { Award, Calendar } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0, 
    transition: { type: "spring", stiffness: 300, damping: 24 } 
  }
};

export const CredentialsPage = () => {
  return (
    <>
      <Helmet>
        <title>Credentials - {profile.name}</title>
      </Helmet>

      <div className="space-y-12 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center pt-8"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
            My <span className="text-gradient">Credentials</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Certifications, awards, and verified skills.
          </p>
        </motion.div>
        
        {certifications.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-gray-500 glass px-6 py-4 rounded-full inline-block">Aucune certification pour le moment.</p>
          </motion.div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2"
          >
            {certifications.map((cert) => (
              <motion.div key={cert.id} variants={itemVariants}>
                <GlassCard className="h-full flex flex-col group hover:border-brand-500/50 transition-colors duration-500 relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-brand-500/10 rounded-full blur-2xl group-hover:bg-brand-500/20 transition-colors duration-500" />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-brand-400 shrink-0">
                      <Award size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-1 group-hover:text-white transition-colors">{cert.title}</h2>
                      <p className="text-brand-400 font-medium mb-4">{cert.issuer}</p>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar size={14} />
                        <span>Issued {cert.date}</span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
};