import { profile } from "@/data/profile";
import { GlassCard } from "@/shared/components/ui/GlassCard";
import { Helmet } from "react-helmet-async";
import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Github, Send } from "lucide-react";
import React from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 }
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

export const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission visually or handle it here
    window.location.href = `mailto:${profile.email}`;
  };

  return (
    <>
      <Helmet>
        <title>Contact - {profile.name}</title>
      </Helmet>

      <div className="space-y-12 pb-12 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center pt-8"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h1>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-5"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-6">
            <GlassCard className="h-full flex flex-col justify-center space-y-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-brand-400/5" />
              
              <div className="relative z-10 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <a href={`mailto:${profile.email}`} className="flex items-center gap-4 group/item">
                      <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-brand-400 group-hover/item:bg-brand-500/20 group-hover/item:text-brand-300 transition-colors">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Email</p>
                        <p className="text-white font-medium group-hover/item:text-brand-300 transition-colors">{profile.email}</p>
                      </div>
                    </a>
                    
                    <div className="flex items-center gap-4 group/item">
                      <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-brand-400 group-hover/item:bg-brand-500/20 group-hover/item:text-brand-300 transition-colors">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Location</p>
                        <p className="text-white font-medium">{profile.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-4">Connect on Socials</p>
                  <div className="flex gap-4">
                    <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" 
                       className="p-3 bg-white/5 hover:bg-brand-500/20 hover:text-brand-300 border border-white/10 rounded-xl transition-all hover:scale-110">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="md:col-span-3">
            <GlassCard className="h-full group hover:border-brand-500/30 transition-colors duration-500 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 via-transparent to-brand-500/0 group-hover:from-brand-500/5 group-hover:to-brand-400/5 transition-colors duration-500" />
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-400 ml-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-black/20 border border-white/10 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-transparent transition-all placeholder:text-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-400 ml-1">Your Email</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-black/20 border border-white/10 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-transparent transition-all placeholder:text-gray-600"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-gray-400 ml-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    required
                    placeholder="Hello there"
                    className="w-full bg-black/20 border border-white/10 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-transparent transition-all placeholder:text-gray-600"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-400 ml-1">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-black/20 border border-white/10 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-transparent transition-all placeholder:text-gray-600 resize-none"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 px-6 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};