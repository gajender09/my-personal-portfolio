
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center space-y-6">
        <div className="flex items-center space-x-4">
          <a href="https://github.com/gajender09" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-purple transition-all duration-300">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-purple transition-all duration-300">
            <Linkedin size={20} />
          </a>
          <a href="mailto:mandiwalgajender0001@gmail.com" className="text-muted-foreground hover:text-neon-purple transition-all duration-300">
            <Mail size={20} />
          </a>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          Thanks for visiting | © 2025 Gajender
        </div>
      </div>
    </footer>
  );
}
