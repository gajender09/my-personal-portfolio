
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
            My Journey
          </motion.h2>
          <motion.div 
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-neon-purple/20 h-1 w-20 mx-auto my-4 rounded-full"
          />
        </div>

        <div className="relative">
          {/* Animated Path */}
          <svg 
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-4 md:w-6"
            viewBox="0 0 10 800" 
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="animate-path-glow"
              d="M5 0C5 0 -20 150 5 200C30 250 -20 350 5 400C30 450 -20 550 5 600C30 650 5 800 5 800"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="1000"
              strokeDashoffset="1000"
            />
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
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex mb-12 md:mb-24 ${index % 2 === 0 ? 'justify-start md:mr-auto md:pr-8 md:w-1/2' : 'justify-end md:ml-auto md:pl-8 md:w-1/2'}`}
              >
                <div className="relative">
                  {/* Glow Circle on Path */}
                  <div className={`absolute ${index % 2 === 0 ? 'right-0 translate-x-2/3' : 'left-0 -translate-x-2/3'} top-1/2 transform -translate-y-1/2 w-6 h-6 bg-neon-purple rounded-full animate-pulse z-10 hidden md:block`} />
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Card className="glass-card max-w-sm w-full glow animate-glow">
                          <CardHeader className="pb-2">
                            <CardTitle className="flex justify-between">
                              <span>{item.title}</span>
                              <span className="text-neon-purple text-sm">{item.year}</span>
                            </CardTitle>
                            <CardDescription>{item.subtitle}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p>{item.description}</p>
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
