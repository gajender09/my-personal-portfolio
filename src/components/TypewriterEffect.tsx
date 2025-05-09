
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterEffectProps {
  text?: string;
  texts?: string[];
  delay?: number;
  className?: string;
  cursor?: boolean;
  onComplete?: () => void;
  loop?: boolean;
}

export function TypewriterEffect({ 
  text, 
  texts = [], 
  delay = 100, 
  className = "",
  cursor = true,
  onComplete,
  loop = false
}: TypewriterEffectProps) {
  const [isComplete, setIsComplete] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  
  const currentText = text || texts[currentTextIndex] || "";
  const characters = currentText.split('');
  
  useEffect(() => {
    if (!loop && text) {
      // Single text mode (non-looping)
      if (!isComplete && characters.length > 0) {
        const timeout = setTimeout(() => {
          setIsComplete(true);
          if (onComplete) onComplete();
        }, characters.length * delay);
        
        return () => clearTimeout(timeout);
      }
    } else if (texts.length > 0) {
      // Multiple texts rotation mode
      let timeout: NodeJS.Timeout;
      
      if (isTyping) {
        if (displayedText.length < currentText.length) {
          timeout = setTimeout(() => {
            setDisplayedText(currentText.slice(0, displayedText.length + 1));
          }, delay);
        } else {
          timeout = setTimeout(() => {
            setIsTyping(false);
          }, 1500); // Pause at the end
        }
      } else {
        if (displayedText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayedText(displayedText.slice(0, -1));
          }, delay / 2);
        } else {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setIsTyping(true);
        }
      }
      
      return () => clearTimeout(timeout);
    }
  }, [characters.length, delay, isComplete, onComplete, isTyping, displayedText, currentText, loop, text, texts]);
  
  // For single text mode
  if (text) {
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
  
  // For rotating texts mode
  return (
    <span className={`relative inline-block ${className}`}>
      {displayedText}
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
