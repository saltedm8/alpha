import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig, navLinks } from '../data/siteData';
import './Header.css';

export default function Header({ onSearchClick }) {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="header" role="banner">
      <div className="header-inner">
        <Link to="/" className="logo-link" aria-label="Alpha Architects Ltd - Home">
          <img src={siteConfig.logo} alt="Alpha Architects Ltd" className="header-logo" />
        </Link>

        <nav className="nav-desktop" aria-label="Main navigation">
          {navLinks.map((item) =>
            item.children ? (
              <div
                key={item.path}
                className="nav-item"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link to={item.path} className="nav-link">
                  {item.label}
                </Link>
                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      className="dropdown-menu"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                    >
                      {item.children.map((child) =>
                        child.path.startsWith('http') ? (
                          <a key={child.path} href={child.path} target="_blank" rel="noopener noreferrer">
                            {child.label}
                          </a>
                        ) : (
                          <Link key={child.path} to={child.path}>
                            {child.label}
                          </Link>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
                <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="header-right">
          <Link to="/saved" className="header-saved-link" aria-label="Saved projects">Saved</Link>
          <button type="button" className="header-search-btn" onClick={onSearchClick} aria-label="Search (Ctrl+K)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </button>
          <a href={`tel:${siteConfig.phoneEssex.replace(/\s/g, '')}`} className="header-phone" aria-label="Call Essex office">
            {siteConfig.phoneEssex}
          </a>
          <Link to="/contact" className="header-contact-link" aria-current={location.pathname === '/contact' ? 'page' : undefined}>
            Contact
          </Link>
        </div>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? 'Close' : 'Open menu'}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="menu-panel"
              aria-label="Mobile menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="menu-panel-inner">
                <div className="menu-item">
                  <Link to="/saved" className={location.pathname === '/saved' ? 'active' : ''}>
                    Saved projects
                  </Link>
                </div>
                {onSearchClick && (
                  <button type="button" className="menu-search-btn" onClick={() => { onSearchClick(); setOpen(false); }}>
                    Search projects &amp; services
                  </button>
                )}
                {navLinks.map((item) => (
                  <div key={item.path} className="menu-item">
                    <Link to={item.path} className={location.pathname === item.path ? 'active' : ''}>
                      {item.label}
                    </Link>
                    {item.children?.map((child) =>
                      child.path.startsWith('http') ? (
                        <a key={child.path} href={child.path} target="_blank" rel="noopener noreferrer" className="sub">
                          {child.label}
                        </a>
                      ) : (
                        <Link key={child.path} to={child.path} className="sub">
                          {child.label}
                        </Link>
                      )
                    )}
                  </div>
                ))}
                <div className="menu-footer">
                  <a href={`tel:${siteConfig.phoneEssex.replace(/\s/g, '')}`}>{siteConfig.phoneEssex}</a>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  <div className="menu-social">
                    <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
                    <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
                    <a href={siteConfig.social.houzz} target="_blank" rel="noopener noreferrer" aria-label="Houzz">Houzz</a>
                  </div>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
