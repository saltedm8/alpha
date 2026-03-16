import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import PageLayout from '../components/PageLayout';
import OptimizedImage from '../components/OptimizedImage';
import { FloorPlan } from '../components/ArchDrawings';
import { aboutContent, team, specialistAreas, pageHeroImages } from '../data/siteData';
import './AboutPage.css';

const glideUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
};

const useGlide = (ref, amount = 0.1) => {
  const inView = useInView(ref, { amount, once: true });
  return { variants: glideUp, initial: 'initial', animate: inView ? 'animate' : 'initial' };
};

export default function AboutPage() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const glide1 = useGlide(ref1);
  const glide2 = useGlide(ref2);
  const glide3 = useGlide(ref3);

  return (
    <PageLayout
      heroImage={pageHeroImages.about}
      heroTitle="About"
      heroSubtitle="RIBA Chartered architecture practice with offices in Essex and London."
      teaserLabel="Meet our team"
    >
      {/* Intro: two-column layout with image */}
      <section className="flow-section flow-situation about-intro" ref={ref1}>
        <motion.div className="flow-section-drawing flow-drawing-left flow-drawing-lg" initial={{ opacity: 0, x: -30 }} animate={glide1.animate === 'animate' ? { opacity: 0.18, x: 0 } : { opacity: 0, x: -30 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
          <div className="flow-drawing-inner"><FloorPlan /></div>
        </motion.div>
        <div className="about-intro-wrap">
          <motion.div className="about-intro-text" {...glide1}>
            <p>
              We are Alpha Architects Ltd, a{' '}
              <a href={aboutContent.ribaLink} target="_blank" rel="noopener noreferrer">RIBA</a> Chartered
              {' '}architecture practice (office no: 3130190) with extensive experience in residential design, interior design, developments, commercial and community projects. Established in 2017, we provide architectural design services and advice from our head office in Buckhurst Hill, Essex and our office in Docklands, London.
            </p>
            <p>{aboutContent.para2}</p>
            <p>{aboutContent.para3}</p>
            <Link to="/contact" className="flow-link">Arrange a free consultation →</Link>
          </motion.div>
          <motion.div className="about-intro-image" {...glide1} transition={{ ...glideUp.transition, delay: 0.2 }}>
            <img src={pageHeroImages.projects} alt="Alpha Architects project" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* Team: cards with headshots */}
      <section className="flow-section about-team" ref={ref2}>
        <motion.h2 className="flow-specialists-head about-team-head" {...glide2}>Meet Our Team</motion.h2>
        <div className="about-team-grid">
          {team.map((member, i) => (
            <motion.article
              key={member.name}
              className="about-team-card"
              {...glide2}
              transition={{ ...glideUp.transition, delay: 0.05 + i * 0.05 }}
            >
              {member.image && (
                <div className="about-team-card-image">
                  <OptimizedImage src={member.image} alt={member.name} loading="lazy" ratio="3/4" />
                  <div className="about-team-card-overlay" aria-hidden="true" />
                </div>
              )}
              <div className="about-team-card-body">
                <h3>{member.name}</h3>
                {member.title && <span className="team-title">{member.title}</span>}
                <p>{member.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Our work - specialist areas */}
      <section className="flow-section flow-awards about-work" ref={ref3}>
        <motion.p className="flow-label" {...glide3}>Our work</motion.p>
        <motion.div className="about-imagery-grid" {...glide3} transition={{ ...glideUp.transition, delay: 0.1 }}>
          {specialistAreas.map((area) => (
            <Link key={area.title} to={area.path} className="about-imagery-item">
              <OptimizedImage src={area.image} alt={area.title} loading="lazy" />
              <span className="about-imagery-label">{area.title}</span>
            </Link>
          ))}
        </motion.div>
      </section>
    </PageLayout>
  );
}
