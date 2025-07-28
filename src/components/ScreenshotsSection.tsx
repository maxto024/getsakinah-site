'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ScreenshotsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshots = [
    {
      title: "Prayer Tracking",
      description:
        "Log each of your five daily prayers in one tap. See timestamps, statuses (on-time, late, missed) and build healthy habits over time.",
      image: "/screenshots/home_screen_dark.png",
    },
    {
      title: "Mosque Finder",
      description:
        "Discover nearby mosques with live prayer times, distance estimates, and directions—perfect for when you’re on the go.",
      image: "/screenshots/nearByMosque_dark.png",
    },
    {
      title: "Prayer Analytics",
      description:
        "Visualize your performance with streaks, completion rates, and your best days over 7, 30 or all-time windows—insights that motivate you forward.",
      image: "/screenshots/prayer_analytics_dark.png",
    },
    {
      title: "Knowledge Hub",
      description:
        "Access curated ayahs and hadiths tied to each prayer. Deepen your understanding with authentic sources and daily reflections.",
      image: "/screenshots/prayer_analytics_2_dark.png",
    },
  ];

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  return (
    <section className="gradient-bg py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)]">
            See Sakinah in Action
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Explore how Sakinah empowers your daily prayers—track, discover, and grow with confidence.
          </p>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm sakinah-rounded p-6 mt-8 max-w-2xl mx-auto shadow-sm">
            <blockquote className="text-lg italic text-gray-800 dark:text-gray-200 mb-4">
              “Prayer is the key to Paradise.”
            </blockquote>
            <cite className="text-[var(--color-primary)] font-semibold">
              — Sunan An-Nasa’i 1036
            </cite>
          </div>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-gray-800 sakinah-rounded shadow-2xl overflow-hidden">
            <div className="bg-gray-900 p-4">
              <div className="relative aspect-[9/16] max-w-sm mx-auto sakinah-rounded overflow-hidden">
                <Image
                  src={screenshots[currentIndex].image}
                  alt={screenshots[currentIndex].title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm w-12 h-12 sakinah-rounded shadow-md flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-colors"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm w-12 h-12 sakinah-rounded shadow-md flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-colors"
            >
              →
            </button>
          </div>

          {/* Title & Description */}
          <div className="mt-8 text-center px-4">
            <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-2">
              {screenshots[currentIndex].title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              {screenshots[currentIndex].description}
            </p>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {screenshots.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentIndex
                    ? 'bg-[var(--color-primary)]'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Download Buttons */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="sakinah-primary sakinah-rounded text-white px-8 py-4 font-semibold text-lg hover:bg-[#0d4429] transition-colors shadow-sm">
              Download for iOS
            </button>
            <button className="sakinah-secondary sakinah-rounded text-white px-8 py-4 font-semibold text-lg hover:bg-[#157347] transition-colors shadow-sm">
              Download for Android
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}