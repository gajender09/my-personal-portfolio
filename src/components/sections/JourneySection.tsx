
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Flag } from "lucide-react";

const journeyItems = [
  {
    id: "graduation",
    title: "B.Tech CSE",
    subtitle: "Chandigarh University",
    year: "2021-2025",
    description: "Pursuing Computer Science Engineering with a focus on Web3, AI, and ML"
  },
  {
    id: "research",
    title: "Blockchain Research Paper",
    subtitle: "ICESI 2024",
    year: "2024",
    description: "Published research on blockchain technology applications in supply chain"
  },
  {
    id: "hackathon",
    title: "Hackathon Finalist",
    subtitle: "INNOHACKS 2024",
    year: "2024",
    description: "Reached finals with a decentralized voting application"
  },
  {
    id: "projects",
    title: "Key Projects",
    subtitle: "Portfolio Milestones",
    year: "2022-2024",
    description: "Built ChainTrace, TrustBallot, Real Estate ML Forecast"
  }
];

export function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id="journey" className="py-20 relative overflow-hidden">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold"
          >
            <span className="inline-block">
              <TypewriterEffect text="My Journey" delay={100} />
            </span>
          </motion.h2>
          <motion.div 
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-neon-purple/20 h-1 w-20 mx-auto my-4 rounded-full"
          />
        </div>

        <div className="relative">
          {/* Enhanced Animated Path */}
          <svg 
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-8"
            viewBox="0 0 40 800" 
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Dotted background path */}
            <path
              d="M20 0C20 0 5 150 20 200C35 250 5 350 20 400C35 450 5 550 20 600C35 650 20 800 20 800"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="4"
              strokeDasharray="8 8"
              strokeLinecap="round"
            />

            {/* Animated gradient path */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="timeline-path"
              d="M20 0C20 0 5 150 20 200C35 250 5 350 20 400C35 450 5 550 20 600C35 650 20 800 20 800"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="drop-shadow(0 0 8px rgba(155, 135, 245, 0.5))"
            />

            {/* Checkpoints on the path */}
            {journeyItems.map((_, index) => (
              <motion.circle
                key={`checkpoint-${index}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                cx="20"
                cy={String(200 * index + 100)}
                r="6"
                fill="url(#gradient)"
                filter="drop-shadow(0 0 4px rgba(155, 135, 245, 0.8))"
              />
            ))}

            {/* Flag at the end of path */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              transform="translate(5, 780)"
            >
              <rect x="0" y="-20" width="30" height="20" rx="2" fill="url(#gradient)" />
              <path d="M0 -20L0 10" stroke="url(#gradient)" strokeWidth="2" />
            </motion.g>

            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9b87f5" />
                <stop offset="100%" stopColor="#1EAEDB" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative z-10">
            {journeyItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.3 }}
                className={`flex mb-12 md:mb-24 ${index % 2 === 0 ? 'justify-start md:mr-auto md:pr-8 md:w-1/2' : 'justify-end md:ml-auto md:pl-8 md:w-1/2'}`}
              >
                <div className="relative">
                  {/* Enhanced Glow Circle on Path */}
                  <div className={`absolute ${index % 2 === 0 ? 'right-0 translate-x-2/3' : 'left-0 -translate-x-2/3'} top-1/2 transform -translate-y-1/2 hidden md:flex items-center justify-center`}>
                    <motion.div 
                      className="w-8 h-8 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full animate-pulse z-10"
                      animate={{ 
                        boxShadow: ['0 0 10px 2px rgba(155, 135, 245, 0.3)', '0 0 20px 5px rgba(155, 135, 245, 0.6)', '0 0 10px 2px rgba(155, 135, 245, 0.3)'] 
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut" 
                      }}
                    />
                  </div>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Card className="glass-card max-w-sm w-full hover:shadow-xl hover:border-neon-purple/30 transition-all duration-300">
                          <CardHeader className="pb-2">
                            <CardTitle className="flex justify-between items-center">
                              <span>{item.title}</span>
                              <motion.span 
                                className="text-neon-purple text-sm px-2 py-1 rounded-md bg-neon-purple/10"
                                whileHover={{ scale: 1.05 }}
                              >
                                {item.year}
                              </motion.span>
                            </CardTitle>
                            <CardDescription>{item.subtitle}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p>{item.description}</p>
                            {index === journeyItems.length - 1 && (
                              <motion.div 
                                className="mt-2 flex items-center text-neon-purple"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 3, duration: 0.5 }}
                              >
                                <Flag className="w-4 h-4 mr-2" />
                                <span className="text-sm">Current milestone</span>
                              </motion.div>
                            )}
                          </CardContent>
                        </Card>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="glass border-neon-purple/30">
                        <p>{item.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </motion.div>
            ))}
          </div>
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
