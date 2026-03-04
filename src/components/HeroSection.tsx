import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-8"
        >
          Private Kambo Retreat • Limassol, Cyprus
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
        >
          Everyone thinks you're living the dream island life.{" "}
          <span className="text-gradient-amber">
            But you've forgotten what it feels like to actually breathe.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Stop trying to fix a burnt-out body with mindset podcasts. Go through
          a radical cellular cleanse and get your baseline energy back in 1 day.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          onClick={scrollToForm}
          className="bg-primary text-primary-foreground font-heading font-semibold text-lg px-10 py-4 hover:brightness-110 transition-all border-glow"
        >
          Drop the dead weight
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
