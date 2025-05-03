
import { motion } from "framer-motion";

interface TypewriterEffectProps {
  text: string;
  delay?: number;
  className?: string;
}

export function TypewriterEffect({ 
  text, 
  delay = 100, 
  className = "" 
}: TypewriterEffectProps) {
  return (
    <span className={className}>
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
    </span>
  );
}
