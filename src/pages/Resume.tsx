
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
  
  // Direct PDF URL from Google Drive
  const pdfUrl = "https://drive.google.com/file/d/1WCTd0XYN5_g8ZhRG1GwIO-1AbS7Y80Px/preview";
  
  const handleDownload = () => {
    // Direct download link for the PDF
    window.open("https://drive.google.com/uc?export=download&id=1WCTd0XYN5_g8ZhRG1GwIO-1AbS7Y80Px", "_blank");
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
          className="glass-card p-6 md:p-8 rounded-xl max-w-5xl mx-auto"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">My Resume</h1>
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
              src={pdfUrl}
              className="w-full h-full"
              frameBorder="0"
              onLoad={() => setLoading(false)}
              title="Resume"
              style={{ display: loading ? "none" : "block" }}
              allow="autoplay"
            />
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
