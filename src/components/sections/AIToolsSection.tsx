
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Tool {
  name: string;
  description: string;
  orbitClass: string;
  delayMultiplier: number;
}

const tools: Tool[] = [
  {
    name: "ChatGPT",
    description: "OpenAI's powerful language model",
    orbitClass: "animate-orbit-1",
    delayMultiplier: 0,
  },
  {
    name: "Claude AI",
    description: "Anthropic's conversational AI assistant",
    orbitClass: "animate-orbit-2",
    delayMultiplier: 0.2,
  },
  {
    name: "bolt.new",
    description: "Rapid web prototyping tool",
    orbitClass: "animate-orbit-3",
    delayMultiplier: 0.4,
  },
  {
    name: "v0.dev",
    description: "Vercel's AI-powered design tool",
    orbitClass: "animate-orbit-4",
    delayMultiplier: 0.6,
  },
  {
    name: "Loveable",
    description: "Web application assistant",
    orbitClass: "animate-orbit-5",
    delayMultiplier: 0.8,
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
            AI Tools
          </motion.h2>
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-neon-purple/20 h-1 w-20 mx-auto my-4 rounded-full"
          />
        </div>

        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          {/* Central Planet */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative z-10"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue opacity-75 blur-md" />
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full glass flex items-center justify-center relative z-10 border border-white/30 shadow-lg animate-pulse">
              <span className="text-lg md:text-xl font-semibold">AI Tools</span>
            </div>
          </motion.div>

          {/* Orbital Paths (Rings) */}
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
            />
          ))}

          {/* Tools (Planets) */}
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
                <div className="group relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-neon-purple/60 to-neon-blue/60 opacity-0 group-hover:opacity-75 blur-md transition-opacity" />
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full glass flex items-center justify-center relative border border-white/20 shadow-lg hover:scale-110 hover:border-neon-purple/50 transition-all duration-300 cursor-pointer group-hover:animate-pulse">
                    <span className="text-sm font-medium opacity-80 group-hover:opacity-100">{tool.name}</span>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 px-2 py-1 glass text-center text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {tool.description}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
