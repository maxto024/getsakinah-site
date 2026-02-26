'use client';

import { useState } from 'react';
import Image from 'next/image';

const screenshots = [
  {
    title: "Prayer Times & Logging",
    description:
      "See accurate prayer times with countdown, log each prayer in one tap as On Time, Late, or Missed, and track your daily streak.",
    image: "/screenshots/new/home_screen.png",
  },
  {
    title: "Prayer Analytics",
    description:
      "Visualize your spiritual journey with streaks, completion rates, punctuality stats, and your best days — over 7, 30, or all-time windows.",
    image: "/screenshots/new/performance_screen.png",
  },
  {
    title: "Nearby Mosques",
    description:
      "Discover mosques around you with distance, walking time, and one-tap directions. See which ones are open right now.",
    image: "/screenshots/new/nearby_mosques.png",
  },
  {
    title: "Qibla Compass",
    description:
      "Always know the direction to the Holy Kaaba with the built-in Qibla compass. Accurate to your exact location.",
    image: "/screenshots/new/qibla_finder.png",
  },
  {
    title: "Community",
    description:
      "Join local groups, see group streaks and member activity, and stay motivated with your community. Optional sign-in only.",
    image: "/screenshots/new/community_screen.png",
  },
  {
    title: "Group Activity",
    description:
      "See your group feed, participate in challenges, track rankings, and inspire each other to stay consistent.",
    image: "/screenshots/new/groups_screen.png",
  },
];

export default function ScreenshotsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    );

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)]">
            See Sakinah in Action
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Explore how Sakinah empowers your daily prayers — track, discover, and grow with confidence.
          </p>
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
              aria-label="Previous screenshot"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm w-12 h-12 sakinah-rounded shadow-md flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-colors"
              aria-label="Next screenshot"
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
                aria-label={`Go to screenshot ${idx + 1}`}
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
            <a
              href="https://apps.apple.com/us/app/sakinah-prayer-companion/id6748843314"
              target="_blank"
              rel="noopener noreferrer"
              className="sakinah-primary sakinah-rounded text-white px-8 py-4 font-semibold text-lg hover:bg-[#0d4429] transition-colors shadow-sm"
            >
              Download for iOS
            </a>
            <span className="sakinah-secondary sakinah-rounded text-white/70 px-8 py-4 font-semibold text-lg opacity-60 cursor-default">
              Android Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
