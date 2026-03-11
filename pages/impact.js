import Head from 'next/head';

export default function Impact() {
  const cases = [
    {
      state: 'Anambra State',
      stories: [
        {
          title: 'Opunachi — Rejected for Her Status',
          body: 'A woman from Ihiala was sent out of her husband\'s house during pregnancy because of her HIV positive status. Her children and properties were taken from her. As an orphan with nowhere to stay, SOWCHAN connected her with support and community resources.',
        },
        {
          title: 'Chisom — A Child Denied Education',
          body: 'A 10-year-old boy who passed his entrance examination was rejected at school because of his HIV status. SOWCHAN advocates challenged this discriminatory decision and fought for his right to education.',
        },
        {
          title: 'Mrs. Christiana — Stripped of Everything',
          body: 'After losing her husband to AIDS, her in-laws took all her belongings and sent her back to her father\'s house. SOWCHAN officials and volunteers fought the family, and she was eventually brought back — though still facing denial of land for farming.',
        },
      ],
    },
    {
      state: 'Abia State',
      stories: [
        {
          title: 'Omasirichi — A Child Survivor',
          body: 'A 12-year-old girl was sexually assaulted by her step-father over four years. When discovered, her step-father attempted to flee but was caught. The girl is now on ARV treatment and doing well, supported by SOWCHAN\'s care network.',
        },
        {
          title: 'Mrs. Uloma — Justice Through FIDA',
          body: 'Uloma\'s husband knew his HIV status but infected her. After his death, his family accused her of infecting him and took her children and property. SOWCHAN worked with FIDA Abia State to restore her children and belongings to her.',
        },
      ],
    },
    {
      state: 'Imo State',
      stories: [
        {
          title: 'Mrs. Obioha — Fighting for Justice',
          body: 'After losing her husband to HIV/AIDS, her brother-in-law seized all property including farmlands, leaving her with nothing to care for her three children. SOWCHAN is working to build her courage and self-esteem to pursue legal justice.',
        },
        {
          title: 'Miss Favour — From Rejection to Care',
          body: 'An AIDS orphan falsely accused of being a witch and passed between relatives who rejected her. SOWCHAN counseled her mother to access medical treatment and enrolled Favour in its OVC program. Both are now doing well and happy.',
        },
      ],
    },
  ];

  const ebonyiCases = [
    { name: 'Rosemary Igwe', type: 'Discrimination & false accusation', outcome: 'Case settled by traditional ruler. Client free to conduct business.' },
    { name: 'Ms Nancy Nome', type: 'Character assassination & theft by stepbrother', outcome: 'Matter settled at police station through HRH intervention.' },
    { name: 'Mrs. Felicia Umezuruike', type: 'Denial of livelihood by husband', outcome: 'Referred to legal counsel (Barr. Nkem Chukwu).' },
    { name: 'Mrs. Chioma Ogbonna', type: 'Denial of child custody', outcome: 'Custody of daughter granted. Case in court.' },
    { name: 'Promise Chukwuma', type: 'Community rejection & property destruction', outcome: 'Case settled through CIDDOC.' },
  ];

  return (
    <>
      <Head>
        <title>Our Impact — SOWCHAN</title>
        <meta name="description" content="Real stories of impact from SOWCHAN's work across Nigeria in fighting gender-based violence and supporting women and children living with HIV." />
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
            <span style={{ color: '#F5C200' }} className="text-sm font-semibold uppercase tracking-widest">Stories of Change</span>
          </div>
          <h1
            style={{ fontFamily: 'Playfair Display, serif', color: 'white' }}
            className="text-5xl md:text-6xl font-black"
          >
            Our <span style={{ color: '#F5C200' }}>Impact</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-xl text-lg">
            These are real accounts of lives touched, injustices challenged, and dignity restored — 
            some names changed to protect privacy.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ backgroundColor: '#FFFDF0' }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-divider"></div>
          <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-3xl font-bold mb-4">
            Gender-Based Violence Reports
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Across Nigeria, SOWCHAN documents and responds to cases of discrimination, stigma, and violence 
            against women and children living with HIV. The following cases represent the frontline of our work.
          </p>
        </div>
      </section>

      {/* CASE STORIES */}
      {cases.map((section) => (
        <section key={section.state} style={{ backgroundColor: '#f5f0e8' }} className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <div style={{ width: '4px', height: '40px', backgroundColor: '#C0000C' }}></div>
              <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-3xl font-bold">
                {section.state}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.stories.map((story) => (
                <div
                  key={story.title}
                  className="card-hover bg-white p-8 border-l-4"
                  style={{ borderColor: '#F5C200' }}
                >
                  <h3
                    style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}
                    className="text-lg font-bold mb-4"
                  >
                    {story.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{story.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* EBONYI TABLE */}
      <section style={{ backgroundColor: '#FFFDF0' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div style={{ width: '4px', height: '40px', backgroundColor: '#C0000C' }}></div>
            <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-3xl font-bold">
              Ebonyi State — Case Register
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: '#1A1A1A', color: 'white' }}>
                  <th className="text-left px-6 py-4 font-semibold uppercase tracking-wider">Client</th>
                  <th className="text-left px-6 py-4 font-semibold uppercase tracking-wider">Type of Case</th>
                  <th className="text-left px-6 py-4 font-semibold uppercase tracking-wider">Outcome</th>
                </tr>
              </thead>
              <tbody>
                {ebonyiCases.map((c, i) => (
                  <tr
                    key={c.name}
                    style={{ backgroundColor: i % 2 === 0 ? 'white' : '#f5f0e8' }}
                  >
                    <td className="px-6 py-4 font-semibold text-gray-800">{c.name}</td>
                    <td className="px-6 py-4 text-gray-600">{c.type}</td>
                    <td className="px-6 py-4 text-gray-600">{c.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section style={{ backgroundColor: '#C0000C' }} className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            style={{ fontFamily: 'Playfair Display, serif', color: 'white' }}
            className="text-2xl md:text-3xl font-semibold italic"
          >
            "We show ourselves as women of strength, dignity, and purpose — not as victims who live in fear and isolation waiting to die."
          </p>
          <div className="mt-4" style={{ color: '#F5C200', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            — SOWCHAN
          </div>
        </div>
      </section>
    </>
  );
}
