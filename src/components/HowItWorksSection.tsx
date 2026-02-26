export default function HowItWorksSection() {
  const features = [
    {
      icon: "🕐",
      title: "Prayer Times & Reminders",
      description:
        "Accurate prayer times based on your location and preferred calculation method. Push reminders so you never miss a prayer.",
      quote: "Indeed, prayer has been decreed upon the believers a decree of specified times.",
      source: "Quran 4:103",
    },
    {
      icon: "✅",
      title: "One-Tap Prayer Logging",
      description:
        "Log prayers as On Time, Late, or Missed in seconds. Track streaks, completion rates, and performance over time.",
      quote: "The first matter that the slave will be brought to account for on the Day of Resurrection is the prayer.",
      source: "Sunan At-Tirmidhi 413",
    },
    {
      icon: "🕌",
      title: "Mosques & Qibla",
      description:
        "Find nearby mosques with directions and open status. Always know the Qibla direction with the built-in compass.",
      quote: "And establish prayer and give zakah and bow with those who bow.",
      source: "Quran 2:43",
    },
    {
      icon: "👥",
      title: "Community",
      description:
        "Join groups, participate in challenges, and motivate each other with leaderboards and group streaks. Optional sign-in only.",
      quote: "Whoever prays Fajr is under the protection of Allah.",
      source: "Sahih Muslim 657",
    },
  ];

  return (
    <section className="gradient-bg py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)]">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Designed around Islamic principles and authentic teachings to support your daily prayer practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 sakinah-rounded p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-primary)]">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-5">
                {feature.description}
              </p>

              <div className="border-l-4 border-[var(--color-primary)] pl-3 py-2">
                <blockquote className="text-xs italic text-gray-600 dark:text-gray-400 mb-1">
                  &ldquo;{feature.quote}&rdquo;
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
