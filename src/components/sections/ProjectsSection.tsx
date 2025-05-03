
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: "ChainTrace",
    description: "Blockchain supply chain tracker for ensuring product authenticity and traceability across the supply network.",
    techStack: ["React", "Web3.js", "Solidity", "Node.js"],
    github: "https://github.com/gajender09",
    demo: "#",
  },
  {
    title: "TrustBallot",
    description: "Secure decentralized voting application ensuring transparency and immutability in electoral processes.",
    techStack: ["Solidity", "React", "Node.js", "MongoDB"],
    github: "https://github.com/gajender09",
    demo: "#",
  },
  {
    title: "Real Estate Forecast",
    description: "Machine learning model with 92% accuracy for predicting real estate prices based on various parameters.",
    techStack: ["Python", "JavaScript", "TensorFlow", "Flask"],
    github: "https://github.com/gajender09",
    demo: "#",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      }
    })
  };

  return (
    <section id="projects" className="py-20">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold"
          >
            Projects
          </motion.h2>
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-neon-purple/20 h-1 w-20 mx-auto my-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <div className="flip-card h-[350px]">
                <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-preserve-3d hover:rotate-y-180">
                  {/* Front */}
                  <Card className="flip-card-front glass-card w-full h-full absolute backface-hidden glow animate-glow">
                    <CardHeader>
                      <CardTitle className="text-neon-purple">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="px-2 py-1 text-xs rounded-full glass">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="text-sm text-muted-foreground">
                      Click to see more details
                    </CardFooter>
                  </Card>

                  {/* Back */}
                  <Card className="flip-card-back glass-card w-full h-full absolute backface-hidden rotate-y-180 glow animate-glow">
                    <div className="flex flex-col justify-between h-full p-6">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="mb-4">{project.description}</p>
                      </div>
                      
                      <div className="mt-auto space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span key={tech} className="px-2 py-1 text-xs rounded-full glass">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex space-x-4">
                          <Button asChild variant="outline" size="sm" className="glass-button flex-1">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                              <Github size={16} />
                              GitHub
                            </a>
                          </Button>
                          <Button asChild variant="outline" size="sm" className="glass-button flex-1">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                              <ExternalLink size={16} />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
