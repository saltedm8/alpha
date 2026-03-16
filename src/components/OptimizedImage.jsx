import { useState } from 'react';
import './OptimizedImage.css';

/**
 * Image with loading placeholder - shows a subtle skeleton until loaded,
 * then fades in. Reduces perceived load time.
 */
export default function OptimizedImage({
  src,
  alt = '',
  loading = 'lazy',
  fetchPriority,
  ratio = '4/3',
  className = '',
  ...props
}) {
  const [loaded, setLoaded] = useState(false);
  const ratioClass = ratio ? `ratio-${ratio.replace('/', '-')}` : '';

  return (
    <span className={`optimized-img-wrap ${ratioClass} ${loaded ? 'loaded' : ''} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </span>
  );
}
