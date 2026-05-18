import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Gallery() {
  const [media, setMedia] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeType, setActiveType] = useState('all'); // 'all' | 'photos' | 'videos'
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    fetch('/api/photos')
      .then((res) => res.json())
      .then((data) => {
        const allMedia = data.media || data.photos || [];
        setMedia(allMedia);

        const topLevelSet = new Set();
        allMedia.forEach(p => {
          if (p.category && p.category !== 'General') {
            const topLevel = p.category.split(' / ')[0].trim();
            topLevelSet.add(topLevel);
          }
        });
        setCategories(Array.from(topLevelSet).sort());
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const photoCount = media.filter(m => !m.isVideo).length;
  const videoCount = media.filter(m => m.isVideo).length;

  const filtered = media.filter(item => {
    const matchType =
      activeType === 'all' ||
      (activeType === 'photos' && !item.isVideo) ||
      (activeType === 'videos' && item.isVideo);

    const matchCat =
      activeCategory === 'all' ||
      item.category === activeCategory ||
      item.category.startsWith(activeCategory + ' /') ||
      item.category.startsWith(activeCategory + '/');

    return matchType && matchCat;
  });

  return (
    <>
      <Head>
        <title>Gallery — SOWCHAN</title>
        <meta name="description" content="Photo and video gallery of SOWCHAN programs, events, outreach and community impact across Nigeria." />
      </Head>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2d1a00 100%)' }} className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #F5C200, transparent)', transform: 'translate(30%, -30%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <div style={{ width: '30px', height: '2px', backgroundColor: '#F5C200' }}></div>
            <span style={{ color: '#F5C200' }} className="text-sm font-semibold uppercase tracking-widest">Photo & Video Gallery</span>
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', color: 'white' }} className="text-5xl md:text-6xl font-black">
            Our Work in <span style={{ color: '#F5C200' }}>Pictures</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-xl text-lg">
            From community outreach to international advocacy — a glimpse into SOWCHAN's impact across Nigeria and beyond.
          </p>
          {!loading && (
            <div className="flex gap-4 mt-3">
              <span style={{ color: '#F5C200' }} className="text-sm font-semibold">📷 {photoCount} Photos</span>
              {videoCount > 0 && <span style={{ color: '#F5C200' }} className="text-sm font-semibold">🎬 {videoCount} Videos</span>}
            </div>
          )}
        </div>
      </section>

      {/* TYPE FILTER — Photos / Videos / All */}
      {videoCount > 0 && (
        <section style={{ backgroundColor: '#C0000C' }} className="py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-3 justify-center">
              {[
                { id: 'all', label: `All Media (${media.length})` },
                { id: 'photos', label: `📷 Photos (${photoCount})` },
                { id: 'videos', label: `🎬 Videos (${videoCount})` },
              ].map(t => (
                <button key={t.id} onClick={() => setActiveType(t.id)}
                  className="px-5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all"
                  style={{
                    backgroundColor: activeType === t.id ? '#F5C200' : 'transparent',
                    color: activeType === t.id ? '#1A1A1A' : 'white',
                    border: `1px solid ${activeType === t.id ? '#F5C200' : 'rgba(255,255,255,0.4)'}`,
                  }}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CATEGORY FILTER TABS */}
      <section style={{ backgroundColor: '#1A1A1A' }} className="py-4 sticky top-16 z-40 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setActiveCategory('all')}
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all"
              style={{
                backgroundColor: activeCategory === 'all' ? '#F5C200' : 'transparent',
                color: activeCategory === 'all' ? '#1A1A1A' : '#888',
                border: `1px solid ${activeCategory === 'all' ? '#F5C200' : '#444'}`,
              }}>
              All Photos <span className="ml-1 opacity-60">({media.length})</span>
            </button>
            {categories.map((cat) => {
              const count = media.filter(p =>
                p.category === cat ||
                p.category.startsWith(cat + ' /') ||
                p.category.startsWith(cat + '/')
              ).length;
              return (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className="px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all"
                  style={{
                    backgroundColor: activeCategory === cat ? '#F5C200' : 'transparent',
                    color: activeCategory === cat ? '#1A1A1A' : '#888',
                    border: `1px solid ${activeCategory === cat ? '#F5C200' : '#444'}`,
                  }}>
                  {cat} <span className="ml-1 opacity-60">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* MEDIA GRID */}
      <section style={{ backgroundColor: '#f5f0e8' }} className="py-12 min-h-96">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="text-5xl mb-4">📷</div>
                <p style={{ color: '#1A1A1A' }} className="font-semibold">Loading media...</p>
              </div>
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">No media in this category yet.</p>
            </div>
          )}

          {!loading && filtered.length > 0 && (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
              {filtered.map((item, i) => (
                <div key={i} className="break-inside-avoid mb-4 cursor-pointer group"
                  onClick={() => setLightbox(item)}>
                  <div className="relative overflow-hidden">
                    {item.isVideo ? (
                      <>
                        {/* Video thumbnail */}
                        <img
                          src={item.thumbnail || item.src}
                          alt={item.caption || 'SOWCHAN video'}
                          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          style={{ display: 'block' }}
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center"
                          style={{ background: 'rgba(0,0,0,0.3)' }}>
                          <div className="w-16 h-16 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: '#F5C200' }}>
                            <span style={{ fontSize: '24px', marginLeft: '4px' }}>▶</span>
                          </div>
                        </div>
                        {/* Video badge */}
                        <div className="absolute top-3 right-3 px-2 py-1 text-xs font-bold"
                          style={{ backgroundColor: '#C0000C', color: 'white' }}>
                          🎬 VIDEO
                        </div>
                      </>
                    ) : (
                      <img
                        src={item.src}
                        alt={item.caption || 'SOWCHAN activity'}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ display: 'block' }}
                        onError={(e) => { e.target.parentElement.parentElement.style.display = 'none'; }}
                      />
                    )}
                    <div className="absolute top-0 left-0 w-0 h-0 group-hover:w-8 group-hover:h-8 transition-all duration-300"
                      style={{ backgroundColor: '#F5C200' }} />
                  </div>
                  <div className="bg-white px-4 py-3 border-l-4" style={{ borderColor: '#F5C200' }}>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.caption || <span className="text-gray-400 italic">No caption added yet</span>}
                    </p>
                    <span className="inline-block mt-2 text-xs font-bold uppercase tracking-wider px-2 py-0.5"
                      style={{ backgroundColor: '#1A1A1A', color: '#F5C200' }}>
                      {item.category}
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

            {lightbox.isVideo ? (
              <video controls autoPlay className="w-full" style={{ maxHeight: '75vh' }}>
                <source src={lightbox.src} type={`video/${lightbox.format || 'mp4'}`} />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={lightbox.src} alt={lightbox.caption || 'SOWCHAN'}
                className="w-full object-contain" style={{ maxHeight: '75vh' }} />
            )}

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
          <h2 style={{ fontFamily: 'Playfair Display, serif', color: 'white' }} className="text-3xl font-bold mb-4">Want to Share Your Story?</h2>
          <p className="text-gray-400 mb-6">If you have photos or videos from SOWCHAN events you'd like to share, contact us.</p>
          <a href="/contact" style={{ backgroundColor: '#F5C200', color: '#1A1A1A' }}
            className="inline-block font-bold uppercase tracking-wider px-8 py-4 text-sm hover:opacity-90 transition-opacity">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}