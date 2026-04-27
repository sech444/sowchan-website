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

      {/* HOW TO ADD CAPTIONS — instructions banner */}
      <section style={{ backgroundColor: '#fff8dc', borderBottom: '2px solid #F5C200' }} className="py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-700 text-center">
            💡 <strong>To add captions & categories:</strong> Go to Cloudinary → click a photo → <strong>Edit</strong> → add <code>caption</code> in the <strong>Structured Metadata</strong> or <strong>Context</strong> field, and add a <strong>Tag</strong> for the category.
          </p>
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

          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="text-5xl mb-4 animate-pulse">📷</div>
                <p style={{ color: '#1A1A1A' }} className="font-semibold">Loading photos...</p>
              </div>
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">No photos in this category yet.</p>
            </div>
          )}

          {!loading && filtered.length > 0 && (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
              {filtered.map((photo, i) => (
                <div key={i} className="break-inside-avoid mb-4 cursor-pointer group"
                  onClick={() => setLightbox(photo)}>

                  {/* Photo */}
                  <div className="relative overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.caption || 'SOWCHAN activity'}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ display: 'block' }}
                      onError={(e) => { e.target.parentElement.parentElement.style.display = 'none'; }}
                    />
                    {/* Gold corner on hover */}
                    <div className="absolute top-0 left-0 w-0 h-0 group-hover:w-8 group-hover:h-8 transition-all duration-300"
                      style={{ backgroundColor: '#F5C200' }} />
                    {/* Zoom hint */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'rgba(0,0,0,0.2)' }}>
                      <span className="text-white text-2xl">🔍</span>
                    </div>
                  </div>

                  {/* Caption always visible below photo */}
                  <div className="bg-white px-4 py-3 border-l-4" style={{ borderColor: '#F5C200' }}>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {photo.caption || (
                        <span className="text-gray-400 italic">No caption added yet</span>
                      )}
                    </p>
                    {/* Category badge */}
                    <span
                      className="inline-block mt-2 text-xs font-bold uppercase tracking-wider px-2 py-0.5"
                      style={{ backgroundColor: '#1A1A1A', color: '#F5C200' }}
                    >
                      {photo.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.95)' }}
          onClick={() => setLightbox(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-yellow-400 transition-colors">✕</button>
            <img src={lightbox.src} alt={lightbox.caption || 'SOWCHAN'}
              className="w-full object-contain" style={{ maxHeight: '75vh' }} />
            <div style={{ backgroundColor: '#1A1A1A' }} className="p-5">
              <p className="text-gray-200 text-sm leading-relaxed">
                {lightbox.caption || <span className="text-gray-500 italic">No caption added yet</span>}
              </p>
              <span className="inline-block mt-2 text-xs font-bold uppercase tracking-wider px-2 py-0.5"
                style={{ backgroundColor: '#F5C200', color: '#1A1A1A' }}>
                {lightbox.category}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section style={{ backgroundColor: '#1A1A1A' }} className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: 'Playfair Display, serif', color: 'white' }} className="text-3xl font-bold mb-4">
            Want to Share Your Story?
          </h2>
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