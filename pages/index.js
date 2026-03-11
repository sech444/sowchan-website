import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const stats = [
    { number: '18+', label: 'Years of Service' },
    { number: '36', label: 'States Reached' },
    { number: '1000s', label: 'Lives Impacted' },
    { number: '100+', label: 'Support Groups' },
  ];

  const programs = [
    {
      icon: '🩺',
      title: 'Health & HIV/AIDS',
      desc: 'Providing HIV/AIDS, TB, malaria, maternal health and nutrition education across Nigeria.',
    },
    {
      icon: '💼',
      title: 'Economic Empowerment',
      desc: 'Equipping women with entrepreneurship training and income-generating skills.',
    },
    {
      icon: '📚',
      title: 'Education & Skills',
      desc: 'Supporting girls and boys with education and skills to expand their choices.',
    },
    {
      icon: '✊',
      title: 'GBV Response',
      desc: 'Creating safe spaces for survivors of gender-based violence to heal and access support.',
    },
  ];

  return (
    <>
      <Head>
        <title>SOWCHAN — Society for Women and Children Living with HIV/AIDS in Nigeria</title>
        <meta name="description" content="SOWCHAN is Nigeria's leading network organization supporting women and children living with HIV/AIDS, fighting gender-based violence, and promoting health and empowerment." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HERO */}
      <section
        className="hero-pattern relative min-h-screen flex items-center"
        style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2d1a00 50%, #1A1A1A 100%)' }}
      >
        {/* Decorative gold circle */}
        <div
          className="absolute right-0 top-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #F5C200, transparent)', transform: 'translate(30%, -30%)' }}
        />
        <div
          className="absolute left-0 bottom-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #C0000C, transparent)', transform: 'translate(-30%, 30%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-3xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 mb-6 animate-fadeInUp animate-delay-1">
              <div style={{ width: '30px', height: '2px', backgroundColor: '#F5C200' }}></div>
              <span style={{ color: '#F5C200' }} className="text-sm font-semibold uppercase tracking-widest">
                Est. 2005 · Abuja, Nigeria
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{ fontFamily: 'Playfair Display, serif', color: 'white' }}
              className="text-5xl md:text-7xl font-black leading-none mb-6 animate-fadeInUp animate-delay-2"
            >
              Strength.{' '}
              <span style={{ color: '#F5C200' }}>Dignity.</span>
              <br />
              Purpose.
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-fadeInUp animate-delay-3">
              SOWCHAN is Nigeria's national network of support groups for women and children living with HIV/AIDS — fighting stigma, empowering communities, and restoring hope.
            </p>

            <div className="flex flex-wrap gap-4 animate-fadeInUp animate-delay-4">
              <Link
                href="/about"
                style={{ backgroundColor: '#F5C200', color: '#1A1A1A' }}
                className="font-bold uppercase tracking-wider px-8 py-4 text-sm hover:opacity-90 transition-opacity"
              >
                Learn About Us
              </Link>
              <Link
                href="/programs"
                style={{ border: '2px solid #C0000C', color: 'white' }}
                className="font-bold uppercase tracking-wider px-8 py-4 text-sm hover:bg-red-900 transition-colors"
              >
                Our Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ backgroundColor: '#F5C200' }} className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}
                  className="text-4xl font-black"
                >
                  {stat.number}
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider text-gray-700 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section style={{ backgroundColor: '#FFFDF0' }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-divider"></div>
          <h2
            style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            We are more than our diagnosis.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We show ourselves as women of <strong>strength, dignity, and purpose</strong> — not as victims who live in fear and isolation. 
            SOWCHAN is a National Network Organization comprising support groups of women and children 
            living with HIV/AIDS across every state in Nigeria.
          </p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section style={{ backgroundColor: '#f5f0e8' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-divider"></div>
            <h2
              style={{ fontFamily: 'Playfair Display, serif' }}
              className="text-4xl font-bold text-gray-900 mb-3"
            >
              What We Do
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Our programs tackle the root causes of vulnerability — from health to economic empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((prog) => (
              <div
                key={prog.title}
                className="card-hover bg-white p-8 rounded-sm shadow-sm border-t-4"
                style={{ borderColor: '#F5C200' }}
              >
                <div className="text-4xl mb-4">{prog.icon}</div>
                <h3
                  style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}
                  className="text-xl font-bold mb-3"
                >
                  {prog.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{prog.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/programs"
              style={{ backgroundColor: '#1A1A1A', color: '#F5C200' }}
              className="inline-block font-bold uppercase tracking-wider px-8 py-4 text-sm hover:opacity-80 transition-opacity"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* VISION QUOTE */}
      <section
        style={{ backgroundColor: '#C0000C' }}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            style={{ color: '#F5C200', fontFamily: 'Playfair Display, serif' }}
            className="text-6xl font-black leading-none mb-6 opacity-30"
          >
            "
          </div>
          <blockquote
            style={{ fontFamily: 'Playfair Display, serif', color: 'white' }}
            className="text-2xl md:text-3xl font-semibold italic leading-relaxed -mt-8"
          >
            SOWCHAN envisions a country where Women, Girls, and Children living with HIV and AIDS 
            are given equal rights and privileges like every other member of society.
          </blockquote>
          <div className="mt-6 text-yellow-200 text-sm font-semibold uppercase tracking-widest">
            — Our Vision
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#FFFDF0' }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            style={{ fontFamily: 'Playfair Display, serif' }}
            className="text-4xl font-bold mb-6"
          >
            Join Us in Making a Difference
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Whether you want to volunteer, partner with us, or support our work — your involvement matters.
          </p>
          <Link
            href="/contact"
            style={{ backgroundColor: '#C0000C', color: 'white' }}
            className="inline-block font-bold uppercase tracking-wider px-10 py-4 text-sm hover:opacity-90 transition-opacity"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}
