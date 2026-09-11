import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProtectedRoute from "@/components/ProtectedRoute";
import PageNotFound from "@/lib/PageNotFound";
import ScrollToTop from "@/components/ScrollToTop";
import Layout from "@/components/layout/Layout";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Doctors from "@/pages/Doctors";
import DoctorDetail from "@/pages/DoctorDetail";
import Patients from "@/pages/Patients";
import PatientPortal from "@/pages/PatientPortal";
import Research from "@/pages/Research";
import News from "@/pages/News";
import Article from "@/pages/Article";
import Contact from "@/pages/Contact";
import Appointment from "@/pages/Appointment";
import Legal from "@/pages/Legal";
import Register from "@/pages/Register";
import Login from "@/pages/Login";

import { PREFIXED_LOCALES } from "@/i18n/config";
import DefaultLocaleRedirect from "@/i18n/DefaultLocaleRedirect";

function contentRoutes() {
  return (
    <>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="services" element={<Services />} />
      <Route path="services/:slug" element={<ServiceDetail />} />

      <Route path="doctors" element={<Doctors />} />
      <Route path="doctors/:slug" element={<DoctorDetail />} />

      <Route path="patients" element={<Patients />} />

      <Route path="research" element={<Research />} />

      <Route path="news" element={<News />} />
      <Route path="news/:slug" element={<Article />} />

      <Route path="contact" element={<Contact />} />

      <Route path="appointment" element={<Appointment />} />

      <Route path="privacy" element={<Legal />} />
      <Route path="terms" element={<Legal />} />
      <Route path="disclaimer" element={<Legal />} />
      <Route path="accessibility" element={<Legal />} />

      <Route path="*" element={<PageNotFound />} />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />

        <Routes>
          {/* Default English locale */}
          <Route
            path="en"
            element={<DefaultLocaleRedirect />}
          />

          <Route
            path="en/*"
            element={<DefaultLocaleRedirect />}
          />

          {/* Authentication pages - no Header/Footer */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="patient-portal" element={<PatientPortal />} />
          </Route>

          {/* Localized pages */}
          {PREFIXED_LOCALES.map((code) => (
            <Route
              key={code}
              path={code}
              element={<Layout />}
            >
              {contentRoutes()}
            </Route>
          ))}

          {/* Normal hospital pages */}
          <Route element={<Layout />}>
            {contentRoutes()}
          </Route>
        </Routes>

        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

export default App;