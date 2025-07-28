export default function InsightsSection() {
  return (
    <section className="gradient-bg py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)]">
            Insights & Streaks
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Track your spiritual journey with meaningful insights, prayer streaks, 
            and personalized analytics that help you stay consistent.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-[var(--color-primary)] text-white w-12 h-12 sakinah-rounded flex items-center justify-center font-bold text-xl">
                📈
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[var(--color-primary)]">
                  Prayer Streaks
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Build and maintain prayer streaks. See your progress over days, weeks, and months.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[var(--color-primary)] text-white w-12 h-12 sakinah-rounded flex items-center justify-center font-bold text-xl">
                📊
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[var(--color-primary)]">
                  Visual Analytics
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Beautiful charts and heatmaps show your prayer patterns and consistency trends.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[var(--color-primary)] text-white w-12 h-12 sakinah-rounded flex items-center justify-center font-bold text-xl">
                🎯
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[var(--color-primary)]">
                  Personal Goals
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Set and track personal prayer goals with gentle reminders and encouragement.
                </p>
              </div>
            </div>

            {/* Hadith Quote */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm sakinah-rounded p-6 shadow-sm">
              <blockquote className="text-lg italic text-gray-800 dark:text-gray-200 mb-4">
                &ldquo;Whoever prays Fajr is under the protection of Allah.&rdquo;
              </blockquote>
              <cite className="text-[var(--color-primary)] font-semibold">
                — Sahih Muslim 657
              </cite>
            </div>
          </div>

          {/* Mock Analytics Display */}
          <div className="bg-white dark:bg-gray-800 sakinah-rounded p-8 shadow-lg">
            <div className="mb-6">
              <h4 className="text-xl font-bold mb-2 text-[var(--color-primary)]">
                Your Prayer Journey
              </h4>
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <span>Current Streak: <strong className="text-[var(--color-primary)]">12 days</strong></span>
                <span>•</span>
                <span>Best Streak: <strong className="text-[var(--color-primary)]">28 days</strong></span>
              </div>
            </div>

            {/* Mock Heatmap */}
            <div className="grid grid-cols-7 gap-1 mb-6">
              {Array.from({ length: 35 }, (_, i) => (
                <div
                  key={i}
                  className={`w-6 h-6 rounded-sm ${
                    Math.random() > 0.3
                      ? 'bg-[var(--color-primary)] opacity-80'
                      : Math.random() > 0.6
                      ? 'bg-[var(--color-primary)] opacity-40'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>

            {/* Mock Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-[var(--color-primary)]">85%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">This Month</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--color-primary)]">142</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Total Prayers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--color-primary)]">Fajr</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Most Consistent</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}