import Head from 'next/head';
import { useState, useEffect } from 'react';

const categories = [
  { id: 'all', label: 'All Photos' },
  { id: 'outreach', label: 'Community Outreach' },
  { id: 'training', label: 'Training & Advocacy' },
  { id: 'activities', label: 'Activities' },
  { id: 'kwara', label: 'Kwara State' },
  { id: 'international', label: 'International Events' },
];

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    fetch('/api/photos')
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data.photos || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = activeCategory === 'all'
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  return (
    <>
      <Head>
        <title>Gallery — SOWCHAN</title>
        <meta name="description" content="Photo gallery of SOWCHAN programs, events, outreach and community impact across Nigeria." />
      </Head>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2d1a00 100%)' }} className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #F5C200, transparent)', transform: 'translate(30%, -30%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <div style={{ width: '30px', height: '2px', backgroundColor: '#F5C200' }}></div>
            <span style={{ color: '#F5C200' }} className="text-sm font-semibold uppercase tracking-widest">Photo Gallery</span>
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', color: 'white' }} className="text-5xl md:text-6xl font-black">
            Our Work in <span style={{ color: '#F5C200' }}>Pictures</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-xl text-lg">
            From community outreach to international advocacy — a glimpse into SOWCHAN's impact across Nigeria and beyond.
          </p>
          {!loading && (
            <p style={{ color: '#F5C200' }} className="mt-2 text-sm font-semibold">{photos.length} Photos</p>
          )}
        </div>
      </section>

      {/* FILTER TABS */}
      <section style={{ backgroundColor: '#1A1A1A' }} className="py-4 sticky top-16 z-40 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                className="px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all"
                style={{
                  backgroundColor: activeCategory === cat.id ? '#F5C200' : 'transparent',
                  color: activeCategory === cat.id ? '#1A1A1A' : '#888',
                  border: `1px solid ${activeCategory === cat.id ? '#F5C200' : '#444'}`,
                }}>
                {cat.label}
                <span className="ml-1 opacity-60">
                  ({cat.id === 'all' ? photos.length : photos.filter(p => p.category === cat.id).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GRID */}
      <section style={{ backgroundColor: '#f5f0e8' }} className="py-12 min-h-96">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Loading state */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="text-5xl mb-4">📷</div>
                <p style={{ color: '#1A1A1A' }} className="font-semibold">Loading photos...</p>
              </div>
            </div>
          )}

          {/* Empty state */}
          {!loading && filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">No photos in this category yet.</p>
            </div>
          )}

          {/* Grid */}
          {!loading && filtered.length > 0 && (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
              {filtered.map((photo, i) => (
                <div key={i} className="break-inside-avoid cursor-pointer group relative overflow-hidden mb-4"
                  onClick={() => setLightbox(photo)}>
                  <img
                    src={photo.src}
                    alt={photo.caption || 'SOWCHAN activity'}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ display: 'block' }}
                    onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                  />
                  {photo.caption && (
                    <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }}>
                      <p className="text-white text-xs p-4 leading-relaxed">{photo.caption}</p>
                    </div>
                  )}
                  <div className="absolute top-0 left-0 w-0 h-0 group-hover:w-8 group-hover:h-8 transition-all duration-300"
                    style={{ backgroundColor: '#F5C200' }} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
          onClick={() => setLightbox(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-yellow-400 transition-colors">✕</button>
            <img src={lightbox.src} alt={lightbox.caption || 'SOWCHAN'} className="w-full object-contain" style={{ maxHeight: '75vh' }} />
            {lightbox.caption && (
              <div style={{ backgroundColor: '#1A1A1A' }} className="p-4">
                <p className="text-gray-300 text-sm leading-relaxed">{lightbox.caption}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CTA */}
      <section style={{ backgroundColor: '#1A1A1A' }} className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: 'Playfair Display, serif', color: 'white' }} className="text-3xl font-bold mb-4">Want to Share Your Story?</h2>
          <p className="text-gray-400 mb-6">If you have photos from SOWCHAN events you'd like to share, contact us.</p>
          <a href="/contact" style={{ backgroundColor: '#F5C200', color: '#1A1A1A' }}
            className="inline-block font-bold uppercase tracking-wider px-8 py-4 text-sm hover:opacity-90 transition-opacity">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}