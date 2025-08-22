import { motion } from "framer-motion";
import Timeline from '@/components/Timeline';
import { experience } from '@/data/content';

export default function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-white">
          Experience
        </h1>
        <p className="text-white/80 mt-4 max-w-xl mx-auto text-lg">
          Hands-on internships in SDE, Android + ML, and full-stack development.
        </p>
      </div>

      {/* Timeline / Experience Cards */}
      <motion.div
        className="max-w-5xl mx-auto space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {experience.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-purple-500/50 transition"
          >
            {/* Timeline component only for this single experience */}
            <Timeline items={[item]} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
