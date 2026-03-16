import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import { SavedProjectsProvider } from './context/SavedProjectsContext';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const NewsDetailPage = lazy(() => import('./pages/NewsDetailPage'));
const SavedProjectsPage = lazy(() => import('./pages/SavedProjectsPage'));

function PageFallback() {
  return <div className="page-loading" aria-hidden="true" />;
}

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((s) => !s);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <BrowserRouter>
      <SavedProjectsProvider>
      <ScrollToTop />
      <div className="app">
        <Header onSearchClick={() => setSearchOpen(true)} />
        <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:category" element={<ProjectsPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:slug" element={<NewsDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/project/:slug" element={<ProjectDetailPage />} />
            <Route path="/saved" element={<SavedProjectsPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
      </SavedProjectsProvider>
    </BrowserRouter>
  );
}
