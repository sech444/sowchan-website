// import Head from 'next/head';

// export default function Gallery() {
//   const captions = [
//     'SOWCHAN National Coordinator Lucy sensitizing pregnant women on HIV/AIDS prevention at a Traditional Birth Attendant venue, Ajegunle, Lagos.',
//     'Cross section of SOWCHAN members during NACA-supported workshop on capacity building and leadership/advocacy training for SOWCHAN Executives, Abuja, June 2015.',
//     'SOWCHAN group pictures during NACA/UN Women supported training on Gender-Based Violence and HIV/AIDS.',
//     'Group picture of SOWCHAN National/State Chapters Coordinators (Champions) training organized by NACA/UN Women on Gender-Based Violence and HIV/AIDS in Nigeria.',
//     'SOWCHAN FCT Financial Secretary Sarah Francis wins and is presented with a child\'s bicycle by a staff of Federal Ministry of Health for passing an exclusive breastfeeding interview during Breastfeeding Week, National Hospital FCT, Abuja.',
//     'Cross section of participants with their babies during exclusive breastfeeding week in Abuja.',
//     'OVC display their school bags, shoes and uniforms during SOWCHAN Children\'s Day celebration. Supported by Chevron Nigeria and Africa Women Development Fund (AWDF).',
//     'SOWCHAN presents school uniforms, bags and shoes to OVC in Lagos during Children\'s Day celebration. Supported by Chevron Nigeria and AWDF.',
//     'SOWCHAN free community outreach on HIV and Malaria screening in Benue State.',
//     'SOWCHAN National Secretary visits a client in hospital during hospital care and support.',
//     'SOWCHAN volunteers fight against STI, HIV, TB and cancer.',
//     'SOWCHAN volunteers distributing Long Lasting Insecticidal Mosquito Nets (LLINs) in Benue.',
//     'SOWCHAN provides psychosocial support to OVC in Apapa, Lagos.',
//     'SOWCHAN trained volunteers teaching in-school girls on sexual and reproductive health.',
//     'SOWCHAN National Coordinator Lucy with women activists during Leadership Capacity Building training, New York, supported by UNDP.',
//     'Lucy with former President Olusegun Obasanjo in New York during the MDG Summit.',
//     'SOWCHAN National Coordinator Lucy with former Minister of Health Chukwuma and delegates from Nigeria at the MDG Summit, New York, USA.',
//     'Lucy with Nigeria\'s former Finance Minister Ngozi Okonjo-Iweala at the MDG Summit, New York, USA.',
//     'Multi-Stakeholders Dialogue on Strengthening Coordinated GBV Response, organized by SOWCHAN.',
//   ];

//   const categories = [
//     { label: 'All', value: 'all' },
//     { label: 'Community Outreach', value: 'outreach' },
//     { label: 'Training & Advocacy', value: 'training' },
//     { label: 'International Events', value: 'international' },
//   ];

//   return (
//     <>
//       <Head>
//         <title>Gallery — SOWCHAN</title>
//         <meta name="description" content="Photo gallery of SOWCHAN's programs, events, outreach activities and community impact across Nigeria." />
//       </Head>

//       {/* HERO */}
//       <section
//         style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2d1a00 100%)' }}
//         className="py-24 relative overflow-hidden"
//       >
//         <div
//           className="absolute right-0 top-0 w-80 h-80 rounded-full opacity-10"
//           style={{ background: 'radial-gradient(circle, #F5C200, transparent)', transform: 'translate(30%, -30%)' }}
//         />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="inline-flex items-center gap-2 mb-4">
//             <div style={{ width: '30px', height: '2px', backgroundColor: '#F5C200' }}></div>
//             <span style={{ color: '#F5C200' }} className="text-sm font-semibold uppercase tracking-widest">Photo Gallery</span>
//           </div>
//           <h1
//             style={{ fontFamily: 'Playfair Display, serif', color: 'white' }}
//             className="text-5xl md:text-6xl font-black"
//           >
//             Our Work in <span style={{ color: '#F5C200' }}>Pictures</span>
//           </h1>
//           <p className="text-gray-300 mt-4 max-w-xl text-lg">
//             From community outreach to international advocacy — a glimpse into SOWCHAN's impact across Nigeria and beyond.
//           </p>
//         </div>
//       </section>

