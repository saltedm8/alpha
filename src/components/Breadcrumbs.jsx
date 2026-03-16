import { Link, useParams, useLocation } from 'react-router-dom';
import { projectDetails, newsItems } from '../data/siteData';

const ROUTE_LABELS = {
  '/': 'Home',
  '/about': 'About',
  '/services': 'Services',
  '/projects': 'Projects',
  '/reviews': 'Reviews',
  '/news': 'News',
  '/contact': 'Contact',
};

const SERVICE_SLUGS = { residential: 'Residential', interiors: 'Interiors', developments: 'Developments', community: 'Community' };
const PROJECT_SLUGS = { residential: 'Residential', interiors: 'Commercial / Interiors', developments: 'Developments', community: 'Community' };

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const { slug } = useParams();

  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  const crumbs = [{ label: 'Home', path: '/' }];

  if (segments.length === 0) return null;

  const first = segments[0];
  if (first === 'about') {
    crumbs.push({ label: 'About', path: null });
  } else if (first === 'services') {
    crumbs.push({ label: 'Services', path: '/services' });
    if (segments[1]) {
      const label = SERVICE_SLUGS[segments[1]] || segments[1];
      crumbs.push({ label, path: null });
    }
  } else if (first === 'projects') {
    crumbs.push({ label: 'Projects', path: '/projects' });
    if (segments[1] && !['residential', 'interiors', 'developments', 'community'].includes(segments[1])) {
      crumbs.push({ label: segments[1], path: null });
    } else if (segments[1]) {
      crumbs.push({ label: PROJECT_SLUGS[segments[1]] || segments[1], path: null });
    }
  } else if (first === 'reviews') {
    crumbs.push({ label: 'Reviews', path: null });
  } else if (first === 'news') {
    crumbs.push({ label: 'News', path: '/news' });
    if (slug) {
      const item = newsItems.find((n) => n.slug === slug);
      crumbs.push({ label: item?.title || slug, path: null });
    }
  } else if (first === 'contact') {
    crumbs.push({ label: 'Contact', path: null });
  } else if (first === 'project' && slug) {
    crumbs.push({ label: 'Projects', path: '/projects' });
    const proj = projectDetails[slug];
    crumbs.push({ label: proj?.name || slug, path: null });
  } else if (first === 'saved') {
    crumbs.push({ label: 'Saved Projects', path: null });
  } else {
    const label = ROUTE_LABELS[`/${first}`] || first;
    crumbs.push({ label, path: pathname });
  }

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol className="breadcrumbs-list">
        {crumbs.map((crumb, i) => (
          <li key={i} className="breadcrumbs-item">
            {i > 0 && <span className="breadcrumbs-sep" aria-hidden="true">/</span>}
            {crumb.path ? (
              <Link to={crumb.path} className="breadcrumbs-link">{crumb.label}</Link>
            ) : (
              <span className="breadcrumbs-current" aria-current="page">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
