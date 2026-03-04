import { motion } from "framer-motion";

const symptoms = [
  {
    icon: "🔋",
    title: "The Illusion of Energy",
    text: "You wake up exhausted. A double espresso gives you a one-hour spike, and then you're crushed by a concrete slab again.",
  },
  {
    icon: "🧠",
    title: "Living in your Head",
    text: "Your brain generates money, deals, and projects, but your body has turned into a rigid shell. Everything from your neck to your lower back screams with tension.",
  },
  {
    icon: "😶",
    title: "Emotional Numbness",
    text: "The sea view doesn't excite you anymore. The taste of food, achievements, purchases—everything feels flat, like you're watching your life through muddy glass.",
  },
  {
    icon: "🌪️",
    title: "Background Anxiety",
    text: "You're haunted by a sticky feeling that you're falling behind or everything is about to collapse, even when the numbers in your bank account are growing.",
  },
];

const SegmentationSection = () => (
  <section className="py-24 md:py-32 px-6 bg-secondary/30">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-4">
          Recognize yourself?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Your life feels like an overheating server:
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {symptoms.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card border border-border p-6 md:p-8"
          >
            <span className="text-3xl mb-4 block">{s.icon}</span>
            <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SegmentationSection;
