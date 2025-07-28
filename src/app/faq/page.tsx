'use client';

import { useState } from 'react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Sakinah?",
      answer: "Sakinah is a privacy-focused prayer companion app that helps Muslims track their prayers, find nearby mosques, and strengthen their spiritual connection. The name &apos;Sakinah&apos; means tranquility and peace in Arabic."
    },
    {
      question: "How does prayer tracking work?",
      answer: "Simply tap to log each of your five daily prayers. The app records only the timestamp and optional location data. You can view your prayer history, streaks, and consistency patterns over time."
    },
    {
      question: "What data does Sakinah collect?",
      answer: "Sakinah collects only prayer timestamps and optional location data when you choose to share it for mosque finding. We never collect personal information, browsing data, or any other tracking information. Your privacy is our priority."
    },
    {
      question: "How does the mosque finder work?",
      answer: "When you grant location permission, Sakinah shows nearby mosques with prayer times, contact information, and directions. All mosque data is sourced from verified Islamic organizations and community contributions."
    },
    {
      question: "Are the Quran verses and hadith authentic?",
      answer: "Yes, all Quranic verses and hadith in Sakinah are sourced from authentic Islamic texts and verified by Islamic scholars. Each quote includes proper attribution to its source."
    },
    {
      question: "Is Sakinah free to use?",
      answer: "Yes, Sakinah is completely free with no ads, premium features, or hidden costs. Our mission is to serve the Muslim community and support spiritual growth without barriers."
    },
    {
      question: "Does Sakinah work offline?",
      answer: "Core prayer tracking features work offline. Mosque finding and some learning content require an internet connection. Your prayer data is stored locally on your device."
    },
    {
      question: "How can I contribute to Sakinah?",
      answer: "You can contribute by providing feedback, reporting mosques in your area, or sharing Sakinah with your community. We also welcome donations to support development and server costs."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="gradient-bg py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--color-primary)]">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about Sakinah and how it can enhance your spiritual practice.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 sakinah-rounded shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] sakinah-rounded"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-[var(--color-primary)]">
                      {faq.question}
                    </h3>
                    <span className={`text-2xl text-[var(--color-primary)] transition-transform duration-200 ${
                      openIndex === index ? 'rotate-45' : ''
                    }`}>
                      +
                    </span>
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center bg-gray-50 dark:bg-gray-800 sakinah-rounded p-8">
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
              Still have questions?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We&apos;re here to help. Reach out to our team for support or feedback.
            </p>
            <button className="sakinah-primary sakinah-rounded text-white px-8 py-3 font-semibold hover:bg-[#0d4429] transition-colors shadow-sm">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}