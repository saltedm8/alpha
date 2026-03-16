import { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import { FloorPlan } from '../components/ArchDrawings';
import { siteConfig, contactContent, pageHeroImages, faqItems } from '../data/siteData';
import './ContactPage.css';

const mapsUrl = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const glideUp = { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } };

const OFFICES = [
  { id: 'essex', label: 'Essex', ...contactContent.essex, address: siteConfig.addressEssex, phone: siteConfig.phoneEssex },
  { id: 'london', label: 'London', ...contactContent.london, address: siteConfig.addressLondon, phone: siteConfig.phoneLondon },
];

export default function ContactPage() {
  const [activeOffice, setActiveOffice] = useState('essex');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    projectLocation: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${siteConfig.email}?subject=Contact from Alpha Architects Website&body=${encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProject Type: ${formData.projectType}\nProject Location: ${formData.projectLocation}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailto;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <PageLayout
      heroImage={pageHeroImages.contact}
      heroTitle="Contact Us"
      heroSubtitle="Book a free initial architectural consultation."
      teaserLabel="Get in touch"
    >
      <section className="flow-section flow-image-offset flow-contact">
        <motion.div className="flow-section-drawing flow-drawing-left flow-drawing-lg" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 0.18, x: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
          <div className="flow-drawing-inner"><FloorPlan /></div>
        </motion.div>
        <div className="flow-contact-grid">
          <motion.form className="flow-contact-form" onSubmit={handleSubmit} {...glideUp}>
            <div className="form-row">
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            </div>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
            <select name="projectType" value={formData.projectType} onChange={handleChange}>
              <option value="">Project Type - Choose One</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Community">Community</option>
              <option value="Development">Development</option>
              <option value="Other">Other</option>
            </select>
            <input type="text" name="projectLocation" placeholder="Project Location" value={formData.projectLocation} onChange={handleChange} />
            <textarea name="message" placeholder="Message" rows={5} value={formData.message} onChange={handleChange} required />
            <button type="submit" className="btn btn-primary">Submit</button>
          </motion.form>

          <motion.div className="flow-contact-info" {...glideUp}>
            <div className="flow-office-tabs">
              <div className="flow-office-tab-list" role="tablist">
                {OFFICES.map((office) => (
                  <button
                    key={office.id}
                    type="button"
                    role="tab"
                    aria-selected={activeOffice === office.id}
                    aria-controls={`office-panel-${office.id}`}
                    id={`office-tab-${office.id}`}
                    className={`flow-office-tab ${activeOffice === office.id ? 'active' : ''}`}
                    onClick={() => setActiveOffice(office.id)}
                  >
                    {office.label}
                  </button>
                ))}
              </div>
              {(() => {
                const office = OFFICES.find((o) => o.id === activeOffice);
                if (!office) return null;
                return (
                  <div
                    key={activeOffice}
                    id={`office-panel-${activeOffice}`}
                    role="tabpanel"
                    aria-labelledby={`office-tab-${activeOffice}`}
                    className="flow-office-card"
                  >
                    <h3>{office.title}</h3>
                    <p className="address">{office.address}</p>
                    <div className="flow-office-actions">
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`}>{office.phone}</a>
                      <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                      <a href={mapsUrl(office.mapsQuery)} target="_blank" rel="noopener noreferrer" className="flow-map-link">Get directions →</a>
                    </div>
                    <details className="flow-office-details">
                      <summary>Transport &amp; parking</summary>
                      <p><strong>Tube:</strong> {office.tube}</p>
                      <p><strong>Parking:</strong> {office.parking}</p>
                    </details>
                  </div>
                );
              })()}
            </div>
            <div className="flow-contact-social">
              <h4>Follow us</h4>
              <div className="flow-contact-social-links">
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  Instagram
                </a>
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Facebook
                </a>
                <a href={siteConfig.social.houzz} target="_blank" rel="noopener noreferrer" aria-label="Houzz">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L2 12h3v9h6v-6h2v6h6v-9h3L12 3z"/></svg>
                  Houzz
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.section className="flow-faq" {...glideUp}>
          <details className="flow-faq-details">
            <summary className="flow-faq-summary">Frequently asked questions</summary>
            <div className="flow-faq-list">
            {faqItems.map((item, i) => (
              <details key={i} className="flow-faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
            </div>
          </details>
        </motion.section>
      </section>
    </PageLayout>
  );
}
