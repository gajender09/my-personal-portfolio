
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Tool {
  name: string;
  description: string;
  orbitClass: string;
  delayMultiplier: number;
  logoUrl: string;
}

const tools: Tool[] = [
  {
    name: "ChatGPT",
    description: "OpenAI's powerful language model",
    orbitClass: "animate-orbit-1",
    delayMultiplier: 0,
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
  },
  {
    name: "Claude AI",
    description: "Anthropic's conversational AI assistant",
    orbitClass: "animate-orbit-2",
    delayMultiplier: 0.2,
    logoUrl: "https://seeklogo.com/images/A/anthropic-claude-logo-B9FFA9B701-seeklogo.com.png"
  },
  {
    name: "Bolt.new",
    description: "Rapid web prototyping tool",
    orbitClass: "animate-orbit-3",
    delayMultiplier: 0.4,
    logoUrl: "https://bolt.new/favicon/favicon.svg"
  },
  {
    name: "v0.dev",
    description: "Vercel's AI-powered design tool",
    orbitClass: "animate-orbit-4",
    delayMultiplier: 0.6,
    logoUrl: "https://v0.dev/favicon.svg"
  },
  {
    name: "Loveable",
    description: "Web application assistant",
    orbitClass: "animate-orbit-5",
    delayMultiplier: 0.8,
    logoUrl: "https://loveable.ai/logo.png"
  },
];

export function AIToolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id="ai-tools" className="py-20 overflow-hidden">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold"
          >
            <span className="inline-block">
              <TypewriterEffect text="AI Tools I Use" delay={100} />
            </span>
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

          {/* Enhanced Tools (Planets) with Logos */}
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
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full glass flex items-center justify-center relative border border-white/20 shadow-lg hover:border-neon-purple/50 transition-all duration-300 overflow-hidden">
                    {/* Tool Logo */}
                    <motion.img 
                      src={tool.logoUrl} 
                      alt={tool.name}
                      className="w-8 h-8 md:w-10 md:h-10 object-contain"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const textNode = document.createElement('span');
                          textNode.textContent = tool.name;
                          textNode.className = 'text-sm font-medium';
                          parent.appendChild(textNode);
                        }
                      }}
                    />
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

// Typewriter effect component
const TypewriterEffect = ({ text, delay = 100 }: { text: string, delay?: number }) => {
  return (
    <>
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
          className={char === ' ' ? 'mr-1' : ''}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
};
