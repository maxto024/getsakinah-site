'use client';

import { useState } from 'react';

export default function ScreenshotsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const screenshots = [
    {
      title: "Prayer Tracking",
      description: "Simple and beautiful prayer logging interface",
      image: "/screenshots/prayer-log.png" // These would be actual screenshots
    },
    {
      title: "Mosque Finder",
      description: "Find nearby mosques with prayer times",
      image: "/screenshots/mosque-finder.png"
    },
    {
      title: "Prayer Insights",
      description: "Visualize your prayer consistency",
      image: "/screenshots/insights.png"
    },
    {
      title: "Learning Hub",
      description: "Islamic knowledge at your fingertips",
      image: "/screenshots/learning.png"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="gradient-bg py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)]">
            See Sakinah in Action
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the beautiful, intuitive interface designed to make your spiritual practice effortless.
          </p>

          {/* Hadith Quote */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm sakinah-rounded p-6 mt-8 max-w-2xl mx-auto shadow-sm">
            <blockquote className="text-lg italic text-gray-800 dark:text-gray-200 mb-4">
              &ldquo;Prayer is the key to Paradise.&rdquo;
            </blockquote>
            <cite className="text-[var(--color-primary)] font-semibold">
              — Sunan An-Nasa&apos;i 1036
            </cite>
          </div>
        </div>

        {/* Screenshots Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-gray-800 sakinah-rounded shadow-2xl overflow-hidden">
            {/* Phone Frame Mock */}
            <div className="bg-gray-900 p-4">
              <div className="bg-gray-100 dark:bg-gray-700 sakinah-rounded aspect-[9/16] max-w-sm mx-auto flex items-center justify-center">
                {/* Placeholder for actual screenshots */}
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-[var(--color-primary)] sakinah-rounded mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                    📱
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">
                    {screenshots[currentIndex].title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {screenshots[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button
                onClick={prevSlide}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm w-12 h-12 sakinah-rounded shadow-md flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-colors"
              >
                ←
              </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button
                onClick={nextSlide}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm w-12 h-12 sakinah-rounded shadow-md flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-colors"
              >
                →
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-[var(--color-primary)]' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* App Store Buttons */}
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