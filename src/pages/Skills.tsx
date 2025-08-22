import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming & Languages",
      skills: [
        "Python",
        "C++",
        "Java",
        "JavaScript",
        "TypeScript",
        "Dart",
        "Bash/Shell",
        "SQL",
      ],
    },
    {
      category: "Mobile Development",
      skills: [
        "Flutter",
        "React Native",
        "Android/iOS",
        "Firebase ML Kit",
        "Core ML",
      ],
    },
    {
      category: "Web Development",
      skills: [
        "MERN Stack",
        "React.js",
        "Node.js",
        "Express.js",
        "REST APIs",
        "Firebase",
      ],
    },
    {
      category: "AI/ML & Data",
      skills: [
        "TensorFlow Lite",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "On-device AI",
        "Model Deployment via APIs",
        "Real-time Inference",
        "Regression",
        "Classification",
        "Clustering",
        "NLP (SpaCy, NLTK)",
        "Time Series Forecasting",
        "Computer Vision",
        "Recommendation Systems",
        "Deep Learning",
        "LLM & Agentic AI",
        "Prompt Engineering",
      ],
    },
    {
      category: "Backend & APIs",
      skills: ["FastAPI", "Flask", "REST APIs", "Firebase", "Google Cloud"],
    },
    {
      category: "Databases & Cloud",
      skills: [
        "MySQL",
        "Firebase Firestore",
        "SQLite",
        "Google Cloud",
        "AWS (basic)",
      ],
    },
    {
      category: "Data Analytics & Tools",
      skills: [
        "Pandas",
        "NumPy",
        "Data Analysis",
        "Data Visualization",
        "Spark",
        "Tableau",
        "Power BI",
        "Big Data (Hadoop)",
        "Microsoft Excel",
        "PowerPoint",
      ],
    },
    {
      category: "DevOps & Networking",
      skills: [
        "Linux (Ubuntu)",
        "Docker",
        "Git/GitHub",
        "GitHub Actions (CI/CD)",
        "HTTP/S",
        "SMTP",
        "WebSockets",
        "Ansible (basic)",
      ],
    },
    {
      category: "Frameworks & Platforms",
      skills: ["Flutter", "MERN Stack", "Flask", "FastAPI"],
    },
    {
      category: "Concepts",
      skills: [
        "OOPs Programming",
        "Statistical Analysis",
        "Hypothesis Testing",
        "Business Intelligence",
        "Analytics",
        "Personalization Engines",
        "Data Visualization",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6 py-16">
      <h1 className="text-5xl font-bold text-center mb-16">Skills & Expertise</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-purple-500/60 transition"
          >
            <h2 className="text-xl font-semibold mb-4 text-purple-400">
              {category.category}
            </h2>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="bg-gray-700/70 px-3 py-1 rounded-full text-sm cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
