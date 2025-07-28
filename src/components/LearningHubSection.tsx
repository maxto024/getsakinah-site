export default function LearningHubSection() {
  const lessons = [
    {
      title: "The Importance of Prayer Times",
      description: "Learn about the significance of praying at designated times and how it brings structure to your day.",
      duration: "5 min read",
      category: "Fundamentals"
    },
    {
      title: "Preparing for Prayer",
      description: "A comprehensive guide to wudu, qibla direction, and creating the right mindset for prayer.",
      duration: "8 min read",
      category: "Practice"
    },
    {
      title: "Dhikr After Prayer",
      description: "Authentic supplications and remembrance of Allah to recite after completing your prayers.",
      duration: "6 min read",
      category: "Sunnah"
    },
    {
      title: "Prayer in Congregation",
      description: "Understanding the rewards and etiquette of praying with the community in the mosque.",
      duration: "7 min read",
      category: "Community"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)]">
            Learning Hub
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Deepen your understanding of prayer with authentic Islamic knowledge, 
            practical guides, and spiritual insights.
          </p>

          {/* Quran 2:45 Quote */}
          <div className="bg-gray-50 dark:bg-gray-800 sakinah-rounded p-6 mt-8 max-w-2xl mx-auto shadow-sm">
            <blockquote className="text-lg italic text-gray-800 dark:text-gray-200 mb-4">
              &ldquo;And seek help through patience and prayer, and indeed, it is difficult except for the humbly submissive [to Allah].&rdquo;
            </blockquote>
            <cite className="text-[var(--color-primary)] font-semibold">
              — Quran 2:45
            </cite>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lessons.map((lesson, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 sakinah-rounded p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className="mb-4">
                <span className="inline-block bg-[var(--color-primary)] text-white text-xs px-3 py-1 sakinah-rounded font-semibold">
                  {lesson.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors">
                {lesson.title}
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {lesson.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>{lesson.duration}</span>
                <span className="group-hover:text-[var(--color-primary)] transition-colors">
                  Read more →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="sakinah-primary sakinah-rounded text-white px-8 py-4 font-semibold hover:bg-[#0d4429] transition-colors shadow-sm">
            Explore All Lessons
          </button>
        </div>
      </div>
    </section>
  );
}