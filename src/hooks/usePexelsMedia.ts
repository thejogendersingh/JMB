import { useState, useEffect } from 'react';

// You can add your Pexels API key in a .env file as VITE_PEXELS_API_KEY
const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

export interface PexelsMedia {
  id: string;
  type: 'image' | 'video';
  url: string;
  alt: string;
}

// Premium fallback images (Jaisalmer / Desert / Heritage) in case API key is missing
const fallbackImages: PexelsMedia[] = [
  { id: '1', type: 'image', url: 'https://images.unsplash.com/photo-1599661559814-640a32247fb5?q=80&w=2574&auto=format&fit=crop', alt: 'Jaisalmer Fort' },
  { id: '2', type: 'image', url: 'https://images.unsplash.com/photo-1582613524278-dfb2344799dd?q=80&w=2670&auto=format&fit=crop', alt: 'Heritage Architecture' },
  { id: '3', type: 'image', url: 'https://images.unsplash.com/photo-1542640244-7e672d6cb466?q=80&w=2670&auto=format&fit=crop', alt: 'Desert Safari' },
  { id: '4', type: 'image', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop', alt: 'Dining' },
  { id: '5', type: 'image', url: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=2670&auto=format&fit=crop', alt: 'Heritage Walk' },
  { id: '6', type: 'image', url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2670&auto=format&fit=crop', alt: 'Heritage Room' },
  { id: '7', type: 'image', url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2574&auto=format&fit=crop', alt: 'Royal Suite' },
  { id: '8', type: 'image', url: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2670&auto=format&fit=crop', alt: 'Restaurant' },
  { id: '9', type: 'image', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670&auto=format&fit=crop', alt: 'Wellness' },
];

export function usePexelsMedia(query: string, count: number = 1, type: 'image' | 'video' = 'image') {
  const [media, setMedia] = useState<PexelsMedia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!API_KEY) {
      // Fallback to static premium images if no Pexels API key is provided
      // In a real scenario, these would be the hotel's actual assets
      const shuffled = [...fallbackImages].sort(() => 0.5 - Math.random());
      setMedia(shuffled.slice(0, count));
      setLoading(false);
      return;
    }

    const endpoint = type === 'video' 
      ? `https://api.pexels.com/videos/search?query=${query}&per_page=${count}`
      : `https://api.pexels.com/v1/search?query=${query}&per_page=${count}`;

    fetch(endpoint, {
      headers: { Authorization: API_KEY }
    })
    .then(res => res.json())
    .then(data => {
      if (type === 'image' && data.photos) {
        setMedia(data.photos.map((p: any) => ({
          id: String(p.id),
          type: 'image',
          url: p.src.large2x,
          alt: p.alt || query
        })));
      } else if (type === 'video' && data.videos) {
        setMedia(data.videos.map((v: any) => {
          const hdVideo = v.video_files.find((file: any) => file.quality === 'hd') || v.video_files[0];
          return {
            id: String(v.id),
            type: 'video',
            url: hdVideo.link,
            alt: query
          };
        }));
      }
      setLoading(false);
    })
    .catch((err) => {
      console.error("Pexels API Error:", err);
      // Fallback on error
      setMedia(fallbackImages.slice(0, count));
      setLoading(false);
    });

  }, [query, count, type]);

  return { media, loading };
}
