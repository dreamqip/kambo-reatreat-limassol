import { motion } from "framer-motion";

const WhySection = () => (
  <section className="py-24 md:py-32 px-6 bg-secondary/30">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-4">
          Why
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Because talking doesn't work anymore.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          You can spend years discussing your trauma and fatigue in therapy. But{" "}
          <span className="text-foreground font-semibold">the body keeps the score</span>.
          Cortisol, adrenaline, unexpressed anger, and relocation stress are literally
          trapped in your fascia and bloodstream.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Kambo creates a powerful, artificial physiological impulse that breaks this dam.
          You need to tear down this rotten foundation of tension to build something real
          in its place.
        </p>
      </motion.div>
    </div>
  </section>
);

export default WhySection;
