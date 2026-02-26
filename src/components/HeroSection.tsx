export default function HeroSection() {
  return (
    <section className="gradient-bg min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[var(--color-primary)]">
            Sakinah
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300">
            Accurate prayer times, one-tap logging, streaks, and community — all in one app.
            Build a consistent, mindful prayer routine with Qibla, nearby mosques, and progress insights.
          </p>

          {/* Feature Highlights */}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <li className="flex items-start space-x-3">
              <span className="text-2xl">🕐</span>
              <span className="text-gray-700 dark:text-gray-300">
                <strong className="text-[var(--color-primary)]">Accurate Prayer Times</strong><br />
                Based on your location and preferred calculation method.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-2xl">✅</span>
              <span className="text-gray-700 dark:text-gray-300">
                <strong className="text-[var(--color-primary)]">One-Tap Logging</strong><br />
                Log prayers as On Time, Late, or Missed. Track streaks and heatmaps.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-2xl">👥</span>
              <span className="text-gray-700 dark:text-gray-300">
                <strong className="text-[var(--color-primary)]">Community</strong><br />
                Join groups, challenges, and leaderboards to stay motivated together.
              </span>
            </li>
          </ul>

          {/* Quranic Inspiration */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm sakinah-rounded p-6 shadow-lg mx-auto max-w-2xl">
            <blockquote className="text-base md:text-lg italic text-gray-800 dark:text-gray-200 mb-3">
              &ldquo;Indeed, prayer has been decreed upon the believers a decree of specified times.&rdquo;
            </blockquote>
            <cite className="block text-sm text-[var(--color-primary)] font-medium">
              — Quran 4:103
            </cite>
          </div>

          {/* Call To Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://apps.apple.com/us/app/sakinah-prayer-companion/id6748843314"
              target="_blank"
              rel="noopener noreferrer"
              className="sakinah-primary sakinah-rounded text-white px-8 py-4 font-semibold text-lg hover:bg-[#0d4429] transition-colors shadow-md"
            >
              Download for iOS
            </a>
            <span className="sakinah-secondary sakinah-rounded text-white/70 px-8 py-4 font-semibold text-lg opacity-60 cursor-default">
              Android Coming Soon
            </span>
          </div>

          {/* Trust & Privacy */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            100% free &bull; Privacy-first &bull; No ads &bull; No sign-in required for core features
          </p>
        </div>
      </div>
    </section>
  );
}
