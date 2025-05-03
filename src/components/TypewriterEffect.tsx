
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterEffectProps {
  text: string;
  delay?: number;
  className?: string;
  cursor?: boolean;
  onComplete?: () => void;
}

export function TypewriterEffect({ 
  text, 
  delay = 100, 
  className = "",
  cursor = true,
  onComplete
}: TypewriterEffectProps) {
  const [isComplete, setIsComplete] = useState(false);
  const characters = text.split('');
  
  useEffect(() => {
    if (!isComplete && characters.length > 0) {
      const timeout = setTimeout(() => {
        setIsComplete(true);
        if (onComplete) onComplete();
      }, characters.length * delay);
      
      return () => clearTimeout(timeout);
    }
  }, [characters.length, delay, isComplete, onComplete]);
  
  return (
    <span className={`relative inline-block ${className}`}>
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.2, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }}
          className={char === ' ' ? 'mr-1' : ''}
        >
          {char}
        </motion.span>
      ))}
      {cursor && (
        <motion.span 
          className="ml-0.5 inline-block h-full w-0.5 bg-neon-purple"
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
        />
      )}
    </span>
  );
}
