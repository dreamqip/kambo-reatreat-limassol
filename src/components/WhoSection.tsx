import { motion } from "framer-motion";

const fits = [
  "Entrepreneurs, IT professionals, and high-achievers whose nervous systems are completely burnt out.",
  "Those stuck in a \"Groundhog Day\" loop in Cyprus looking for a massive, radical shake-up.",
  "People who understand that true transformation always requires pushing through discomfort.",
  "Those tired of esoteric fluff who want a measurable, physical result.",
];

const notFor = [
  {
    title: "This is not a spa day.",
    text: "It will be hard. You will feel nauseous, sweat heavily, and experience intense discomfort. Your body will fight fiercely to release the toxins.",
  },
  {
    title: "This is not a magic pill.",
    text: "Kambo clears your system and gives you massive resources. But how you use this new energy is your own responsibility.",
  },
  {
    title: "This is not a cult.",
    text: "We don't chant mantras or cleanse your karma. We work with physiology, lymph, and the nervous system. Dry, safe, professional.",
  },
];

const WhoSection = () => (
  <section className="py-24 md:py-32 px-6 bg-secondary/30">
    <div className="max-w-4xl mx-auto">
      {/* Who it fits */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-4">
          Who it fits
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Only for those ready to face the truth:
        </h2>
        <div className="space-y-4">
          {fits.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-3"
            >
              <span className="text-primary font-bold mt-0.5">✔</span>
              <p className="text-muted-foreground leading-relaxed">{f}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* What it is NOT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-4">
          What it is NOT
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Let's be brutally honest. We are not for everyone.
        </h2>
        <div className="space-y-6">
          {notFor.map((n, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border p-6"
            >
              <div className="flex items-start gap-3">
                <span className="text-destructive font-bold text-lg">✕</span>
                <div>
                  <h3 className="font-semibold mb-2">{n.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{n.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default WhoSection;
