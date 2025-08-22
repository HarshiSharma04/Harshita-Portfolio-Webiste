import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "C++",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "Dart",
    "Flutter",
    "React.js",
    "Node.js",
    "SQL",
    "Firebase",
    "TensorFlow Lite",
    "Scikit-learn",
    "Pandas",
    "Git/GitHub",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 text-center shadow-lg hover:shadow-purple-500/50 transition"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
