
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="py-6 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div>
        
        <div className="text-center text-sm opacity-60">
          Thanks for visiting | © 2025 Gajender
        </div>
      </div>
    </footer>
  );
}
