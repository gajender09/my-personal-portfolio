
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "AI Tools", href: "#ai-tools" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      setIsScrolled(scrollY > 10);
      
      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 80;
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-5 md:px-10",
        isScrolled ? "py-3 glass backdrop-blur-md" : "py-5"
      )}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="font-mono font-bold text-2xl tracking-tighter">
          <span className="text-neon-purple">GAJENDER</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "nav-item",
                activeSection === item.href.replace("#", "") ? "active-nav-item" : ""
              )}
              onClick={() => {
                if (item.href.startsWith("#")) {
                  setActiveSection(item.href.replace("#", ""));
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden glass mt-3 rounded-lg p-4"
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "nav-item block py-2 px-4",
                  activeSection === item.href.replace("#", "") ? "active-nav-item" : ""
                )}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (item.href.startsWith("#")) {
                    setActiveSection(item.href.replace("#", ""));
                  }
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
