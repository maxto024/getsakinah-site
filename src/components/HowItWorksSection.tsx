export default function HowItWorksSection() {
  const features = [
    {
      title: "Prayer Logging",
      description: "Track your five daily prayers with simple, intuitive logging. Set reminders and build consistent prayer habits.",
      hadith: "The first matter that the slave will be brought to account for on the Day of Resurrection is the prayer.",
      source: "Sunan At-Tirmidhi 413",
      icon: "🕌"
    },
    {
      title: "Mosque Finder",
      description: "Find nearby mosques with prayer times, directions, and community information.",
      verse: "And establish prayer and give zakah and bow with those who bow.",
      source: "Quran 2:43",
      icon: "📍"
    },
    {
      title: "Prayer Insights",
      description: "Visualize your prayer consistency with streaks, statistics, and personalized insights.",
      hadith: "Whoever prays Fajr is under the protection of Allah.",
      source: "Sahih Muslim 657",
      icon: "📊"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)]">
            How It Works
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Sakinah makes it easy to maintain your spiritual practice with features 
            designed around Islamic principles and authentic teachings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 sakinah-rounded p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {feature.description}
              </p>
              
              {/* Religious Quote */}
              <div className="border-l-4 border-[var(--color-primary)] pl-4 bg-white/50 dark:bg-gray-700/50 p-4 sakinah-rounded">
                <blockquote className="text-sm italic text-gray-800 dark:text-gray-200 mb-2">
                  &ldquo;{feature.hadith || feature.verse}&rdquo;
                </blockquote>
                <cite className="text-xs text-[var(--color-primary)] font-semibold">
                  — {feature.source}
                </cite>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}