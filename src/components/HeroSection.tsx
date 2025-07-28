'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section className="gradient-bg min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Branding + Tagline */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[var(--color-primary)]">
            Sakinah
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300">
            Your all-in-one prayer companion.  
            Log your salah, discover mosques nearby, and build unbreakable prayer habits—all grounded in the Quran &amp; Sunnah.
          </p>

          {/* Feature Highlights */}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <li className="flex items-start space-x-3">
              <span className="text-2xl">✅</span>
              <span>
                **Automatic Prayer Logging**  
                Tap once and you’re done—no more manual time tracking.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-2xl">📍</span>
              <span>
                **Nearby Mosques**  
                Find live prayer times and directions within minutes.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-2xl">📊</span>
              <span>
                **Insights & Streaks**  
                Visualize your consistency and earn motivation badges.
              </span>
            </li>
          </ul>

          {/* Quranic Inspiration */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm sakinah-rounded p-6 shadow-lg mx-auto max-w-2xl">
            <blockquote className="text-base md:text-lg italic text-gray-800 dark:text-gray-200 mb-3">
              “Indeed, prayer has been decreed upon the believers a decree of specified times.”  
            </blockquote>
            <cite className="block text-sm text-[var(--color-primary)] font-medium">
              — Quran 4:103
            </cite>
          </div>

          {/* Call To Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#download-ios"
              className="sakinah-primary sakinah-rounded text-white px-8 py-4 font-semibold text-lg hover:bg-[#0d4429] transition-colors shadow-md"
            >
              Download for iOS
            </a>
            <a
              href="#download-android"
              className="sakinah-secondary sakinah-rounded text-white px-8 py-4 font-semibold text-lg hover:bg-[#157347] transition-colors shadow-md"
            >
              Download for Android
            </a>
          </div>

          {/* Trust & Privacy */}
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            100% free • Privacy-first (we never sell your data) • No ads • Trusted by thousands
          </p>
        </div>
      </div>
    </section>
  );
}