//       {/* NOTICE */}
//       {/* <section style={{ backgroundColor: '#FFFDF0' }} className="py-10">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div
//             className="p-6 rounded border-l-4"
//             style={{ backgroundColor: '#fff8dc', borderColor: '#F5C200' }}
//           >
//             <p className="text-gray-700 text-sm">
//               <strong>📸 Gallery Update:</strong> To add your actual photos to this gallery, place your images in the <code>/public/gallery/</code> folder of the project and update the image paths in <code>pages/gallery.js</code>. The captions below describe photos from SOWCHAN's activities.
//             </p>
//           </div>
//         </div>
//       </section> */}

//       {/* CAPTION CARDS */}
//       <section style={{ backgroundColor: '#f5f0e8' }} className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="section-divider"></div>
//           <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-3xl font-bold text-center mb-12">
//             Photo Highlights
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {captions.map((caption, i) => (
//               <div
//                 key={i}
//                 className="card-hover overflow-hidden bg-white"
//               >
//                 {/* Placeholder image area */}
//                 <div
//                   className="w-full flex items-center justify-center"
//                   style={{
//                     height: '200px',
//                     background: i % 3 === 0
//                       ? 'linear-gradient(135deg, #1A1A1A, #3d2800)'
//                       : i % 3 === 1
//                       ? 'linear-gradient(135deg, #8B0009, #1A1A1A)'
//                       : 'linear-gradient(135deg, #D4A800, #C0000C)',
//                   }}
//                 >
//                   <span className="text-5xl">📷</span>
//                 </div>
//                 <div className="p-5">
//                   <p className="text-gray-600 text-sm leading-relaxed">{caption}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CALL TO ACTION */}
//       <section style={{ backgroundColor: '#1A1A1A' }} className="py-16">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 style={{ fontFamily: 'Playfair Display, serif', color: 'white' }} className="text-3xl font-bold mb-4">
//             Want to Share Your Story?
//           </h2>
//           <p className="text-gray-400 mb-8">
//             If you have photos from SOWCHAN events or activities you'd like to share, please contact us.
//           </p>
//           <a
//             href="/contact"
//             style={{ backgroundColor: '#F5C200', color: '#1A1A1A' }}
//             className="inline-block font-bold uppercase tracking-wider px-8 py-4 text-sm hover:opacity-90 transition-opacity"
//           >
//             Contact Us
//           </a>
//         </div>
//       </section>
//     </>
//   );
// }


import Head from 'next/head';
import { useState } from 'react';

const photos = [
  {
    file: 'SOWCHAN National coordinator Lucy.jpg',
    caption: 'SOWCHAN National Coordinator Lucy sensitizing pregnant women on HIV/AIDS prevention of mother to child transmission at a Traditional Birth Attendant venue, Ajegunle, Lagos.',
    category: 'outreach',
  },
  {
    file: 'Cross session of SOWCHAN.jpg',
    caption: 'Cross session of SOWCHAN members during NACA supported workshop on capacity building and leadership/advocacy training for SOWCHAN Executives, Abuja, June 2015.',
    category: 'training',
  },
  {
    file: 'SOWCHAN group pictures.jpg',
    caption: 'SOWCHAN group pictures during NACA/UN Women supported training on Gender-Based Violence and HIV/AIDS.',
    category: 'training',
  },
  {
    file: 'SOWCHAN groups.jpg',
    caption: 'Group picture of SOWCHAN National/State Chapters Coordinators (Champions) training organized by NACA/UN Women on Gender-Based Violence and HIV/AIDS in Nigeria.',
    category: 'training',
  },
  {
    file: 'SOWCHAN FCT.jpg',
    caption: 'SOWCHAN FCT Financial Secretary Sarah Francis wins and is presented with a child\'s bicycle by a staff of the Federal Ministry of Health for passing an exclusive breastfeeding interview during Breastfeeding Week, National Hospital FCT, Abuja.',
    category: 'outreach',
  },
  {
    file: 'Cross session of participants.jpg',
    caption: 'Cross section of participants pose with their babies during exclusive breastfeeding week in Abuja.',
    category: 'outreach',
  },
  {
    file: 'OVC display.jpg',
    caption: 'OVC display their school bags, shoes and uniforms during SOWCHAN Children\'s Day celebration. Supported by Chevron Nigeria and Africa Women Development Fund (AWDF).',
    category: 'outreach',
  },
  {
    file: 'SOWCHAN support.jpg',
    caption: 'SOWCHAN presents school uniforms, bags and shoes to OVC in Lagos during Children\'s Day celebration. Supported by Chevron Nigeria and AWDF.',
    category: 'outreach',
  },
  {
    file: 'SOWCHAN Free community-1.jpg',
    caption: 'SOWCHAN free community outreach on HIV and Malaria screening in Benue State.',
    category: 'outreach',
  },
  {
    file: 'SOWCHAN Free community-2.jpg',
    caption: 'SOWCHAN free community outreach on HIV and Malaria screening in Benue State.',
    category: 'outreach',
  },
  {
    file: 'SOWCHAN National secretary.jpg',
    caption: 'SOWCHAN National Secretary visits a client in hospital during hospital care and support.',
    category: 'outreach',
  },
  {
    file: 'SOWCHAN National secretary-1.jpg',
    caption: 'SOWCHAN National Secretary during hospital care and support visit.',
    category: 'outreach',
  },
  {
    file: 'SOWCHAN volunteers.jpg',
    caption: 'SOWCHAN volunteers fighting against STI, HIV, TB and cancer.',
    category: 'outreach',
  },
  {
    file: 'SOWCHAN volunteers-2.jpg',
    caption: 'SOWCHAN volunteers distributing Long Lasting Insecticidal Mosquito Nets (LLINs) in Benue State.',
    category: 'outreach',
  },
  {
    file: 'SOWCHAN provides.jpg',
    caption: 'SOWCHAN provides psychosocial support to OVC in Apapa, Lagos.',
    category: 'outreach',
  },
  {
    file: 'SOWCHAN trained volunteers.jpg',
    caption: 'SOWCHAN trained volunteers teaching in-school girls on sexual and reproductive health.',
    category: 'training',
  },
  {
    file: 'SOWCHAN trained volunteers-2.jpg',
    caption: 'SOWCHAN trained volunteers teaching in-school girls on sexual and reproductive health education.',
    category: 'training',
  },
  {
    file: 'SOWCHAN trained volunteers-3.jpg',
    caption: 'SOWCHAN trained volunteers teaching in-school girls on sexual and reproductive health.',
    category: 'training',
  },
  {
    file: 'Lucy coordinator.jpg',
    caption: 'SOWCHAN National Coordinator Lucy standing with other women activists during Leadership Capacity Building training in New York, supported by UNDP.',
    category: 'international',
  },
  {
    file: 'Lucy with Formal president Olusegun.jpg',
    caption: 'Lucy with former President Olusegun Obasanjo in New York during the MDG Summit.',
    category: 'international',
  },
  {
    file: 'SOWCHAN National Coordinator.jpg',
    caption: 'SOWCHAN National Coordinator Lucy (3rd from right) with former Minister of Health Chukwuma and other delegates from Nigeria at the MDG Summit, New York, USA.',
    category: 'international',
  },
  {
    file: 'Lucy with Nigeria formal finance Minister Ngozi.jpg',
    caption: 'Lucy with Nigeria\'s former Finance Minister Ngozi Okonjo-Iweala at the MDG Summit, New York, USA.',
    category: 'international',
  },
  {
    file: 'SOWCHAN National Coordinator Lucy with Minister.jpg',
    caption: 'SOWCHAN National Coordinator Lucy with Minister at the MDG Summit, New York, USA.',
    category: 'international',
  },
  {
    file: 'SOWCHAN .jpg',
    caption: 'SOWCHAN members and staff during a program activity.',
    category: 'outreach',
  },
  {
    file: 'MULTI-STAKEHOLDERS DIALOGUE.jpg',
    caption: 'Multi-Stakeholders Dialogue on Strengthening Coordinated GBV Response organised by SOWCHAN.',
    category: 'training',
  },
  {
    file: 'MULTI-STAKEHOLDERS DIALOGUE-2.jpg',
    caption: 'Multi-Stakeholders Dialogue on Strengthening Coordinated GBV Response organised by SOWCHAN.',
    category: 'training',
  },
];

const categories = [
  { id: 'all', label: 'All Photos' },
  { id: 'outreach', label: 'Community Outreach' },
  { id: 'training', label: 'Training & Advocacy' },
  { id: 'international', label: 'International Events' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === 'all'
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  return (
    <>
      <Head>
        <title>Gallery — SOWCHAN</title>
        <meta name="description" content="Photo gallery of SOWCHAN's programs, events, outreach activities and community impact across Nigeria." />
      </Head>

      {/* HERO */}
      <section
        style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2d1a00 100%)' }}
        className="py-24 relative overflow-hidden"
      >
        <div
          className="absolute right-0 top-0 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #F5C200, transparent)', transform: 'translate(30%, -30%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <div style={{ width: '30px', height: '2px', backgroundColor: '#F5C200' }}></div>
            <span style={{ color: '#F5C200' }} className="text-sm font-semibold uppercase tracking-widest">Photo Gallery</span>
          </div>
          <h1
            style={{ fontFamily: 'Playfair Display, serif', color: 'white' }}
            className="text-5xl md:text-6xl font-black"
          >
            Our Work in <span style={{ color: '#F5C200' }}>Pictures</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-xl text-lg">
            From community outreach to international advocacy — a glimpse into SOWCHAN's impact across Nigeria and beyond.
          </p>
          <p style={{ color: '#F5C200' }} className="mt-2 text-sm font-semibold">
            {photos.length} Photos
          </p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section style={{ backgroundColor: '#1A1A1A' }} className="py-4 sticky top-16 z-40 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all"
                style={{
                  backgroundColor: activeCategory === cat.id ? '#F5C200' : 'transparent',
                  color: activeCategory === cat.id ? '#1A1A1A' : '#888',
                  border: `1px solid ${activeCategory === cat.id ? '#F5C200' : '#444'}`,
                }}
              >
                {cat.label}
                <span className="ml-2 opacity-60">
                  ({cat.id === 'all' ? photos.length : photos.filter(p => p.category === cat.id).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GRID */}
      <section style={{ backgroundColor: '#f5f0e8' }} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((photo, i) => (
              <div
                key={photo.file}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden"
                style={{ marginBottom: '16px' }}
                onClick={() => setLightbox(photo)}
              >
                <img
                  src={`/gallery/${encodeURIComponent(photo.file)}`}
                  alt={photo.caption}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ display: 'block' }}
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }}
                >
                  <p className="text-white text-xs p-4 leading-relaxed">{photo.caption}</p>
                </div>
                {/* Gold corner accent */}
                <div
                  className="absolute top-0 left-0 w-0 h-0 group-hover:w-8 group-hover:h-8 transition-all duration-300"
                  style={{ backgroundColor: '#F5C200' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-yellow-400 transition-colors"
            >
              ✕
            </button>
            <img
              src={`/gallery/${encodeURIComponent(lightbox.file)}`}
              alt={lightbox.caption}
              className="w-full max-h-screen object-contain"
              style={{ maxHeight: '75vh' }}
            />
            <div style={{ backgroundColor: '#1A1A1A' }} className="p-4">
              <p className="text-gray-300 text-sm leading-relaxed">{lightbox.caption}</p>
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
          <p className="text-gray-400 mb-6">
            If you have photos from SOWCHAN events or activities you'd like to share, contact us.
          </p>
          <a
            href="/contact"
            style={{ backgroundColor: '#F5C200', color: '#1A1A1A' }}
            className="inline-block font-bold uppercase tracking-wider px-8 py-4 text-sm hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
