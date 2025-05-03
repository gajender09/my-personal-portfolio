
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TypewriterEffect } from "../TypewriterEffect";

interface Tool {
  name: string;
  description: string;
  orbitClass: string;
  delayMultiplier: number;
  icon: React.ReactNode;
}

export function AIToolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const tools: Tool[] = [
    {
      name: "ChatGPT",
      description: "OpenAI's powerful language model",
      orbitClass: "animate-orbit-1",
      delayMultiplier: 0,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#10a37f">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.5093-2.6067-1.4997z" />
        </svg>
      )
    },
    {
      name: "Claude AI",
      description: "Anthropic's conversational AI assistant",
      orbitClass: "animate-orbit-2",
      delayMultiplier: 0.2,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#5436DA">
          <path d="M12,2.5c-5.247,0-9.5,4.253-9.5,9.5s4.253,9.5,9.5,9.5c5.247,0,9.5-4.253,9.5-9.5S17.247,2.5,12,2.5z M12,18.5 c-3.59,0-6.5-2.91-6.5-6.5S8.41,5.5,12,5.5s6.5,2.91,6.5,6.5S15.59,18.5,12,18.5z M12,8.5c-1.933,0-3.5,1.567-3.5,3.5 s1.567,3.5,3.5,3.5s3.5-1.567,3.5-3.5S13.933,8.5,12,8.5z"/>
        </svg>
      )
    },
    {
      name: "Bolt.new",
      description: "Rapid web prototyping tool",
      orbitClass: "animate-orbit-3",
      delayMultiplier: 0.4,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#FF9500">
          <path d="M19.9998 6.95557L9.21902 18.2909C9.13305 18.3801 8.99802 18.4013 8.88957 18.3407C8.78112 18.2802 8.74314 18.1458 8.7997 18.0356L11.8998 10.7999H4.83152C4.71367 10.7999 4.6124 10.7233 4.57903 10.6122C4.54566 10.5012 4.5859 10.3779 4.68062 10.3077L15.6668 1.71567C15.7539 1.6514 15.8729 1.65982 15.95 1.73557C16.026 1.81023 16.0327 1.92825 15.9658 2.01142L12.2998 6.79991H19.4011C19.5229 6.79991 19.6264 6.8812 19.6563 6.99754C19.6863 7.11389 19.64 7.23669 19.5406 7.30085L19.9998 6.95557ZM14.9911 22.5002C14.8249 22.5002 14.6588 22.4666 14.505 22.3993L8.14381 19.0466C7.79491 18.8663 7.64033 18.4461 7.8207 18.0972C8.00108 17.7483 8.42126 17.5937 8.77016 17.774L15.1313 21.1267C15.4802 21.307 15.6348 21.7272 15.4544 22.0761C15.3299 22.3345 15.1652 22.5002 14.9911 22.5002Z"/>
        </svg>
      )
    },
    {
      name: "v0.dev",
      description: "Vercel's AI-powered design tool",
      orbitClass: "animate-orbit-4",
      delayMultiplier: 0.6,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M24 22.525H0l12-21.05 12 21.05z" />
        </svg>
      )
    },
    {
      name: "Loveable",
      description: "Web application assistant",
      orbitClass: "animate-orbit-5",
      delayMultiplier: 0.8,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#FF6B6B">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      )
    },
  ];

  return (
    <section id="ai-tools" className="py-20 overflow-hidden relative">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold"
          >
            <TypewriterEffect text="AI Tools I Use" delay={100} />
          </motion.h2>
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-neon-purple/20 h-1 w-20 mx-auto my-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-lg mx-auto"
          >
            Leveraging cutting-edge AI tools to enhance productivity and creativity
          </motion.p>
        </div>

        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          {/* Enhanced Central Planet */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative z-10"
            whileHover={{ scale: 1.1 }}
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue opacity-75 blur-md animate-pulse" />
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full glass flex flex-col items-center justify-center relative z-10 border border-white/30 shadow-lg">
              <span className="text-lg md:text-xl font-semibold">AI Tools</span>
              <span className="text-xs text-neon-purple">Click to explore</span>
            </div>
          </motion.div>

          {/* Enhanced Orbital Paths (Rings) */}
          {[1, 2, 3, 4, 5].map((orbit) => (
            <motion.div
              key={`orbit-${orbit}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, delay: orbit * 0.1 }}
              className="absolute rounded-full border border-white/10"
              style={{
                width: `${orbit * 100 + 100}px`,
                height: `${orbit * 100 + 100}px`,
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: ['0 0 0px 0px rgba(155, 135, 245, 0)', '0 0 2px 1px rgba(155, 135, 245, 0.2)', '0 0 0px 0px rgba(155, 135, 245, 0)']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: orbit * 0.5
                }}
              />
            </motion.div>
          ))}

          {/* Enhanced Tools (Planets) with SVG Icons */}
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ 
                "--orbit-radius": `${(index + 1) * 50 + 50}px` 
              } as React.CSSProperties}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className={`absolute top-0 left-0 ${tool.orbitClass}`}
                style={{ transformOrigin: "0 0" }}
              >
                <motion.div 
                  className="group relative cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-neon-purple/60 to-neon-blue/60 opacity-0 group-hover:opacity-75 blur-md transition-opacity" />
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full glass flex items-center justify-center relative border border-white/20 shadow-lg hover:border-neon-purple/50 transition-all duration-300">
                    {/* Tool Icon */}
                    <motion.div 
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
                    >
                      {tool.icon}
                    </motion.div>
                  </div>
                  
                  {/* Enhanced Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 px-3 py-2 glass text-center text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-neon-purple/30 z-20">
                    <p className="font-semibold mb-1">{tool.name}</p>
                    <p className="text-xs opacity-80">{tool.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ))}

          {/* Particle effects around orbits */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-neon-purple/30 rounded-full"
              initial={{ 
                x: Math.random() * 600 - 300,
                y: Math.random() * 600 - 300,
                opacity: 0
              }}
              animate={{ 
                opacity: [0, 0.7, 0],
                scale: [0, 1, 0]
              }}
              transition={{ 
                repeat: Infinity,
                repeatType: "loop",
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 5
              }}
              style={{
                left: '50%',
                top: '50%'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
