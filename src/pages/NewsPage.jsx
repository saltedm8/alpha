import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import OptimizedImage from '../components/OptimizedImage';
import { newsItems, pageHeroImages } from '../data/siteData';
import './NewsPage.css';

export default function NewsPage() {
  return (
    <PageLayout
      heroImage={pageHeroImages.reviews}
      heroTitle="News"
      heroSubtitle="Latest updates and announcements."
      teaserLabel="News"
    >
      <section className="news-page flow-section">
        <div className="news-grid">
          {newsItems.map((item, i) => (
            <motion.article
              key={`${item.slug}-${i}`}
              className="news-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Link to={`/news/${item.slug}`} className="news-card-link">
                {item.image && (
                  <div className={`news-card-img ${item.imageFit === 'contain' ? 'news-card-img--logo' : ''}`}>
                    <OptimizedImage src={item.image} alt="" loading="lazy" ratio="16/10" />
                  </div>
                )}
                <div className="news-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <span className="news-card-more">More →</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
