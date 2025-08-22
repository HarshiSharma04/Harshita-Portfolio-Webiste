import { motion } from "framer-motion";
import { certifications } from '@/data/content';

export default function Certifications() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-white">
          Licenses & Certifications
        </h1>
        <p className="text-white/70 mt-4 max-w-xl mx-auto text-lg">
          Professional certifications validating skills and expertise.
        </p>
      </div>

      {/* Certification Cards */}
      <motion.ul
        className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {certifications.map((c, i) => (
          <motion.li
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-purple-500/50 transition"
          >
            <div className="font-semibold text-lg">{c.name}</div>
            <div className="text-sm text-white/70 mt-1">
              {c.org} • Issued {c.issued}
            </div>
            {c.credentialId && (
              <div className="text-xs text-white/60 mt-1">
                Credential ID: {c.credentialId}
              </div>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
