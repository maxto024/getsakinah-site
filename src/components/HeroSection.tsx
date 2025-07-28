export default function HeroSection() {
  return (
    <section className="gradient-bg min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[var(--color-primary)]">
            Sakinah
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Your personal prayer companion. Track your prayers, find nearby mosques, 
            and strengthen your spiritual connection with the guidance of the Quran and Sunnah.
          </p>
          
          {/* Quran 4:103 Quote */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm sakinah-rounded shadow-lg p-8 mb-12 max-w-3xl mx-auto">
            <blockquote className="text-lg md:text-xl italic text-gray-800 dark:text-gray-200 mb-4">
              &ldquo;Indeed, prayer has been decreed upon the believers a decree of specified times.&rdquo;
            </blockquote>
            <cite className="text-[var(--color-primary)] font-semibold">
              — Quran 4:103
            </cite>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="sakinah-primary sakinah-rounded text-white px-8 py-4 font-semibold text-lg hover:bg-[#0d4429] transition-colors shadow-sm">
              Download for iOS
            </button>
            <button className="sakinah-secondary sakinah-rounded text-white px-8 py-4 font-semibold text-lg hover:bg-[#157347] transition-colors shadow-sm">
              Download for Android
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            Free • Privacy-focused • No ads
          </p>
        </div>
      </div>
    </section>
  );
}