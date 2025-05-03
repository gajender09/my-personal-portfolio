
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { toast } = useToast();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      console.log(data);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.4 }
    })
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 dark:to-black/40 pointer-events-none" />

      <div ref={ref} className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-neon-purple/20 h-1 w-20 mx-auto my-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="glass-card p-6 rounded-xl glow">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="glass border-white/20 focus:border-neon-purple/50" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your.email@example.com" 
                            type="email"
                            className="glass border-white/20 focus:border-neon-purple/50" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message..." 
                            className="glass min-h-32 border-white/20 focus:border-neon-purple/50" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full glass-button bg-gradient-to-r from-neon-purple/80 to-neon-blue/80 hover:from-neon-purple hover:to-neon-blue border-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center">
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6 }}
              className="text-xl font-bold mb-4"
            >
              Connect With Me
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              Feel free to reach out to me through any of the following platforms:
            </motion.p>
            
            <div className="space-y-4">
              <motion.a
                custom={0}
                variants={socialVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                href="mailto:mandiwalgajender0001@gmail.com"
                className="glass-card p-4 rounded-lg flex items-center gap-4 hover:bg-white/15 transition-all"
              >
                <div className="bg-neon-purple/20 p-2 rounded-full">
                  <Mail className="h-6 w-6 text-neon-purple" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-sm opacity-80">mandiwalgajender0001@gmail.com</p>
                </div>
              </motion.a>
              
              <motion.a
                custom={1}
                variants={socialVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-lg flex items-center gap-4 hover:bg-white/15 transition-all"
              >
                <div className="bg-neon-purple/20 p-2 rounded-full">
                  <Linkedin className="h-6 w-6 text-neon-purple" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <p className="text-sm opacity-80">Connect with me professionally</p>
                </div>
              </motion.a>
              
              <motion.a
                custom={2}
                variants={socialVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                href="https://github.com/gajender09"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-lg flex items-center gap-4 hover:bg-white/15 transition-all"
              >
                <div className="bg-neon-purple/20 p-2 rounded-full">
                  <Github className="h-6 w-6 text-neon-purple" />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <p className="text-sm opacity-80">Check out my projects and contributions</p>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
