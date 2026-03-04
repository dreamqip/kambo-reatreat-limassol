import { motion } from "framer-motion";

const OfferSection = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gradient-amber">
          The Deep Reset.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          This isn't a yoga retreat, a spa weekend, or a spiritual talking circle.
          It's an uncompromising Amazonian cellular cleansing technology{" "}
          <span className="text-foreground font-semibold">(Kambo)</span>. A systemic
          intervention in your biology that physically flushes out accumulated stress,
          toxins, and the toll of living on overdrive.
        </p>
      </motion.div>
    </div>
  </section>
);

export default OfferSection;
