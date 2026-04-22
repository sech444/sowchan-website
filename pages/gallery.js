import Head from 'next/head';
import { useState } from 'react';

const photos = [
  // --- COMMUNITY OUTREACH ---
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542494/SOWCHAN_National_coordinator_Lucy_e7tzhv.jpg", caption: "SOWCHAN National Coordinator Lucy sensitizing pregnant women on HIV/AIDS prevention of mother to child transmission at a Traditional Birth Attendant venue, Ajegunle, Lagos.", category: "outreach" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542496/SOWCHAN_FCT_f5m76j.jpg", caption: "SOWCHAN FCT Financial Secretary Sarah Francis wins and is presented with a bicycle by a staff of the Federal Ministry of Health for passing an exclusive breastfeeding interview, National Hospital FCT, Abuja.", category: "outreach" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542485/Cross_session_of_participants_fslo96.jpg", caption: "Cross section of participants pose with their babies during exclusive breastfeeding week in Abuja.", category: "outreach" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542495/OVC_display_etmcs6.jpg", caption: "OVC display their school bags, shoes and uniforms during SOWCHAN Children's Day celebration. Supported by Chevron Nigeria and AWDF.", category: "outreach" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542495/SOWCHAN_support_ya7vxx.jpg", caption: "SOWCHAN presents school uniforms, bags and shoes to OVC in Lagos during Children's Day celebration. Supported by Chevron Nigeria and AWDF.", category: "outreach" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542496/SOWCHAN_Free_community-1_kb0hiz.jpg", caption: "SOWCHAN free community outreach on HIV and Malaria screening in Benue State.", category: "outreach" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542496/SOWCHAN_Free_community-2_lkdw3t.jpg", caption: "SOWCHAN free community outreach on HIV and Malaria screening in Benue State.", category: "outreach" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542486/SOWCHAN_National_secretary_xhdhab.jpg", caption: "SOWCHAN National Secretary visits a client in hospital during hospital care and support.", category: "outreach" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542495/SOWCHAN_National_secretary-1_ixcwva.jpg", caption: "SOWCHAN National Secretary during hospital care and support visit.", category: "outreach" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542497/SOWCHAN_volunteers_hvjq8k.jpg", caption: "SOWCHAN volunteers fighting against STI, HIV, TB and cancer.", category: "outreach" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542498/SOWCHAN_volunteers-2_xyazh6.jpg", caption: "SOWCHAN volunteers distributing Long Lasting Insecticidal Mosquito Nets (LLINs) in Benue State.", category: "outreach" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542497/SOWCHAN_provides_jqughs.jpg", caption: "SOWCHAN provides psychosocial support to OVC in Apapa, Lagos.", category: "outreach" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542495/SOWCHAN_fmnxhp.jpg", caption: "SOWCHAN members and staff during a program activity.", category: "outreach" },

  // --- TRAINING & ADVOCACY ---
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542485/Cross_session_of_SOWCHAN_jlnlga.jpg", caption: "Cross section of SOWCHAN members during NACA supported workshop on capacity building and leadership/advocacy training for SOWCHAN Executives, Abuja, June 2015.", category: "training" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542495/SOWCHAN_group_pictures_ej4wpt.jpg", caption: "SOWCHAN group pictures during NACA/UN Women supported training on Gender-Based Violence and HIV/AIDS.", category: "training" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542496/SOWCHAN_groups_jqbk8c.jpg", caption: "Group picture of SOWCHAN National/State Chapters Coordinators training organized by NACA/UN Women on Gender-Based Violence and HIV/AIDS in Nigeria.", category: "training" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542500/SOWCHAN_trained_volunteers_j00hkg.jpg", caption: "SOWCHAN trained volunteers teaching in-school girls on sexual and reproductive health.", category: "training" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542500/SOWCHAN_trained_volunteers-2_vgok4j.jpg", caption: "SOWCHAN trained volunteers teaching in-school girls on sexual and reproductive health education.", category: "training" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542500/SOWCHAN_trained_volunteers-3_kwxbiw.jpg", caption: "SOWCHAN trained volunteers teaching in-school girls on sexual and reproductive health.", category: "training" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542489/MULTI-STAKEHOLDERS_DIALOGUE_xonhjd.jpg", caption: "Multi-Stakeholders Dialogue on Strengthening Coordinated GBV Response organised by SOWCHAN.", category: "training" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542487/MULTI-STAKEHOLDERS_DIALOGUE-2_umoewu.jpg", caption: "Multi-Stakeholders Dialogue on Strengthening Coordinated GBV Response organised by SOWCHAN.", category: "training" },

  // --- ACTIVITIES (New Photos) ---
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840839/IMG-20260307-WA0020_sy24yj.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840838/IMG-20260307-WA0011_ju7okl.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840838/IMG-20260307-WA0007_w9pz1z.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840837/IMG-20260307-WA0004_txqwlj.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840836/IMG-20260307-WA0003_u9weyj.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840836/IMG-20260307-WA0000_gffdxm.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840836/IMG-20260307-WA0000_1_wspmlt.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840662/IMG-20260307-WA0024_sl4siv.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840661/IMG-20260307-WA0023_e6yuoy.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840660/IMG-20260307-WA0022_km2pwl.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840660/IMG-20260307-WA0021_pnkvru.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840659/IMG-20260307-WA0017_1_meaidn.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840659/IMG-20260307-WA0017_gxbthy.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840658/IMG-20260307-WA0016_utlsy0.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840657/IMG-20260307-WA0015_sryecy.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840656/IMG-20260307-WA0014_sxaa4k.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840656/IMG-20260307-WA0013_pngq65.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840655/IMG-20260307-WA0012_ubliod.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840654/IMG-20260307-WA0011_ksz5rp.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840654/IMG-20260307-WA0010_2_gnpgpj.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840653/IMG-20260307-WA0010_1_kawrvd.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840652/IMG-20260307-WA0010_b9b7i9.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840651/IMG-20260307-WA0009_hlcjyr.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840650/IMG-20260307-WA0007_2_xmeszi.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840649/IMG-20260307-WA0007_1_cwxgyv.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840649/IMG-20260307-WA0007_ixqfyn.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840649/IMG-20260307-WA0006_l7peff.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840648/IMG-20260307-WA0003_csfjye.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840648/IMG-20260307-WA0002_ioqfuj.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840648/IMG-20260307-WA0001_kwlhym.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1776840648/IMG-20260307-WA0000_ytl26r.jpg", caption: "SOWCHAN program activities and community engagement.", category: "activities" },

  // --- INTERNATIONAL ---
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542494/Lucy_coordinator_xl7bip.jpg", caption: "SOWCHAN National Coordinator Lucy with other women activists during Leadership Capacity Building training in New York, supported by UNDP.", category: "international" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542494/Lucy_with_Formal_president_Olusegun_vvnlwb.jpg", caption: "Lucy with former President Olusegun Obasanjo in New York during the MDG Summit.", category: "international" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542494/SOWCHAN_National_Coordinator_cdzrin.jpg", caption: "SOWCHAN National Coordinator Lucy (3rd from right) with former Minister of Health Chukwuma and other delegates from Nigeria at the MDG Summit, New York, USA.", category: "international" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542496/Lucy_with_Nigeria_formal_finance_Minister_Ngozi_ifbzie.jpg", caption: "Lucy with Nigeria's former Finance Minister Ngozi Okonjo-Iweala at the MDG Summit, New York, USA.", category: "international" },
  { src: "https://res.cloudinary.com/dfzkslndz/image/upload/v1775542494/SOWCHAN_National_Coordinator_Lucy_with_Minister_dd82z1.jpg", caption: "SOWCHAN National Coordinator Lucy with Minister at the MDG Summit, New York, USA.", category: "international" },
];

