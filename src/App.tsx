import { Route, Routes } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Experience from '@/pages/Experience'
import Projects from '@/pages/Projects'
import Skills from '@/pages/Skills'
import Certifications from '@/pages/Certifications'
import Contact from '@/pages/Contact'
import ProjectDetail from '@/pages/ProjectDetail'
import Research from '@/pages/Research'
import Education from '@/pages/Education'

export default function App() {
  return (
    <div className="min-h-screen gradient-bg text-white">
      <Navbar />
      <main className="pt-16 px-4 md:px-8 max-w-7xl mx-auto py-8 md:py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/research" element={<Research />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
