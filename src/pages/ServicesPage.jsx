import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import OptimizedImage from '../components/OptimizedImage';
import { WireframeBuilding } from '../components/ArchDrawings';
import { servicesContent, specialistAreas, pageHeroImages } from '../data/siteData';
import './ServicesPage.css';

const slugToKey = {
  residential: 'residential',
  interior: 'interiors',
  interiors: 'interiors',
  commercialinteriors: 'interiors',
  development: 'developments',
  developments: 'developments',
  community: 'community',
};

const serviceSlug = (title) => {
  const map = { Residential: 'residential', 'Commercial & Interiors': 'interiors', Developments: 'developments', Community: 'community' };
  return map[title] || title.toLowerCase().replace(/\s/g, '');
};

const glideUp = { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } };

export default function ServicesPage() {
  const { slug } = useParams();
  const key = slug && (slugToKey[slug] || slug);
  const service = key ? servicesContent[key] : null;

  if (slug && service) {
    const area = specialistAreas.find((a) => serviceSlug(a.title) === key);
    const serviceImage = area?.image || pageHeroImages.services;
    return (
      <PageLayout
        heroImage={pageHeroImages.services}
        heroTitle={service.title || slug.charAt(0).toUpperCase() + slug.slice(1)}
        heroSubtitle={service.short?.slice(0, 100) + '...'}
        teaserLabel="Full service"
      >
        <section className="flow-section flow-image-offset flow-service-detail-section">
          <motion.div className="flow-section-drawing flow-drawing-left flow-drawing-xl" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 0.18, x: 0 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flow-drawing-inner"><WireframeBuilding /></div>
          </motion.div>
          <div className="flow-service-detail-layout">
            <motion.div className="flow-wrap flow-text-left flow-service-detail" initial={glideUp.initial} animate={glideUp.animate} transition={glideUp.transition}>
              <p className="flow-text">{service.short}</p>
              <p className="flow-text">{service.full}</p>
            {service.stages && service.stages.length > 0 && (
              <div className="flow-service-stages">
                <h3>Our process</h3>
                <ol>
                  {service.stages.map((stage, i) => (
                    <li key={i}><strong>Stage {i + 1}:</strong> {stage}</li>
                  ))}
                </ol>
              </div>
            )}
            <div className="flow-service-actions">
              <Link to="/contact" className="flow-link">Arrange a free consultation →</Link>
              <Link to="/projects" className="flow-link flow-link-secondary">View our projects</Link>
            </div>
            </motion.div>
            <motion.div className="flow-service-image" initial={glideUp.initial} animate={glideUp.animate} transition={{ ...glideUp.transition, delay: 0.1 }}>
              <OptimizedImage src={serviceImage} alt="" loading="lazy" />
            </motion.div>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      heroImage={pageHeroImages.services}
      heroTitle="Services"
      heroSubtitle="Full architectural service from consultation to completion."
      teaserLabel="Our specialist areas"
    >
      <section className="flow-section flow-type-block flow-services-index">
        <div className="flow-wrap flow-services-wrap">
          <motion.p className="flow-lead flow-lead-left" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            We offer a full architectural service from initial consultation through to completion. Our team has over 25 years of experience in residential design, interiors, developments and community projects. Click any area below for more detail.
          </motion.p>
          <motion.h2 className="flow-specialists-head" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>Our Specialist Areas</motion.h2>
        </div>
        <div className="flow-specialists">
          {specialistAreas.map((area, i) => {
            const slug = serviceSlug(area.title);
            const svc = servicesContent[slug];
            const short = svc?.short?.slice(0, 120) + (svc?.short?.length > 120 ? '…' : '');
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              >
                <Link to={`/services/${slug}`} className="flow-spec-tile flow-spec-tile-with-desc">
                  <OptimizedImage src={area.image} alt={area.title} loading="lazy" />
                  <div className="flow-spec-caption">
                    <span>{area.title}</span>
                    {short && <span className="flow-spec-desc">{short}</span>}
                    <span className="flow-spec-more">Click to view details →</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
}
