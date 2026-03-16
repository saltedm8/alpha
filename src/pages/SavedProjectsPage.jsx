import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import { useSavedProjects } from '../context/SavedProjectsContext';
import { projectCategories, pageHeroImages } from '../data/siteData';
import SaveProjectButton from '../components/SaveProjectButton';
import OptimizedImage from '../components/OptimizedImage';
import './SavedProjectsPage.css';

const allProjects = [
  ...projectCategories.residential,
  ...projectCategories.commercial,
  ...projectCategories.development,
  ...projectCategories.community,
];

export default function SavedProjectsPage() {
  const { saved } = useSavedProjects();
  const projects = saved
    .map((slug) => allProjects.find((p) => (p.slug || p.name?.toLowerCase().replace(/\s+/g, '-')) === slug))
    .filter(Boolean);

  return (
    <PageLayout
      heroImage={pageHeroImages.projects}
      heroTitle="Saved Projects"
      heroSubtitle={projects.length ? `You have ${projects.length} saved project${projects.length === 1 ? '' : 's'}.` : 'Save projects to compare and revisit later.'}
      teaserLabel="Your collection"
    >
      <section className="flow-section flow-saved-projects">
        {projects.length === 0 ? (
          <motion.div
            className="flow-saved-empty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>No saved projects yet. Browse our projects and click the heart icon to save ones you like.</p>
            <Link to="/projects" className="btn btn-primary">Browse projects</Link>
          </motion.div>
        ) : (
          <>
            <p className="flow-lead">Click the heart to remove from your list. Use this to compare projects or share with your partner.</p>
            <motion.div
              className="flow-saved-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {projects.map((item, i) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="flow-saved-card"
                >
                  <Link to={`/project/${item.slug}`} className="flow-saved-card-link">
                    <OptimizedImage src={item.image} alt={item.name} loading="lazy" />
                    <span>{item.name}</span>
                  </Link>
                  <SaveProjectButton slug={item.slug} className="flow-saved-card-btn" />
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </section>
    </PageLayout>
  );
}
