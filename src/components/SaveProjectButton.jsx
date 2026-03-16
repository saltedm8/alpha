import { useSavedProjects } from '../context/SavedProjectsContext';

export default function SaveProjectButton({ slug, className = '' }) {
  const { toggle, isSaved } = useSavedProjects();
  const saved = isSaved(slug);

  return (
    <button
      type="button"
      className={`save-project-btn ${saved ? 'saved' : ''} ${className}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(slug);
      }}
      aria-label={saved ? 'Remove from saved projects' : 'Save project'}
      title={saved ? 'Remove from saved' : 'Save project'}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}
