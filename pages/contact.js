import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, connect to a form service like Formspree or EmailJS
    setSubmitted(true);
  };

  const objectives = [
    'Encourage formation of new, and strengthen existing support groups of women living with HIV/AIDS',
    'Empower WLHIV in Nigeria with adequate knowledge and skills to deal with the HIV and AIDS pandemic',
    'Advocate for the protection of human rights of WLHIV',
    'Solicit support for WLHIV',
    'Strengthen cooperation and collaborate with the Nigerian government and other stakeholders',
    'Provide integrated support services including psychosocial support, legal referrals, health services, and economic empowerment for survivors of GBV and people living with HIV',
    'Address stigma, discrimination, and harmful gender norms that increase both GBV and HIV risks',
  ];

  return (
    <>
      <Head>
        <title>Contact Us — SOWCHAN</title>
        <meta name="description" content="Contact SOWCHAN — Society for Women and Children Living with HIV/AIDS in Nigeria." />
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
            <span style={{ color: '#F5C200' }} className="text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
          </div>
          <h1
            style={{ fontFamily: 'Playfair Display, serif', color: 'white' }}
            className="text-5xl md:text-6xl font-black"
          >
            Contact <span style={{ color: '#F5C200' }}>Us</span>
          </h1>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section style={{ backgroundColor: '#FFFDF0' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <div>
              <div className="section-divider" style={{ margin: '0 0 2rem 0' }}></div>
              <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-4xl font-bold mb-8">
                Reach Out to Us
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-sm flex-shrink-0"
                    style={{ backgroundColor: '#F5C200' }}
                  >
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Our Address</h4>
                    <p className="text-gray-600">HOUSE 59 SENATOR ASHIRU DRIVE LAVISTA COURT ESTATE
                GALADIMAWA,  ABUJA FCT. Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-sm flex-shrink-0"
                    style={{ backgroundColor: '#F5C200' }}
                  >
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone Numbers</h4>
                    <p className="text-gray-600">08023066297<br />08160874054</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-sm flex-shrink-0"
                    style={{ backgroundColor: '#F5C200' }}
                  >
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email Address</h4>
                    <p className="text-gray-600">swchan_2005@yahoo.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-sm flex-shrink-0"
                    style={{ backgroundColor: '#F5C200' }}
                  >
                    <span className="text-xl">🌐</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Website</h4>
                    <p className="text-gray-600">www.sowchan.org</p>
                  </div>
                </div>
              </div>

              {/* Objectives summary */}
              <div className="mt-12">
                <h3 style={{ fontFamily: 'Playfair Display, serif' }} className="text-2xl font-bold mb-4">
                  Our Objectives
                </h3>
                <ul className="space-y-2">
                  {objectives.map((obj) => (
                    <li key={obj} className="flex items-start gap-3 text-sm text-gray-600">
                      <span style={{ color: '#C0000C', fontWeight: 'bold', marginTop: '2px' }}>▸</span>
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div
                className="p-10 shadow-sm"
                style={{ backgroundColor: '#1A1A1A' }}
              >
                <h3
                  style={{ fontFamily: 'Playfair Display, serif', color: 'white' }}
                  className="text-2xl font-bold mb-6"
                >
                  Send Us a Message
                </h3>

                {submitted ? (
                  <div
                    className="p-6 text-center"
                    style={{ backgroundColor: '#F5C200' }}
                  >
                    <div className="text-4xl mb-3">✅</div>
                    <h4 style={{ fontFamily: 'Playfair Display, serif' }} className="text-xl font-bold text-gray-900 mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-gray-700 text-sm">Thank you for reaching out. We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2 uppercase tracking-wider">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-white text-sm outline-none focus:ring-2"
                        style={{ backgroundColor: '#2d2d2d', border: '1px solid #444', focusRingColor: '#F5C200' }}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2 uppercase tracking-wider">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-white text-sm outline-none"
                        style={{ backgroundColor: '#2d2d2d', border: '1px solid #444' }}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2 uppercase tracking-wider">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-white text-sm outline-none"
                        style={{ backgroundColor: '#2d2d2d', border: '1px solid #444' }}
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2 uppercase tracking-wider">Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-white text-sm outline-none resize-none"
                        style={{ backgroundColor: '#2d2d2d', border: '1px solid #444' }}
                        placeholder="Write your message here..."
                      />
                    </div>
                    <button
                      type="submit"
                      style={{ backgroundColor: '#C0000C', color: 'white' }}
                      className="w-full py-4 font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
                    >
                      Send Message
                    </button>
                    <p className="text-gray-600 text-xs text-center">
                      * To enable form submission, connect this to <a href="https://formspree.io" target="_blank" rel="noreferrer" className="underline text-yellow-500">Formspree</a> or EmailJS.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
