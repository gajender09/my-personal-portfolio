
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Resume = () => {
  const [loading, setLoading] = useState(true);
  
  // Direct PDF URL from Google Drive
  const pdfUrl = "https://drive.google.com/file/d/1WCTd0XYN5_g8ZhRG1GwIO-1AbS7Y80Px/preview";
  
  const handleDownload = () => {
    // Direct download link for the PDF
    window.open("https://drive.google.com/uc?export=download&id=1WCTd0XYN5_g8ZhRG1GwIO-1AbS7Y80Px", "_blank");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col p-4">
      {/* Back button and actions row */}
      <div className="flex justify-between items-center mb-4 z-10">
        <Button 
          as={Link}
          to="/"
          variant="ghost" 
          className="flex items-center gap-1 hover:bg-white/10 transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Portfolio</span>
        </Button>
        
        <Button
          onClick={handleDownload}
          className="glass-button bg-gradient-to-r from-neon-purple/80 to-neon-blue/80 hover:from-neon-purple hover:to-neon-blue border-none"
        >
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </Button>
      </div>
      
      {/* Resume container */}
      <motion.div 
        className="flex-grow w-full rounded-xl overflow-hidden border border-white/10 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin w-12 h-12 border-4 border-neon-purple/80 border-t-transparent rounded-full" />
          </div>
        )}
        <iframe
          src={pdfUrl}
          className="w-full h-[calc(100vh-100px)]"
          frameBorder="0"
          onLoad={() => setLoading(false)}
          title="Resume"
          style={{ display: loading ? "none" : "block" }}
          allow="autoplay"
        />
      </motion.div>
    </div>
  );
};

export default Resume;
