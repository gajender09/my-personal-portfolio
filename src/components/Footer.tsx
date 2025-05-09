
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center space-y-6">
        <div className="flex items-center space-x-4">
          <motion.a 
            href="https://github.com/gajender09" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-neon-purple transition-all duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/gajender-mandiwal" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-neon-purple transition-all duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a 
            href="mailto:mandiwalgajender0001@gmail.com" 
            className="text-muted-foreground hover:text-neon-purple transition-all duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={20} />
          </motion.a>
        </div>
        
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            className="rounded-full glass-button"
          >
            {theme === 'dark' ? 
              <Sun size={18} className="text-yellow-400" /> : 
              <Moon size={18} className="text-indigo-500" />
            }
          </Button>
        </motion.div>
        
        <div className="text-center text-sm text-muted-foreground">
          Thanks for visiting | © 2025 Gajender
        </div>
      </div>
    </footer>
  );
}
