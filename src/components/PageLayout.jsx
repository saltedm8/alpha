import Breadcrumbs from './Breadcrumbs';
import './PageLayout.css';

const ArrowDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </svg>
);

export default function PageLayout({ children, heroImage, heroTitle, heroSubtitle, showTeaser = true, teaserLabel }) {
  return (
    <main id="main-content" className="page-layout glide" role="main" tabIndex={-1}>
      <div className="flow-shapes" aria-hidden="true">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      <div className="arch-guide" aria-hidden="true">
        <div className="arch-guide-line" />
        <div className="arch-guide-markers">
          <span className="arch-marker" data-section="01">01</span>
          <span className="arch-marker" data-section="02">02</span>
          <span className="arch-marker" data-section="03">03</span>
          <span className="arch-marker" data-section="04">04</span>
          <span className="arch-marker" data-section="05">05</span>
          <span className="arch-marker" data-section="06">06</span>
          <span className="arch-marker" data-section="07">07</span>
        </div>
      </div>

      <div className="arch-inner-guide" aria-hidden="true">
        <div className="arch-inner-line arch-inner-left" />
        <div className="arch-inner-line arch-inner-right" />
      </div>

      {heroImage && heroTitle && (
        <section className="page-hero flow-page-hero">
          <div className="flow-hero-bg">
            <img src={heroImage} alt="" aria-hidden="true" fetchPriority="high" decoding="async" />
            <div className="flow-hero-overlay" />
          </div>
          <div className="flow-hero-content">
            <h1 className="flow-hero-h1">{heroTitle}</h1>
            {heroSubtitle && <p className="flow-intro">{heroSubtitle}</p>}
          </div>
          {showTeaser && teaserLabel && (
            <div className="flow-hero-teaser">
              <div className="flow-scroll-hint">
                <ArrowDown />
                <span>Scroll to continue</span>
              </div>
              <div className="teaser-content">
                <span className="teaser-label">{teaserLabel}</span>
              </div>
            </div>
          )}
        </section>
      )}

      <div className="flow-page-content">
        <div className="flow-page-breadcrumbs">
          <Breadcrumbs />
        </div>
        {children}
      </div>
    </main>
  );
}
