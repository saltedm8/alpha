import { useState, useCallback, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import SaveProjectButton from '../components/SaveProjectButton';
import OptimizedImage from '../components/OptimizedImage';
import { projectDetails, projectDetailExtras } from '../data/siteData';
import './ProjectDetailPage.css';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = slug && projectDetails[slug];
  const extras = slug && projectDetailExtras?.[slug];
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const gallery = extras?.gallery || [];
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goPrev = useCallback(() => setLightboxIndex((i) => (i <= 0 ? gallery.length - 1 : i - 1)), [gallery.length]);
  const goNext = useCallback(() => setLightboxIndex((i) => (i >= gallery.length - 1 ? 0 : i + 1)), [gallery.length]);

  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, closeLightbox, goPrev, goNext]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <PageLayout
      heroImage={extras?.gallery?.[0] || project.image}
      heroTitle={project.name}
      heroSubtitle={extras?.location || project.category}
      teaserLabel="View full project"
      showTeaser={false}
    >
      <section className="flow-section flow-project-detail" aria-labelledby="project-heading">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flow-project-detail-content"
        >
          <div className="flow-project-head-row">
            <h2 id="project-heading" className="flow-head">{project.name}</h2>
            <SaveProjectButton slug={slug} />
          </div>
          {extras?.location && (
            <p className="flow-project-location">{extras.location}</p>
          )}
          {extras?.description && (
            <p className="flow-lead flow-project-desc">{extras.description}</p>
          )}
          {!extras?.description && (
            <p className="flow-lead">
              View the full project gallery below. Click any image to expand.
            </p>
          )}
          {gallery.length > 0 && (
            <div className="flow-project-gallery">
              {gallery.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  className="flow-project-gallery-item"
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`View image ${i + 1} full size`}
                >
                  <OptimizedImage src={src} alt={`${project.name} ${i + 1}`} loading="lazy" />
                  <span className="flow-project-gallery-expand" aria-hidden>↗</span>
                </button>
              ))}
            </div>
          )}
          <p className="flow-project-back">
            <Link to={`/projects/${project.category === 'Residential' ? 'residential' : project.category === 'Commercial' ? 'interiors' : project.category === 'Development' ? 'developments' : 'community'}`}>← Back to {project.category === 'Commercial' ? 'commercial & interiors' : project.category.toLowerCase()} projects</Link>
          </p>
        </motion.article>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && gallery[lightboxIndex] && (
          <motion.div
            className="flow-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery"
          >
            <button type="button" className="flow-lightbox-close" onClick={closeLightbox} aria-label="Close">×</button>
            <button type="button" className="flow-lightbox-prev" onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="Previous image">‹</button>
            <div className="flow-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <img src={gallery[lightboxIndex]} alt={`${project.name} ${lightboxIndex + 1}`} />
              <span className="flow-lightbox-counter">{lightboxIndex + 1} / {gallery.length}</span>
            </div>
            <button type="button" className="flow-lightbox-next" onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="Next image">›</button>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}
