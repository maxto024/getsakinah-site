'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Sakinah?",
      answer:
        "Sakinah is a privacy-focused prayer companion app that helps Muslims track their prayers, find nearby mosques, find Qibla direction, and stay motivated through community features. The name \u2018Sakinah\u2019 means tranquility and peace in Arabic.",
    },
    {
      question: "Do I need an account?",
      answer:
        "No. Core features like prayer times, one-tap logging, streaks, mosque finder, and Qibla work without any sign-in. You only need to create an account if you want to sync progress across devices and participate in community features (groups, challenges, leaderboards).",
    },
    {
      question: "How does prayer tracking work?",
      answer:
        "Tap once to log each of your five daily prayers as On Time, Late, or Missed. The app tracks your streaks, completion rates, punctuality, and best days over time so you can see your progress clearly.",
    },
    {
      question: "How are prayer times calculated?",
      answer:
        "Sakinah uses your device\u2019s location to calculate accurate prayer times based on your preferred calculation method (e.g., North America, Muslim World League). You can also choose your Asr juristic preference (Hanafi or Shafi\u2019i) in Settings.",
    },
    {
      question: "What data does Sakinah collect?",
      answer:
        "Sakinah collects only prayer timestamps and optional location data for mosque finding and prayer times. All data is stored locally on your device. We never collect personal information, browsing data, or any tracking information.",
    },
    {
      question: "Is my data sold or shared?",
      answer:
        "No. Sakinah has no ads, no analytics SDKs, and no third-party tracking. Your data stays on your device. We do not sell, share, or transmit your data to anyone.",
    },
    {
      question: "How do I delete my account?",
      answer:
        "Open the app \u2192 Settings \u2192 Account \u2192 Delete Account. This permanently removes all your data. For more details, visit our Delete Account page.",
    },
    {
      question: "Is Sakinah free to use?",
      answer:
        "Yes. Sakinah is completely free with no ads, premium features, or hidden costs. Our mission is to serve the Muslim community without barriers.",
    },
    {
      question: "Does Sakinah work offline?",
      answer:
        "Core prayer tracking and Qibla features work offline. Mosque finding and community features require an internet connection. Your prayer data is always stored locally on your device.",
    },
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
            Find answers to common questions about Sakinah and how it can support your prayer practice.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 sakinah-rounded shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] sakinah-rounded"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-[var(--color-primary)]">
                      {faq.question}
                    </h3>
                    <span
                      className={`text-2xl text-[var(--color-primary)] transition-transform duration-200 ${
                        openIndex === index ? 'rotate-45' : ''
                      }`}
                    >
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:support@getsakinah.org"
                className="inline-block sakinah-primary sakinah-rounded text-white px-8 py-3 font-semibold hover:bg-[#0d4429] transition-colors shadow-sm"
              >
                Contact Support
              </a>
              <Link
                href="/delete-account"
                className="text-[var(--color-primary)] font-semibold hover:underline"
              >
                Delete Account →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
