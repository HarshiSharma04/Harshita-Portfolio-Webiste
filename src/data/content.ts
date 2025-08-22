
export const profile = {
  name: 'Harshita Sharma',
  title: '', // intentionally left blank to keep options open
  location: 'Greater Noida, India',
  email: 'harshitaojasv@gmail.com',
  phone: '+91 7736268900',
  links: {
    github: 'https://github.com/HarshiSharma04',
    linkedin: 'https://www.linkedin.com/in/harshita-sharma-2a40ab25b/',
    portfolio: '',
    leetcode: 'https://leetcode.com/u/Harshita_Sharma04/'
  }
}

export const education = [
  {
    institution: 'Bennett University',
    program: 'B.Tech in Computer Science and Engineering',
    cgpa: '8.90',
    start: 'Sept 2022',
    end: 'Sept 2026',
    details: 'Course highlights: Data Structures, ML, AI, Software Engineering, Cloud Computing. Active member of CSET and School of AI student projects.'
  }
]

export const experience = [
  {
    company: 'Frugal Testing',
    role: 'SDE Intern',
    start: 'Apr 2025',
    end: 'Jul 2025',
    bullets: [
      'Automated test workflows with Selenium & n8n to reduce manual effort.',
      'Built dashboards for market analysis; improved reporting efficiency by 35%.',
      'Contributed to SEO (+30% traffic) and technical blogging.'
    ]
  },
  {
    company: 'Katyayni Organics',
    role: 'Developer Intern',
    start: 'Aug 2024',
    end: 'Nov 2024',
    bullets: [
      'Developed responsive Flutter site; integrated REST APIs.',
      'Added backend features (Node/React/MongoDB) for dynamic dashboards.',
      'Managed deployments on Google Cloud/Firebase for test & prod.'
    ]
  },
  {
    company: 'Prasunet Company',
    role: 'Android + ML Intern',
    start: 'Jun 2024',
    end: 'Jul 2024',
    bullets: [
      'Shipped a TFLite calorie-tracking app with on-device inference.',
      'Reduced prediction latency by 50%; real-time features via Firebase.',
      'Set up CI/CD with GitHub Actions.'
    ]
  }
]

export const research = [
  {
    title: 'Modeling of Dengue Fever Outbreaks Using Machine Learning Techniques',
    venue: 'Lecture Notes in Networks and Systems (Springer Nature), SoCPaR 2023',
    link: 'https://lnkd.in/gQ5QNQqr',
    summary: 'Compared RF, KNN, LSTM, and LightGBM for dengue outbreak forecasting using climate data (temperature, rainfall, humidity). LightGBM achieved 95.89% accuracy—promising for early-warning health systems.',
    authors: ['Harshita Sharma','Divyanshi Singh','Ananya Srivastava','Dr. Yajnaseni Dash','Dr. Ajith Abraham'],
    date: '2023'
  }
]

