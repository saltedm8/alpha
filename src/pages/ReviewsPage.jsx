import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import PageLayout from '../components/PageLayout';
import { IsometricView } from '../components/ArchDrawings';
import {
  pageHeroImages,
  houzzAwards,
  houzzBadges,
  affiliationLogos,
  reviewLinks,
  reviewsContent,
  reviewWidgets,
  googleReviews,
  houzzReviews,
} from '../data/siteData';
import './ReviewsPage.css';

const useGlide = (ref) => {
  const inView = useInView(ref, { amount: 0.1, once: true });
  return { initial: 'initial', animate: inView ? 'animate' : 'initial' };
};

const getInitials = (name) => {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
};

const ReviewCard = ({ review, platform, index }) => (
  <motion.article
    className="review-card"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
  >
    <div className="review-card-header">
      <div className="review-avatar" aria-hidden="true">
        {review.avatar ? (
          <img src={review.avatar} alt="" />
        ) : (
          getInitials(review.author)
        )}
      </div>
      <div className="review-meta">
        <span className="review-author">{review.author}</span>
        <span className="review-date">{review.date}</span>
        <span className="review-stars" aria-label="5 stars">★★★★★</span>
      </div>
    </div>
    <p className="review-text">{review.text}</p>
    <span className="review-platform">{platform}</span>
  </motion.article>
);

export default function ReviewsPage() {
  const ref = useRef(null);
  const glide = useGlide(ref);

  return (
    <PageLayout
      heroImage={pageHeroImages.reviews}
      heroTitle="Reviews"
      heroSubtitle="What our clients say about us on Google and Houzz."
      teaserLabel="Client reviews"
    >
      <section className="reviews-page flow-section" ref={ref}>
        <motion.div
          className="flow-section-drawing flow-drawing-right flow-drawing-lg"
          initial={{ opacity: 0, x: 40 }}
          animate={glide.animate === 'animate' ? { opacity: 0.18, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flow-drawing-inner">
            <IsometricView />
          </div>
        </motion.div>

        <motion.p
          className="reviews-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          {reviewsContent.intro}
        </motion.p>

        <motion.div
          className="reviews-cta-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {reviewWidgets.map((w) => (
            <a
              key={w.platform}
              href={w.link}
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-cta-card"
            >
              <span className="reviews-cta-platform">{w.platform}</span>
              <span className="reviews-cta-stars">★★★★★</span>
              <span className="reviews-cta-rating">{w.rating}</span>
              <span className="reviews-cta-count">({w.count} reviews)</span>
              <span className="reviews-cta-link">View on {w.platform} →</span>
            </a>
          ))}
        </motion.div>

        <motion.section
          className="reviews-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h2 className="reviews-section-title">Google Reviews</h2>
          <div className="reviews-grid">
            {googleReviews.slice(0, 8).map((review, i) => (
              <ReviewCard key={`g-${i}`} review={review} platform="Google" index={i} />
            ))}
          </div>
        </motion.section>

        <motion.section
          className="reviews-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="reviews-section-title">Houzz Reviews</h2>
          <div className="reviews-grid">
            {houzzReviews.map((review, i) => (
              <ReviewCard key={`h-${i}`} review={review} platform="Houzz" index={i} />
            ))}
          </div>
        </motion.section>

        <motion.div
          className="reviews-awards"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <h2 className="reviews-section-title">Best of Houzz</h2>
          <p className="reviews-awards-desc">{reviewsContent.houzzAwardIntro}</p>
          <div className="reviews-awards-badges">
            {houzzBadges.map((badge) => (
              <img
                key={`${badge.year}-${badge.category}`}
                src={badge.src}
                alt={badge.alt}
                loading="lazy"
              />
            ))}
          </div>
          <div className="reviews-awards-years">
            {houzzAwards.map((year) => (
              <span key={year}>{year}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="reviews-affiliations"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="reviews-section-title">Affiliations & Events</h2>
          <div className="reviews-affiliations-logos">
            {affiliationLogos.map((logo) => (
              <a
                key={logo.name}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="reviews-affiliation-item"
                title={logo.name}
              >
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="reviews-news-link"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <Link to="/news" className="reviews-news-link-btn">
            View latest news →
          </Link>
        </motion.div>
      </section>
    </PageLayout>
  );
}
