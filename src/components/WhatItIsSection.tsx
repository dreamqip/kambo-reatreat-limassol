import { motion } from "framer-motion";

const WhatItIsSection = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-4">
          What it is
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          It's not magic. It's hardcore biochemistry.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Kambo is a peptide cocktail (the secretion of the Phyllomedusa bicolor frog).
          Once it enters your lymphatic system, it acts like a{" "}
          <span className="text-foreground font-semibold">systemic antivirus</span>.
          It locates inflammation, blocked tissues, and cellular garbage, and forces
          your body to purge it.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          This is an intense, deep somatic flush that bypasses your overthinking mind
          and works directly with your <span className="text-foreground font-semibold">"hardware."</span>
        </p>
      </motion.div>
    </div>
  </section>
);

export default WhatItIsSection;
