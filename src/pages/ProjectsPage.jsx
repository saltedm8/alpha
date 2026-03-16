import { Link, useParams } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import PageLayout from '../components/PageLayout';
import { StructuralGrid } from '../components/ArchDrawings';
import SaveProjectButton from '../components/SaveProjectButton';
import OptimizedImage from '../components/OptimizedImage';
import { projectCategories, specialistAreas, pageHeroImages } from '../data/siteData';
import './ProjectsPage.css';

const categorySlugs = ['residential', 'interiors', 'developments', 'community'];

const categories = [
  { slug: 'residential', title: 'Residential', link: 'https://alphaarchitectsltd.co.uk/residential-2/', items: projectCategories.residential },
  { slug: 'interiors', title: 'Commercial / Interiors', link: 'https://alphaarchitectsltd.co.uk/commercial-2/', items: projectCategories.commercial },
  { slug: 'developments', title: 'Developments', link: 'https://alphaarchitectsltd.co.uk/development-2/', items: projectCategories.development },
  { slug: 'community', title: 'Community', link: 'https://alphaarchitectsltd.co.uk/community-2/', items: projectCategories.community },
];

const glideUp = { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } };
const useGlide = (ref) => {
  const inView = useInView(ref, { amount: 0.1, once: true });
  return { initial: 'initial', animate: inView ? 'animate' : 'initial' };
};

export default function ProjectsPage() {
  const { category } = useParams();
  const ref = useRef(null);
  const glide = useGlide(ref);

  const activeCategory = category && categorySlugs.includes(category)
    ? categories.find((c) => c.slug === category)
    : null;

  const hasImages = activeCategory?.items?.[0] && typeof activeCategory.items[0] === 'object' && activeCategory.items[0].image;

  if (activeCategory) {
    return (
      <PageLayout
        heroImage={pageHeroImages.projects}
        heroTitle={activeCategory.title}
        heroSubtitle={`A selection of our ${activeCategory.title.toLowerCase()} projects.`}
        teaserLabel="View projects"
      >
        <section className="flow-section flow-type-block flow-projects-category" ref={ref}>
          <motion.div className="flow-section-drawing flow-drawing-right flow-drawing-xl" initial={{ opacity: 0, x: 40 }} animate={glide.animate === 'animate' ? { opacity: 0.18, x: 0 } : { opacity: 0, x: 40 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flow-drawing-inner"><StructuralGrid /></div>
          </motion.div>
          <div className="flow-projects-category-wrap">
          <Link to="/projects" className="flow-back-link">← All projects</Link>
          <motion.p className="flow-lead flow-lead-left" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {activeCategory.title === 'Residential' && 'Our residential projects include extensions, loft conversions, new builds and full refurbishments across Essex and London.'}
            {activeCategory.title === 'Commercial / Interiors' && 'From restaurants and bars to offices and retail, our commercial interiors combine creative design with practical functionality.'}
            {activeCategory.title === 'Developments' && 'We work with developers on housing schemes, mixed-use projects and regeneration across the region.'}
            {activeCategory.title === 'Community' && 'Schools, churches, nurseries and community centres—projects where our input makes a real difference locally.'}
            {' '}Click any project to view full details.
          </motion.p>
          {hasImages ? (
            <motion.div className="flow-projects-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
              {activeCategory.items.map((item, i) => {
                const slug = item.slug || item.name?.toLowerCase().replace(/\s+/g, '-');
                return (
                  <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 + i * 0.04 }} className="flow-proj-card-wrap">
                    <Link to={`/project/${slug}`} className="flow-proj-card flow-proj-card-inline">
                      <OptimizedImage src={item.image} alt={item.name} loading="lazy" />
                      <span>{item.name}</span>
                    </Link>
                    <SaveProjectButton slug={slug} className="flow-proj-save" />
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div className="flow-projects-list" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              {activeCategory.items.map((item) => {
                const name = typeof item === 'string' ? item : item.name;
                const slug = typeof item === 'object' && item.slug ? item.slug : null;
                return slug ? (
                  <Link key={name} to={`/project/${slug}`} className="flow-project-list-item">
                    {name}
                  </Link>
                ) : (
                  <span key={name} className="flow-project-list-item">{name}</span>
                );
              })}
            </motion.div>
          )}
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      heroImage={pageHeroImages.projects}
      heroTitle="Projects"
      heroSubtitle="Residential, commercial, development and community projects."
      teaserLabel="Browse by category"
    >
      <section className="flow-section flow-type-block flow-projects-index">
        <div className="flow-wrap flow-projects-wrap">
          <motion.p className="flow-lead flow-lead-left" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            We have delivered a wide range of projects across Essex, London and beyond. Browse our portfolio by category to see residential extensions and new builds, commercial interiors, housing developments and community projects.
          </motion.p>
          <motion.h2 className="flow-specialists-head" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>Browse Projects by Category</motion.h2>
        </div>
        <div className="flow-specialists">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            >
              <Link to={`/projects/${cat.slug}`} className="flow-spec-tile">
                <OptimizedImage src={specialistAreas[['residential', 'interiors', 'developments', 'community'].indexOf(cat.slug)]?.image || specialistAreas[0].image} alt={cat.title} loading="lazy" />
                <div className="flow-spec-caption">
                  <span>{cat.title}</span>
                  <span className="flow-spec-more">Click to view projects →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
