
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, School, Link as LinkIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { TypewriterEffect } from "../TypewriterEffect";

export function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const roles = [
    "Web3 Developer",
    "AI/ML Enthusiast",
    "Final-Year CSE Student"
  ];

  return (
    <section id="about" className="min-h-screen pt-28 pb-16">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <motion.div variants={fadeIn} className="order-2 md:order-1">
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-2">
              <span className="mr-2">Hi, I'm</span>
              <TypewriterEffect 
                text="Gajender"
                className="text-neon-purple"
              />
            </motion.h2>
            
            <motion.div variants={fadeIn} className="text-xl my-4">
              <TypewriterEffect 
                texts={roles}
                loop={true}
                className="text-neon-blue font-mono"
              />
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-neon-purple/20 h-1 w-20 mb-6 rounded-full" />
            
            <motion.p variants={fadeIn} className="text-lg mb-6 leading-relaxed">
              Final-year B.Tech CSE student at Chandigarh University with a strong foundation in software engineering, Web3, AI tools, and real-world development experience.
            </motion.p>
            
            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="glass-card glow animate-glow hover:scale-105 transition-transform duration-300">
                <CardContent className="p-4 flex items-center space-x-2">
                  <School className="text-neon-purple" size={18} />
                  <div>
                    <p className="text-sm font-medium">CGPA</p>
                    <p className="text-xl font-bold">8.51</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card glow animate-glow hover:scale-105 transition-transform duration-300">
                <CardContent className="p-4">
                  <p className="text-sm font-medium">XII: 94.4%</p>
                  <p className="text-sm font-medium">X: 94.67%</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card glow animate-glow hover:scale-105 transition-transform duration-300">
                <CardContent className="p-4 flex items-center space-x-2">
                  <MapPin className="text-neon-purple" size={18} />
                  <p className="text-sm">Sri Ganganagar, Rajasthan</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card glow animate-glow hover:scale-105 transition-transform duration-300">
                <CardContent className="p-4 flex flex-col space-y-3">
                  <a href="mailto:mandiwalgajender0001@gmail.com" className="flex items-center space-x-2 hover:text-neon-purple transition-colors">
                    <Mail size={18} />
                    <span className="text-sm truncate">mandiwalgajender0001@gmail.com</span>
                  </a>
                  
                  <div className="flex space-x-3">
                    <a href="https://github.com/gajender09" target="_blank" rel="noopener noreferrer" className="hover:text-neon-purple transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/gajender-mandiwal" target="_blank" rel="noopener noreferrer" className="hover:text-neon-purple transition-colors">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          
          <motion.div variants={fadeIn} className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue opacity-75 blur-md animate-pulse"></div>
              <Avatar className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden relative z-10 border-2 border-white/20">
                <AvatarImage 
                  src="/lovable-uploads/d626946c-05ac-4cc4-98d1-2b50238ed13f.png" 
                  alt="Gajender Mandiwal" 
                  className="object-cover"
                />
                <AvatarFallback className="w-full h-full bg-gradient-to-br from-neon-purple/40 to-neon-blue/40 flex items-center justify-center text-4xl md:text-5xl font-mono font-bold">
                  GM
                </AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
