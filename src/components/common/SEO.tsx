import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: Record<string, any>;
}

export function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://hotelvasudhaheritage.com/og-image.jpg',
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    // Document Title
    document.title = title;

    // Helper to update or create meta tags
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);

    // Canonical link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // Open Graph
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:image', ogImage, true);
    if (canonical) setMeta('og:url', canonical, true);

    // Twitter
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    // JSON-LD Structured Data
    let scriptTag: HTMLScriptElement | null = null;
    if (jsonLd) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.id = 'page-specific-jsonld';
      scriptTag.text = JSON.stringify(jsonLd);
      document.head.appendChild(scriptTag);
    }

    return () => {
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [title, description, keywords, canonical, ogImage, jsonLd]);

  return null;
}
