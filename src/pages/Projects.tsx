import { motion } from "framer-motion";
import { projects } from '@/data/content';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-white">
          Projects
        </h1>
        <p className="text-white/80 mt-4 max-w-xl mx-auto text-lg">
          Mobile apps, AI/ML systems, data analytics dashboards, and more.
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="rounded-xl shadow-lg overflow-hidden hover:shadow-purple-500/60 h-full"
          >
            <div className="h-full flex flex-col">
              <ProjectCard p={p} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
