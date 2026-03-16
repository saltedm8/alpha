import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import { newsItems, pageHeroImages, newsDetailExtras, reviewLinks } from '../data/siteData';
import './NewsDetailPage.css';

export default function NewsDetailPage() {
  const { slug } = useParams();
  const item = newsItems.find((n) => n.slug === slug);

  if (!item) {
    return <Navigate to="/news" replace />;
  }

  return (
    <PageLayout
      heroImage={pageHeroImages.reviews}
      heroTitle={item.title}
      heroSubtitle="News"
      teaserLabel="News"
    >
      <section className="flow-section flow-news-detail">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flow-news-detail-content"
        >
          {newsDetailExtras[item.slug]?.body ? (
            <div className="flow-news-body">
              {newsDetailExtras[item.slug].body.split(/\n\n+/).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {newsDetailExtras[item.slug].houzzLink && (
                <p>
                  <a href={reviewLinks.houzz} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    {reviewLinks.houzzLabel}
                  </a>
                </p>
              )}
            </div>
          ) : (
            <p className="flow-lead">{item.excerpt}</p>
          )}
          <p className="flow-project-back">
            <Link to="/news">← Back to news</Link>
          </p>
        </motion.article>
      </section>
    </PageLayout>
  );
}
