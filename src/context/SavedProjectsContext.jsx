import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'alpha-saved-projects';

const SavedProjectsContext = createContext(null);

export function SavedProjectsProvider({ children }) {
  const [saved, setSaved] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  }, [saved]);

  const toggle = useCallback((slug) => {
    setSaved((prev) => {
      const has = prev.includes(slug);
      return has ? prev.filter((s) => s !== slug) : [...prev, slug];
    });
  }, []);

  const isSaved = useCallback((slug) => saved.includes(slug), [saved]);

  return (
    <SavedProjectsContext.Provider value={{ saved, toggle, isSaved }}>
      {children}
    </SavedProjectsContext.Provider>
  );
}

export function useSavedProjects() {
  const ctx = useContext(SavedProjectsContext);
  if (!ctx) throw new Error('useSavedProjects must be used within SavedProjectsProvider');
  return ctx;
}
