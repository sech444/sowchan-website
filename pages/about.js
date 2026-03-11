import Head from 'next/head';

export default function About() {
  const values = [
    { title: 'Commitment', desc: 'Dedicated to reaching every target population across Nigeria.' },
    { title: 'Hardwork', desc: 'Ensuring organizational vision, mission and values are met every day.' },
    { title: 'Integrity', desc: 'Upholding policies and procedures with full accountability.' },
    { title: 'Transparency', desc: 'Open and accountable in all organizational and financial management.' },
  ];

  return (
    <>
      <Head>
        <title>About Us — SOWCHAN</title>
        <meta name="description" content="Learn about SOWCHAN's mission, vision, history and core values." />
      </Head>

      {/* PAGE HERO */}
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
            <span style={{ color: '#F5C200' }} className="text-sm font-semibold uppercase tracking-widest">Our Story</span>
          </div>
          <h1
            style={{ fontFamily: 'Playfair Display, serif', color: 'white' }}
            className="text-5xl md:text-6xl font-black leading-tight"
          >
            About <span style={{ color: '#F5C200' }}>SOWCHAN</span>
          </h1>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section style={{ backgroundColor: '#FFFDF0' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-divider" style={{ margin: '0 0 2rem 0' }}></div>
              <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-4xl font-bold mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Society for Women and Children Living with HIV/AIDS (SOWCHAN) is a National Network Organization 
                formed as a Non-Government Organization comprising support groups of women and children living 
                with HIV/AIDS across Nigeria. We are registered with the Corporate Affairs Commission in Nigeria 
                with a board of trustees and registered members nationwide.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are a leading HIV and AIDS, Sexual and Reproductive Health and Rights organization working 
                with women and children living with HIV, women with disabilities, healthcare providers, young people, 
                community and religious leaders, civil society organizations, the media, government agencies, and 
                development partners.
              </p>
              <p className="text-gray-600 leading-relaxed">
                SOWCHAN is characterized by committed, dedicated, and hardworking members and staff whose skills 
                and involvement have proven results in saving lives and reducing the impact of developmental issues 
                in the communities where we work.
              </p>
            </div>

            {/* Stats card */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: '2005', label: 'Year Founded' },
                { n: 'Abuja', label: 'Headquarters' },
                { n: 'CAC', label: 'Registered NGO' },
                { n: 'National', label: 'Network Reach' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-8 text-center"
                  style={{ backgroundColor: '#1A1A1A' }}
                >
                  <div
                    style={{ fontFamily: 'Playfair Display, serif', color: '#F5C200' }}
                    className="text-3xl font-black mb-2"
                  >
                    {item.n}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section style={{ backgroundColor: '#f5f0e8' }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-divider"></div>
          <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-4xl font-bold mb-6">Our Vision</h2>
          <p className="text-gray-600 text-xl leading-relaxed italic">
            SOWCHAN envisions a country where Women, Girls, Children living with HIV and AIDS, Orphans and 
            Vulnerable Children are given <strong>equal rights and privileges</strong> like every other member of society.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section style={{ backgroundColor: '#FFFDF0' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-divider"></div>
            <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-4xl font-bold">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="card-hover p-8 rounded-sm"
                style={{
                  backgroundColor: i % 2 === 0 ? '#1A1A1A' : '#C0000C',
                  color: 'white',
                }}
              >
                <div
                  style={{ color: '#F5C200', fontFamily: 'Playfair Display, serif' }}
                  className="text-5xl font-black opacity-30 mb-2"
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif' }} className="text-xl font-bold mb-3">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-80">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GBV & HIV LINK */}
      <section style={{ backgroundColor: '#f5f0e8' }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-divider"></div>
          <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-4xl font-bold text-center mb-10">
            Our Approach to GBV & HIV
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              SOWCHAN Support Groups address gender-based violence (GBV) by creating safe spaces for women and girls 
              to speak out, heal, and access support services. We actively engage men and boys as partners and allies 
              in advancing gender equality — recognizing that sustainable change requires the involvement of all genders.
            </p>
            <p>
              We acknowledge that gender inequality is a fundamental driver of GBV. Harmful social norms, unequal 
              power relations, and discriminatory practices continue to place women and girls at greater risk of violence. 
              SOWCHAN works to challenge these norms through community dialogue, advocacy, and awareness campaigns 
              that promote respect, dignity, and equal rights for all.
            </p>
            <p>
              We also recognize the strong link between GBV and HIV transmission. Violence increases women's 
              vulnerability to HIV by limiting their ability to negotiate safe sex, access health services, or 
              disclose their status safely. Therefore, we address GBV both as a <strong>cause and a consequence</strong> of HIV transmission.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
