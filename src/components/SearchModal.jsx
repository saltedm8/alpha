import { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projectCategories, servicesContent, newsItems } from '../data/siteData';
import './SearchModal.css';

const allProjects = [
  ...projectCategories.residential.map((p) => ({ ...p, category: 'Residential' })),
  ...projectCategories.commercial.map((p) => ({ ...p, category: 'Commercial' })),
  ...projectCategories.development.map((p) => ({ ...p, category: 'Development' })),
  ...projectCategories.community.map((p) => ({ ...p, category: 'Community' })),
];

const allServices = Object.entries(servicesContent).map(([key, s]) => ({
  key,
  title: s.title,
  short: s.short,
  path: `/services/${key}`,
}));

function searchItems(query) {
  const q = query.toLowerCase().trim();
  if (!q) return { projects: [], services: [], news: [] };

  const projects = allProjects.filter(
    (p) => p.name.toLowerCase().includes(q) || (p.slug && p.slug.toLowerCase().includes(q))
  );
  const services = allServices.filter(
    (s) =>
      s.title?.toLowerCase().includes(q) ||
      s.short?.toLowerCase().includes(q) ||
      s.key?.toLowerCase().includes(q)
  );
  const news = newsItems.filter(
    (n) =>
      n.title?.toLowerCase().includes(q) ||
      n.excerpt?.toLowerCase().includes(q) ||
      n.slug?.toLowerCase().includes(q)
  );

  return { projects, services, news };
}

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({ projects: [], services: [], news: [] });
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  const runSearch = useCallback(() => {
    setResults(searchItems(query));
    setSelected(0);
  }, [query]);

  useEffect(() => {
    const t = setTimeout(runSearch, 150);
    return () => clearTimeout(t);
  }, [runSearch]);

  const allResults = [
    ...results.projects.map((p) => ({ type: 'project', path: `/project/${p.slug}`, label: p.name, subtitle: p.category })),
    ...results.services.map((s) => ({ type: 'service', path: s.path, label: s.title, subtitle: 'Service' })),
    ...results.news.map((n) => ({ type: 'news', path: `/news/${n.slug}`, label: n.title, subtitle: 'News' })),
  ];

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, allResults.length - 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    }
    if (e.key === 'Enter' && allResults[selected]) {
      e.preventDefault();
      navigate(allResults[selected].path);
      onClose();
    }
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="search-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="search-modal"
          initial={{ opacity: 0, scale: 0.96, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -20 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="search-input-wrap">
            <span className="search-icon" aria-hidden>⌘</span>
            <input
              type="search"
              autoFocus
              placeholder="Search projects, services, news..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Search"
              className="search-input"
            />
            <button type="button" className="search-close" onClick={onClose} aria-label="Close">×</button>
          </div>
          <div className="search-results">
            {query && allResults.length === 0 && (
              <p className="search-empty">No results for "{query}"</p>
            )}
            {query && allResults.length > 0 && (
              <ul className="search-list" role="listbox">
                {allResults.slice(0, 12).map((item, i) => (
                  <li key={`${item.type}-${item.path}-${i}`} role="option" aria-selected={i === selected}>
                    <Link
                      to={item.path}
                      className={`search-item ${i === selected ? 'selected' : ''}`}
                      onMouseEnter={() => setSelected(i)}
                      onClick={onClose}
                    >
                      <span className="search-item-label">{item.label}</span>
                      <span className="search-item-type">{item.subtitle}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {!query && (
              <p className="search-hint">Type to search projects, services and news</p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
