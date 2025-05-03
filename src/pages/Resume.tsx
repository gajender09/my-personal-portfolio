
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Download } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { ParticleBackground } from "@/components/ParticleBackground";

const Resume = () => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);

  const handleDownload = () => {
    // This would be a link to your actual resume PDF file
    alert("In a real application, this would download a PDF resume");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <Header />
      
      <main className="flex-grow container mx-auto px-4 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 md:p-8 rounded-xl max-w-4xl mx-auto"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold">My Resume</h1>
            <Button
              onClick={handleDownload}
              className="glass-button bg-gradient-to-r from-neon-purple/80 to-neon-blue/80 hover:from-neon-purple hover:to-neon-blue border-none"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className="w-full rounded-md overflow-hidden bg-white/5 border border-white/10 h-[calc(100vh-300px)]">
            {loading && (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin w-8 h-8 border-4 border-neon-purple/80 border-t-transparent rounded-full" />
              </div>
            )}
            <iframe
              src={`https://docs.google.com/document/d/e/2PACX-1vQHcFgPZtLgkGsSzJxQ7nGJgoEcnkgKIIbcIs8h2QfwSL9_F5GJVVGP6GHDCMTqKLJKASLCbKjYqLwf/pub?embedded=true`}
              className="w-full h-full"
              frameBorder="0"
              onLoad={() => setLoading(false)}
              title="Resume"
              style={{ display: loading ? "none" : "block" }}
            />
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
