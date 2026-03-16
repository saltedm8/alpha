import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { heroImage, heroContent, specialistAreas, featuredProjects, houzzAwards } from '../data/siteData';
import { FloorPlan, WireframeBuilding, StructuralGrid, IsometricView } from '../components/ArchDrawings';
import './HomePage.css';

function smoothScroll(el, amount, duration = 600) {
  if (!el) return;
  const start = el.scrollLeft;
  const startTime = performance.now();
  const easeOutCubic = (t) => 1 - (1 - t) ** 3;

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);
    el.scrollLeft = start + amount * eased;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const ArrowDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </svg>
);

const glideUp = {
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
};

const useGlide = (ref, amount = 0.1) => {
  const inView = useInView(ref, { amount, once: true });
  return { variants: glideUp, initial: 'initial', animate: inView ? 'animate' : 'initial' };
};

export default function HomePage() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const portfolioScrollRef = useRef(null);
  const glide1 = useGlide(ref1);
  const glide2 = useGlide(ref2);
  const glide3 = useGlide(ref3);
  const glide4 = useGlide(ref4);
  const glide5 = useGlide(ref5);

  return (
    <main id="main-content" className="home glide" role="main" tabIndex={-1}>
      {/* Abstract gradient shapes - Kayo-style visual flow */}
      <div className="flow-shapes" aria-hidden="true">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      {/* Architectural guide - outer margin lines */}
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

      {/* Architectural guide - inner content frame (left/right of content) */}
      <div className="arch-inner-guide" aria-hidden="true">
        <div className="arch-inner-line arch-inner-left" />
        <div className="arch-inner-line arch-inner-right" />
      </div>

      {/* Hero - headline trails off, pulls you down */}
      <section className="flow-hero">
        <div className="flow-hero-bg">
          <img src={heroImage} alt="" aria-hidden="true" fetchPriority="high" decoding="async" />
          <div className="flow-hero-overlay" />
        </div>
        <div className="flow-hero-content">
          <motion.p className="flow-label" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
            Alpha Architects
          </motion.p>
          <motion.h1
            className="flow-hero-h1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {heroContent.title}
          </motion.h1>
          <motion.p
            className="flow-intro"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            RIBA Chartered architecture practice with offices in Essex and London.
          </motion.p>
          <motion.div
            className="flow-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/contact" className="btn btn-outline">Get in touch</Link>
          </motion.div>
        </div>
        {/* Teaser - peek of next section with directional hint */}
        <div className="flow-hero-teaser">
          <div className="flow-scroll-hint">
            <ArrowDown />
            <span>Scroll to continue</span>
          </div>
          <div className="teaser-content">
            <span className="teaser-label">Situation</span>
            <span className="teaser-text">{heroContent.description.slice(0, 50)}...</span>
            <span className="teaser-arrow">→</span>
          </div>
        </div>
      </section>

      {/* Situation - text RIGHT aligned */}
      <section className="flow-section flow-situation" ref={ref1}>
        <motion.div className="flow-section-drawing flow-drawing-left flow-drawing-lg" initial={{ opacity: 0, x: -30 }} animate={glide1.animate === 'animate' ? { opacity: 0.18, x: 0 } : { opacity: 0, x: -30 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
          <div className="flow-drawing-inner"><FloorPlan /></div>
        </motion.div>
        <div className="flow-wrap flow-text-right">
          <motion.h2 className="flow-head" {...glide1}>
            Situation
          </motion.h2>
          <motion.div className="flow-text" {...glide1} transition={{ ...glideUp.transition, delay: 0.15 }}>
            <p>{heroContent.situationShort}</p>
            <Link to="/contact" className="flow-link">Get in touch →</Link>
          </motion.div>
        </div>
        <div className="flow-section-teaser flow-teaser-with-arrow">
          <ArrowDown />
          <span>Solution</span>
        </div>
      </section>

      {/* Solution - text LEFT, image RIGHT, image overlaps into next */}
      <section className="flow-section flow-image-offset" ref={ref2}>
        <motion.div className="flow-section-drawing flow-drawing-left flow-drawing-xl" initial={{ opacity: 0, x: -40 }} animate={glide2.animate === 'animate' ? { opacity: 0.18, x: 0 } : { opacity: 0, x: -40 }} transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
          <div className="flow-drawing-inner"><WireframeBuilding /></div>
        </motion.div>
        <motion.div className="flow-wrap flow-text-left" {...glide2} transition={{ ...glideUp.transition, delay: 0.1 }}>
          <h2 className="flow-head flow-head-large">Solution</h2>
          <p>{heroContent.description2}</p>
          <p>{heroContent.cta}</p>
          <Link to="/contact" className="flow-link">Book a free consultation →</Link>
        </motion.div>
        <motion.div className="flow-img-wrap flow-img-bleed" {...glide2} transition={{ ...glideUp.transition, delay: 0.25 }}>
          <OptimizedImage src={specialistAreas[0].image} alt="Residential" loading="lazy" />
        </motion.div>
        <div className="flow-section-teaser flow-teaser-center flow-teaser-with-arrow">
          <ArrowDown />
          <span>Browse projects</span>
        </div>
      </section>

      {/* Specialists */}
      <section className="flow-section flow-type-block" ref={ref3}>
        <motion.div className="flow-section-drawing flow-drawing-right flow-drawing-xl" initial={{ opacity: 0, x: 40 }} animate={glide3.animate === 'animate' ? { opacity: 0.28, x: 0 } : { opacity: 0, x: 40 }} transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
          <div className="flow-drawing-inner"><StructuralGrid /></div>
        </motion.div>
        <motion.h2 className="flow-specialists-head" {...glide3}>
          Browse projects by category
        </motion.h2>
        <div className="flow-specialists">
          {specialistAreas.map((area, i) => (
            <motion.div
              key={area.title}
              {...glide3}
              transition={{ ...glideUp.transition, delay: 0.1 + i * 0.08 }}
            >
              <Link to={area.path} className="flow-spec-tile">
                <OptimizedImage src={area.image} alt={area.title} loading="lazy" />
                <div className="flow-spec-caption">
                  <span>{area.title}</span>
                  <span className="flow-spec-more">Click to view projects →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="flow-section-teaser flow-teaser-right flow-teaser-with-arrow">
          <ArrowRight />
          <span>Featured Projects</span>
        </div>
      </section>

      {/* Projects - horizontal scroll, offside track bleeds right */}
      <section className="flow-section flow-projects" ref={ref4}>
        <motion.div className="flow-projects-header" {...glide4}>
          <p className="flow-projects-hint">Thinking about a new project?</p>
          <h2 className="flow-head flow-head-bold">Featured Projects</h2>
          <p className="flow-lead flow-lead-center">Our portfolio from residential extensions to commercial interiors.</p>
          <div className="flow-projects-nav">
            <button type="button" className="flow-scroll-btn flow-scroll-prev" aria-label="Scroll previous" onClick={() => smoothScroll(portfolioScrollRef.current, -360)}>
              <ArrowRight />
            </button>
            <button type="button" className="flow-scroll-btn flow-scroll-next" aria-label="Scroll next" onClick={() => smoothScroll(portfolioScrollRef.current, 360)}>
              <ArrowRight />
            </button>
          </div>
        </motion.div>
        <div className="flow-projects-scroll-wrap" ref={portfolioScrollRef}>
          <div className="flow-projects-track">
            {featuredProjects.map((project, i) => (
              project.slug ? (
                <motion.div key={`${project.name}-${i}`} {...glide4} transition={{ ...glideUp.transition, delay: 0.02 + i * 0.04 }}>
                  <Link to={`/project/${project.slug}`} className="flow-proj-card">
                    <OptimizedImage src={project.image} alt={project.name} loading="lazy" ratio="4/5" />
                    <span className="flow-proj-card-label">{project.name}</span>
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={`${project.name}-${i}`}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flow-proj-card"
                  {...glide4}
                  transition={{ ...glideUp.transition, delay: 0.02 + i * 0.04 }}
                >
                  <OptimizedImage src={project.image} alt={project.name} loading="lazy" ratio="4/5" />
                  <span className="flow-proj-card-label">{project.name}</span>
                </motion.a>
              )
            ))}
          </div>
        </div>
        <motion.div className="flow-projects-cta" {...glide4} transition={{ ...glideUp.transition, delay: 0.5 }}>
          <Link to="/projects" className="flow-link flow-link-arrow">
            View all projects
            <ArrowRight />
          </Link>
        </motion.div>
        <div className="flow-section-teaser flow-teaser-with-arrow">
          <ArrowDown />
          <span>Outcome</span>
        </div>
      </section>

      {/* Outcome - text RIGHT, image LEFT overlapping */}
      <section className="flow-section flow-outcome" ref={ref5}>
        <motion.div className="flow-section-drawing flow-drawing-right flow-drawing-lg" initial={{ opacity: 0, x: 40 }} animate={glide5.animate === 'animate' ? { opacity: 0.18, x: 0 } : { opacity: 0, x: 40 }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
          <div className="flow-drawing-inner"><IsometricView /></div>
        </motion.div>
        <motion.div className="flow-img-wrap flow-img-outcome" {...glide5}>
          <OptimizedImage src={specialistAreas[2].image} alt="Development" loading="lazy" />
        </motion.div>
        <motion.div className="flow-wrap flow-text-right flow-outcome-text" {...glide5} transition={{ ...glideUp.transition, delay: 0.2 }}>
          <h2 className="flow-head">Outcome</h2>
          <p>We bring experience, creativity, and practicality to all projects. Established in 2017 with offices in Essex and London.</p>
          <Link to="/contact" className="flow-link">Contact us to learn how we can help you --</Link>
        </motion.div>
      </section>

      <section className="flow-section flow-awards">
        <p className="flow-label">Best of Houzz Service</p>
        <div className="flow-awards-list">
          {houzzAwards.map((year) => (
            <span key={year}>{year}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
