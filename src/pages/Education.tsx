import { motion } from "framer-motion";
import { education } from '@/data/content';

export default function Education() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-white">
          Education
        </h1>
        <p className="text-white/80 mt-4 max-w-xl mx-auto text-lg">
          
        </p>
      </div>

      {/* Education Cards */}
      <motion.div
        className="max-w-5xl mx-auto grid gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {education.map((e, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-purple-500/50 transition h-full"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
              <div>
                <h3 className="font-semibold text-lg text-white">{e.institution}</h3>
                <div className="text-sm text-white/70 mt-1">
                  {e.program} • CGPA: {e.cgpa}
                </div>
              </div>
              <div className="text-sm text-white/60">{e.start} – {e.end}</div>
            </div>
            <p className="mt-4 text-white/80">{e.details}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