const categories = [
  { id: 'all', label: 'All Photos' },
  { id: 'outreach', label: 'Community Outreach' },
  { id: 'training', label: 'Training & Advocacy' },
  { id: 'activities', label: 'Activities' },
  { id: 'international', label: 'International Events' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === 'all' ? photos : photos.filter((p) => p.category === activeCategory);

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
          <p className="text-gray-300 mt-4 max-w-xl text-lg">From community outreach to international advocacy — a glimpse into SOWCHAN's impact across Nigeria and beyond.</p>
          <p style={{ color: '#F5C200' }} className="mt-2 text-sm font-semibold">{photos.length} Photos</p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section style={{ backgroundColor: '#1A1A1A' }} className="py-4 sticky top-16 z-40 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                className="px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all"
                style={{ backgroundColor: activeCategory === cat.id ? '#F5C200' : 'transparent', color: activeCategory === cat.id ? '#1A1A1A' : '#888', border: `1px solid ${activeCategory === cat.id ? '#F5C200' : '#444'}` }}>
                {cat.label} <span className="ml-1 opacity-60">({cat.id === 'all' ? photos.length : photos.filter(p => p.category === cat.id).length})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GRID */}
      <section style={{ backgroundColor: '#f5f0e8' }} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {filtered.map((photo, i) => (
              <div key={i} className="break-inside-avoid cursor-pointer group relative overflow-hidden mb-4" onClick={() => setLightbox(photo)}>
                <img src={photo.src} alt={photo.caption} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ display: 'block' }} onError={(e) => { e.target.parentElement.style.display = 'none'; }} />
                <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }}>
                  <p className="text-white text-xs p-4 leading-relaxed">{photo.caption}</p>
                </div>
                <div className="absolute top-0 left-0 w-0 h-0 group-hover:w-8 group-hover:h-8 transition-all duration-300" style={{ backgroundColor: '#F5C200' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.92)' }} onClick={() => setLightbox(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setLightbox(null)} className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-yellow-400 transition-colors">✕</button>
            <img src={lightbox.src} alt={lightbox.caption} className="w-full object-contain" style={{ maxHeight: '75vh' }} />
            <div style={{ backgroundColor: '#1A1A1A' }} className="p-4">
              <p className="text-gray-300 text-sm leading-relaxed">{lightbox.caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section style={{ backgroundColor: '#1A1A1A' }} className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: 'Playfair Display, serif', color: 'white' }} className="text-3xl font-bold mb-4">Want to Share Your Story?</h2>
          <p className="text-gray-400 mb-6">If you have photos from SOWCHAN events or activities you'd like to share, contact us.</p>
          <a href="/contact" style={{ backgroundColor: '#F5C200', color: '#1A1A1A' }} className="inline-block font-bold uppercase tracking-wider px-8 py-4 text-sm hover:opacity-90 transition-opacity">Contact Us</a>
        </div>
      </section>
    </>
  );
}