
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Skill {
  name: string;
  category: string;
}

const skills: Skill[] = [
  { name: "C", category: "Language" },
  { name: "C++", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "React.js", category: "Stack" },
  { name: "MERN", category: "Stack" },
  { name: "MongoDB", category: "Stack" },
  { name: "OS", category: "Concepts" },
  { name: "DBMS", category: "Concepts" },
  { name: "DSA", category: "Concepts" },
  { name: "CN", category: "Concepts" },
  { name: "Git", category: "Tool" },
  { name: "VS Code", category: "Tool" },
  { name: "Netlify", category: "Tool" },
  { name: "Leadership", category: "Soft" },
  { name: "Presentation", category: "Soft" },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <section id="skills" className="py-20">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold"
          >
            Skills
          </motion.h2>
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-neon-purple/20 h-1 w-20 mx-auto my-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="text-xl font-semibold text-center text-neon-purple"
              >
                {category}
              </motion.h3>
              
              <div className="flex flex-wrap justify-center gap-2">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      custom={index}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      variants={skillVariants}
                      className="glass-card px-3 py-2 rounded-full text-sm hover:bg-neon-purple/20 transition-all animate-float cursor-default"
                      style={{
                        animationDelay: `${index * 0.2}s`
                      }}
                    >
                      {skill.name}
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