export const projects = [
  {
    slug: 'brandaudit',
    name: 'BrandAudit – Real-time Sentiment Dashboard',
    date: 'Jul 2025',
    tech: ['Flask','React.js','VADER NLP','Chart.js','CI/CD'],
    repo: 'https://github.com/HarshiSharma04/BrandAudit',
    summary: 'End-to-end full-stack sentiment analysis platform that ingests social media at scale and visualizes real-time brand health.',
    bullets: [
      'Integrated Reddit, Twitter, and YouTube APIs to collect and preprocess 10K+ posts for multi-source sentiment analysis.',
      'Designed Flask-based pipelines for async ingestion and real-time processing, served via REST endpoints to a React frontend.',
      'Visualized time-series sentiment and topic trends with Chart.js; provided drill-down filters and exportable CSVs.',
      'Implemented CI/CD for automated model updates, testing, and zero-downtime deployments; reduced manual update time by 80%.'
    ]
  },
  {
    slug: 'eduai',
    name: 'EduAI – Smart Learning Assistant',
    date: 'Jul 2024',
    tech: ['Flutter','Python','Flask','Random Forest','Recommender','APIs'],
    repo: 'https://github.com/HarshiSharma04/EduAI',
    summary: 'Personalized learning app with learning-style prediction, AI Tutor, recommendation system, and focus mode.',
    bullets: [
      'Learning Style Predictor classifies VARK preferences with Random Forest for personalized content.',
      'Recommender blends multiple ML models to suggest courses and practice items by subject and difficulty.',
      'AI Tutor answers questions inline; integrated YouTube and Chatbot APIs for contextual help.',
      'Focus Mode tracks study sessions and produces productivity analytics for users.'
    ]
  },
  {
    slug: 'calorie-tracker',
    name: 'Calorie Tracker – Food Recognition & Diet Analytics',
    date: 'Jun 2024',
    tech: ['Flutter','Firebase','TFLite','camera','tflite_flutter'],
    repo: 'https://github.com/HarshiSharma04/FoodCalorieRecognition',
    summary: 'Camera-based food recognition, calorie estimation, diet tracking, recipes, and progress charts.',
    bullets: [
      'On-device TFLite inference with optimized model quantization for mobile performance.',
      'Tracks user diet with daily/weekly charts; suggests recipes & progress goals.',
      'Offline-capable pipeline with sync to Firebase when online.'
    ]
  },
  {
    slug: 'habit-tracker',
    name: 'Habit Tracker',
    date: '2023',
    tech: ['HTML','CSS','JavaScript'],
    repo: 'https://github.com/HarshiSharma04/Habit-Tracker',
    summary: 'Aesthetic and minimal habit tracker web app with local storage, streaks, and reminders.',
    bullets: [
      'Responsive UI with keyboard accessibility; localStorage persistence.',
      'Customizable habit categories, streak tracking, and lightweight analytics.'
    ]
  },
  {
    slug: 'code-editor',
    name: 'Code Editor – Problem Solver & Plagiarism Checker',
    date: '2024',
    tech: ['Flutter','Dart','Syntax Highlighting','Plagiarism Detection'],
    repo: 'https://github.com/HarshiSharma04/code_editor',
    summary: 'A Flutter-based code editing environment with problem solving, syntax highlighting, and plagiarism scanning features.',
    bullets: [
      'Editor supports multiple languages, syntax highlighting, and in-app problem execution.',
      'Plagiarism detection module compares submissions and flags high-similarity submissions.'
    ]
  },
  {
    slug: 'evquick',
    name: 'EVQUICK – EV Charging Station Locator',
    date: 'Nov 2023',
    tech: ['Android','Java/Kotlin','Google APIs','Firebase'],
    repo: 'https://github.com/HarshiSharma04/EVQUICK',
    summary: 'Find nearby EV charging stations with estimated wait times.',
    bullets: [
      'Maps + Places search; favorites and real-time updates.'
    ]
  },
  {
    slug: 'shopez',
    name: 'ShopEZ – Barcode Scanning Supermarket App',
    date: 'Apr 2024',
    tech: ['Flutter','Dart','Firebase','Barcode Scanner'],
    repo: 'https://github.com/HarshiSharma04/ShopEZ',
    summary: 'Self-checkout via barcode scanning; personalized recommendations and offers.',
    bullets: [
      'Queue-free checkout; cart building from phone camera.',
      'Recommender from purchase history; targeted offers.'
    ]
  },
  {
    slug: 'vastu',
    name: 'VASTU – E-commerce for Local Artisans',
    date: 'Sept 2023',
    tech: ['Flutter','Firebase','NLP Search'],
    repo: 'https://github.com/fireslayer60/vastu',
    summary: 'Marketplace for traditional artifacts with AI-driven recommendations and NLP search.',
    bullets: [
      'Supports artisans across states; secure checkout and analytics.'
    ]
  },
  {
    slug: 'aqi-prediction',
    name: 'AQI Prediction and Time Series Analysis',
    date: 'Jun 2024',
    tech: ['Python','ARIMA','Pandas','ML'],
    repo: 'https://github.com/HarshiSharma04/AQI_Predictor_using_Time_Series_Analysis',
    summary: 'Multi-city AQI forecasting with ARIMA/ML to analyze seasonal trends and pollutant drivers.',
    bullets: [
      '87% forecast accuracy; robust preprocessing & visualization.'
    ]
  }
]

export const skills = {
  languages: ['Python','C++','Java','Dart','JavaScript/TypeScript','SQL'],
  mobile: ['Flutter','React Native','Firebase ML Kit','Core ML'],
  ai: ['TensorFlow','PyTorch','scikit-learn','NLP (SpaCy, NLTK, BERT)','On-device AI','Recommendation Systems'],
  backend: ['FastAPI','Flask','Node/Express','REST APIs','Firebase','Google Cloud'],
  data: ['Pandas','NumPy','Spark','Tableau','Power BI','Big Data','Time Series'],
  devops: ['Linux','Docker','GitHub Actions','CI/CD']
}

export const certifications = [
  { name: 'Fundamentals of Deep Learning', org: 'NVIDIA', issued: 'Jan 2025', credentialId: '1tO0Ys3ITkGJkXM3sgBKrQ' },
  { name: 'Introduction to Web Development with HTML, CSS, JavaScript', org: 'IBM', issued: 'Jun 2024', credentialId: 'L6LHMN8Y4QZY' },
  { name: 'Fundamentals of Network Communication', org: 'University of Colorado System', issued: 'Feb 2024', credentialId: 'H34RLDDJVDA9' },
  { name: 'IBM Machine Learning Specialization', org: 'IBM', issued: 'Feb 2024', credentialId: 'FZY4FPRGT62W' },
  { name: 'Operating Systems and You: Becoming a Power User', org: 'Google', issued: 'Feb 2024', credentialId: 'RSJBP7BHFE2X' },
  { name: 'Data Structures', org: 'University of California, San Diego', issued: 'Oct 2023', credentialId: 'JQ9TKQ9L4SD8' },
  { name: 'Google Data Analytics Specialization', org: 'Google', issued: 'Oct 2023', credentialId: '6ML7ZFR4DY88' },
  { name: 'Introduction to User Experience Design', org: 'University of Colorado System', issued: '2024', credentialId: '' },
  { name: 'Google Cloud Arcade Badges', org: 'Google Cloud', issued: '2024', credentialId: '' }
]
