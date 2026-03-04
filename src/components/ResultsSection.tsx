import { motion } from "framer-motion";

const results = [
  {
    icon: "🔇",
    title: "Zero Brain Fog",
    text: "That moment when your inner critic finally shuts up. A ringing, crystal-clear emptiness and absolute focus take over.",
  },
  {
    icon: "🛡️",
    title: "Body without Armor",
    text: "The muscle tension drops. For the first time in years, you'll take a full, deep breath without a heavy weight on your chest.",
  },
  {
    icon: "⚡",
    title: "Raw Energy",
    text: "Your battery is back to 100%. No stimulants, no biohacking, no nootropics. Just clean, steady drive.",
  },
  {
    icon: "🧬",
    title: "Immune System Reboot",
    text: "Your physiology erases chronic fatigue patterns and resets to factory settings.",
  },
];

const ResultsSection = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mb-12"
      >
        <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-4">
          What you get
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Your Biological Advantage:
        </h2>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {results.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border-l-2 border-primary pl-6"
          >
            <span className="text-2xl mb-3 block">{r.icon}</span>
            <h3 className="text-lg font-semibold mb-2">{r.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{r.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
