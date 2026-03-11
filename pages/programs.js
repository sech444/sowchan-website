import Head from 'next/head';

export default function Programs() {
  const aims = [
    {
      number: '01',
      icon: '🩺',
      title: 'Health Protection',
      subtitle: 'HIV/AIDS, TB, Malaria & Maternal Health',
      desc: 'Without good health, no meaningful development can happen. This can only be achieved when citizens — especially women and children — have the information needed to protect their health and lives.',
      activities: [
        'Innovative HIV/AIDS, TB, malaria, mental health, maternal health and nutrition education',
        'Strengthening community health systems',
        'Advocacy for the improvement of women\'s health',
        'Support and care for women and children with disabilities',
        'PMTCT — Prevention of Mother to Child Transmission programs',
      ],
    },
    {
      number: '02',
      icon: '💼',
      title: 'Economic Empowerment',
      subtitle: 'Building Financial Independence for Women',
      desc: "Women's poverty lies at the heart of their marginalization and oppression. For women to become active citizens and have their rights respected and needs met, their economic empowerment needs to be guaranteed.",
      activities: [
        'Income-Generating Activities (IGAs) for women living with HIV',
        'Entrepreneurship training for youth',
        'Computer and digital literacy training',
        'Sustainable development and poverty reduction programs',
        'Youth economic self-reliance initiatives',
      ],
    },
    {
      number: '03',
      icon: '📚',
      title: 'Education & Skills',
      subtitle: 'Expanding Choices for Girls and Boys',
      desc: 'Education is the single most essential instrument for the empowerment of people. With education, people can understand the issues that affect their lives, protect their rights, and engage with government to advance their lives.',
      activities: [
        'Research to enrich education standards for children and youth',
        'Educational support for poor and vulnerable children',
        'Sexual and reproductive health education for in-school girls',
        'Community rallies and awareness campaigns',
        'OVC (Orphans and Vulnerable Children) support programs',
      ],
    },
    {
      number: '04',
      icon: '✊',
      title: 'GBV Prevention & Response',
      subtitle: 'Safe Spaces, Justice & Healing',
      desc: 'SOWCHAN creates safe spaces for survivors of gender-based violence. We provide integrated support services and work to challenge the norms that put women and girls at risk.',
      activities: [
        'Safe spaces for women and girls to speak out and access support',
        'Psychosocial support, legal referrals, and health services for GBV survivors',
        'Community dialogue and advocacy against harmful gender norms',
        'Capacity-building programs for community leaders on GBV prevention',
        'Engaging men and boys as allies in gender equality',
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Our Programs — SOWCHAN</title>
        <meta name="description" content="SOWCHAN's programs cover health, economic empowerment, education, and GBV response across Nigeria." />
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
            <span style={{ color: '#F5C200' }} className="text-sm font-semibold uppercase tracking-widest">What We Do</span>
          </div>
          <h1
            style={{ fontFamily: 'Playfair Display, serif', color: 'white' }}
            className="text-5xl md:text-6xl font-black"
          >
            Our <span style={{ color: '#F5C200' }}>Programs</span>
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ backgroundColor: '#FFFDF0' }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-xl leading-relaxed">
            SOWCHAN's programs address the interconnected challenges facing women and children living with HIV/AIDS — 
            from healthcare and education to economic independence and safety from violence.
          </p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section style={{ backgroundColor: '#f5f0e8' }} className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {aims.map((aim, i) => (
            <div
              key={aim.number}
              className={`flex flex-col lg:flex-row gap-0 overflow-hidden shadow-md ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Color panel */}
              <div
                className="lg:w-1/3 p-10 flex flex-col justify-center"
                style={{ backgroundColor: i % 2 === 0 ? '#1A1A1A' : '#C0000C' }}
              >
                <div className="text-6xl mb-4">{aim.icon}</div>
                <div
                  style={{ color: '#F5C200', fontFamily: 'Playfair Display, serif' }}
                  className="text-6xl font-black opacity-20 leading-none"
                >
                  {aim.number}
                </div>
                <h3
                  style={{ fontFamily: 'Playfair Display, serif', color: 'white' }}
                  className="text-3xl font-bold mt-2 mb-2"
                >
                  {aim.title}
                </h3>
                <p style={{ color: '#F5C200' }} className="text-sm font-semibold uppercase tracking-wider">
                  {aim.subtitle}
                </p>
              </div>

              {/* Content */}
              <div className="lg:w-2/3 p-10 bg-white">
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">{aim.desc}</p>
                <h4
                  style={{ color: '#1A1A1A', fontFamily: 'Playfair Display, serif' }}
                  className="text-lg font-bold mb-4"
                >
                  Key Activities:
                </h4>
                <ul className="space-y-2">
                  {aim.activities.map((act) => (
                    <li key={act} className="flex items-start gap-3 text-gray-600 text-sm">
                      <span style={{ color: '#F5C200', fontWeight: 'bold', marginTop: '2px' }}>▸</span>
                      {act}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMMUNITY OUTREACH */}
      <section style={{ backgroundColor: '#1A1A1A' }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: 'Playfair Display, serif', color: 'white' }} className="text-3xl font-bold mb-4">
            Community Mobilization
          </h2>
          <p className="text-gray-400 leading-relaxed">
            SOWCHAN support groups have been mobilizing communities through aggressive HIV Prevention Sensitization 
            programs, capacity-building programs for young women, feminists (male and female), and community leaders 
            on GBV prevention and response — including community dialogue meetings providing health education on 
            HIV/TB, Malaria, PMTCT, positive living, and maternal and infant mortality prevention.
          </p>
        </div>
      </section>
    </>
  );
}
