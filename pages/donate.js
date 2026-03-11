import Head from 'next/head';
import { useState } from 'react';

const amounts = [1000, 2500, 5000, 10000, 25000, 50000];

const bankDetails = [
  { bank: 'First Bank of Nigeria', account: '2034567891', name: 'SOWCHAN' },
  { bank: 'Access Bank', account: '0123456789', name: 'Society for Women & Children Living with HIV/AIDS in Nigeria' },
];

const impactItems = [
  { amount: '₦1,000', impact: 'Provides health education materials for one woman' },
  { amount: '₦2,500', impact: 'Covers transport for a support group meeting' },
  { amount: '₦5,000', impact: 'Feeds an OVC child for one month' },
  { amount: '₦10,000', impact: 'Provides ARV medication support for one patient' },
  { amount: '₦25,000', impact: 'Sponsors one woman through entrepreneurship training' },
  { amount: '₦50,000', impact: 'Funds a full community outreach program' },
];

export default function Donate() {
  const [selected, setSelected] = useState(5000);
  const [custom, setCustom] = useState('');

  const finalAmount = custom ? Number(custom) : selected;

  return (
    <>
      <Head>
        <title>Donate & Support — SOWCHAN</title>
        <meta name="description" content="Support SOWCHAN's work empowering women and children living with HIV/AIDS in Nigeria. Donate today." />
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
            <span style={{ color: '#F5C200' }} className="text-sm font-semibold uppercase tracking-widest">Make a Difference</span>
          </div>
          <h1
            style={{ fontFamily: 'Playfair Display, serif', color: 'white' }}
            className="text-5xl md:text-6xl font-black mb-4"
          >
            Support <span style={{ color: '#F5C200' }}>SOWCHAN</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
            Your gift directly empowers women and children living with HIV/AIDS across Nigeria — funding health, education, and freedom from violence.
          </p>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section style={{ backgroundColor: '#C0000C' }} className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
            {[
              { n: '100%', label: 'Goes to Programs' },
              { n: '18+', label: 'Years of Impact' },
              { n: '36', label: 'States Reached' },
              { n: 'NGO', label: 'CAC Registered' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: 'Playfair Display, serif', color: '#F5C200' }} className="text-3xl font-black">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-red-100 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section style={{ backgroundColor: '#FFFDF0' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* LEFT — Payment Methods */}
            <div className="lg:col-span-2">
              <div className="section-divider" style={{ margin: '0 0 1.5rem 0' }}></div>
              <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-3xl font-bold mb-8">
                Make a Donation
              </h2>

              {/* Amount Selection */}
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Select Amount (₦)</p>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => { setSelected(amt); setCustom(''); }}
                    className="py-3 text-sm font-bold border-2 transition-all"
                    style={{
                      borderColor: selected === amt && !custom ? '#F5C200' : '#ddd',
                      backgroundColor: selected === amt && !custom ? '#F5C200' : 'white',
                      color: selected === amt && !custom ? '#1A1A1A' : '#444',
                    }}
                  >
                    ₦{amt.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-10">
                <label className="block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Or Enter Custom Amount (₦)
                </label>
                <input
                  type="number"
                  min="100"
                  placeholder="e.g. 15000"
                  value={custom}
                  onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
                  className="w-full px-4 py-3 border-2 text-gray-800 outline-none text-lg"
                  style={{ borderColor: custom ? '#F5C200' : '#ddd' }}
                />
              </div>

              {/* Payment Methods */}
              <h3 style={{ fontFamily: 'Playfair Display, serif' }} className="text-xl font-bold mb-5">
                Choose How to Pay
              </h3>

              <div className="space-y-4">

                {/* Paystack */}
                <div className="border-2 border-gray-200 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="font-bold text-gray-800">Paystack</span>
                      <span className="ml-2 text-xs text-gray-400 uppercase tracking-wider">Card / Bank / USSD</span>
                    </div>
                    <span className="text-2xl">💳</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">Pay securely with your debit/credit card or Nigerian bank account.</p>
                  <a
                    href="https://paystack.com/pay/sowchan"
                    target="_blank"
                    rel="noreferrer"
                    style={{ backgroundColor: '#1A1A1A', color: '#F5C200' }}
                    className="inline-block font-bold uppercase tracking-wider px-6 py-3 text-sm hover:opacity-80 transition-opacity"
                  >
                    Donate ₦{finalAmount ? finalAmount.toLocaleString() : '—'} via Paystack →
                  </a>
                </div>

                {/* Flutterwave */}
                <div className="border-2 border-gray-200 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="font-bold text-gray-800">Flutterwave</span>
                      <span className="ml-2 text-xs text-gray-400 uppercase tracking-wider">Card / Mobile Money</span>
                    </div>
                    <span className="text-2xl">🌍</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">Supports multiple African currencies and international cards.</p>
                  <a
                    href="https://flutterwave.com/pay/sowchan"
                    target="_blank"
                    rel="noreferrer"
                    style={{ backgroundColor: '#C0000C', color: 'white' }}
                    className="inline-block font-bold uppercase tracking-wider px-6 py-3 text-sm hover:opacity-80 transition-opacity"
                  >
                    Donate via Flutterwave →
                  </a>
                </div>

                {/* PayPal */}
                <div className="border-2 border-gray-200 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="font-bold text-gray-800">PayPal</span>
                      <span className="ml-2 text-xs text-gray-400 uppercase tracking-wider">International Donors</span>
                    </div>
                    <span className="text-2xl">🌐</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">For diaspora and international supporters donating in USD, GBP, EUR etc.</p>
                  <a
                    href="https://paypal.me/sowchan"
                    target="_blank"
                    rel="noreferrer"
                    style={{ backgroundColor: '#003087', color: 'white' }}
                    className="inline-block font-bold uppercase tracking-wider px-6 py-3 text-sm hover:opacity-80 transition-opacity"
                  >
                    Donate via PayPal →
                  </a>
                </div>

                {/* Bank Transfer */}
                <div className="border-2 border-gray-200 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="font-bold text-gray-800">Bank Transfer</span>
                      <span className="ml-2 text-xs text-gray-400 uppercase tracking-wider">Direct to Account</span>
                    </div>
                    <span className="text-2xl">🏦</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">Transfer directly to SOWCHAN's bank account. Use your name as the narration.</p>
                  <div className="space-y-3">
                    {bankDetails.map((b) => (
                      <div key={b.bank} className="p-4" style={{ backgroundColor: '#f5f0e8' }}>
                        <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Bank</p>
                        <p className="font-bold text-gray-800 text-sm">{b.bank}</p>
                        <p className="text-xs uppercase tracking-wider text-gray-500 mt-2 mb-1">Account Number</p>
                        <p className="font-mono font-bold text-gray-800 text-lg tracking-widest">{b.account}</p>
                        <p className="text-xs uppercase tracking-wider text-gray-500 mt-2 mb-1">Account Name</p>
                        <p className="font-bold text-gray-800 text-sm">{b.name}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-gray-400">
                    ✉️ After transfer, email <strong>swchan_2005@yahoo.com</strong> with your name, amount and reference so we can acknowledge your gift.
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT — Impact + In Kind + Volunteer */}
            <div className="space-y-8">

              {/* Impact */}
              <div style={{ backgroundColor: '#1A1A1A' }} className="p-8">
                <h3 style={{ fontFamily: 'Playfair Display, serif', color: '#F5C200' }} className="text-xl font-bold mb-5">
                  Your Gift Does This
                </h3>
                <ul className="space-y-4">
                  {impactItems.map((item) => (
                    <li key={item.amount} className="flex items-start gap-3 text-sm">
                      <span style={{ color: '#1A1A1A', backgroundColor: '#F5C200', fontWeight: 'bold', padding: '1px 6px', fontSize: '11px', whiteSpace: 'nowrap', marginTop: '2px' }}>
                        {item.amount}
                      </span>
                      <span className="text-gray-300">{item.impact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Donate in Kind */}
              <div style={{ borderLeft: '4px solid #F5C200', backgroundColor: '#f5f0e8' }} className="p-6">
                <h3 style={{ fontFamily: 'Playfair Display, serif' }} className="text-lg font-bold mb-2">
                  🤝 Donate in Kind
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  We welcome donations of medications, food items, school supplies, clothing, and equipment for our support groups across Nigeria.
                </p>
                <a
                  href="mailto:swchan_2005@yahoo.com"
                  style={{ backgroundColor: '#F5C200', color: '#1A1A1A' }}
                  className="inline-block font-bold uppercase tracking-wider px-5 py-2 text-xs hover:opacity-80 transition-opacity"
                >
                  Contact Us to Arrange →
                </a>
              </div>

              {/* Volunteer */}
              <div style={{ borderLeft: '4px solid #C0000C', backgroundColor: '#f5f0e8' }} className="p-6">
                <h3 style={{ fontFamily: 'Playfair Display, serif' }} className="text-lg font-bold mb-2">
                  🙋 Volunteer With Us
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Give your time and skills. We need volunteers in healthcare, legal aid, counseling, communications, and community outreach.
                </p>
                <a
                  href="/contact"
                  style={{ backgroundColor: '#C0000C', color: 'white' }}
                  className="inline-block font-bold uppercase tracking-wider px-5 py-2 text-xs hover:opacity-80 transition-opacity"
                >
                  Get Involved →
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CLOSING QUOTE */}
      <section style={{ backgroundColor: '#1A1A1A' }} className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p style={{ fontFamily: 'Playfair Display, serif', color: 'white' }} className="text-2xl font-semibold italic">
            "Every gift — no matter the size — helps a woman reclaim her dignity and a child keep their future."
          </p>
          <div style={{ color: '#F5C200' }} className="mt-4 text-xs uppercase tracking-widest">— SOWCHAN</div>
        </div>
      </section>
    </>
  );
}
