import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from '@/lib/PageNotFound';
import ScrollToTop from '@/components/ScrollToTop';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import ServiceDetail from '@/pages/ServiceDetail';
import Doctors from '@/pages/Doctors';
import DoctorDetail from '@/pages/DoctorDetail';
import Patients from '@/pages/Patients';
import Research from '@/pages/Research';
import News from '@/pages/News';
import Article from '@/pages/Article';
import Contact from '@/pages/Contact';
import Appointment from '@/pages/Appointment';
import Legal from '@/pages/Legal';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:slug" element={<DoctorDetail />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/research" element={<Research />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<Article />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/privacy" element={<Legal />} />
            <Route path="/terms" element={<Legal />} />
            <Route path="/disclaimer" element={<Legal />} />
            <Route path="/accessibility" element={<Legal />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
        <Toaster />
      </Router>
    </QueryClientProvider>
  )
}

export default App
