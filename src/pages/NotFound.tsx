
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/ParticleBackground";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <ParticleBackground />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center glass-card p-8 rounded-xl max-w-md mx-auto glow"
      >
        <h1 className="text-6xl font-bold mb-4 text-neon-purple">404</h1>
        <p className="text-xl mb-6">Oops! Page not found</p>
        <Button asChild className="glass-button bg-gradient-to-r from-neon-purple/80 to-neon-blue/80 hover:from-neon-purple hover:to-neon-blue border-none">
          <a href="/">Return to Home</a>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
