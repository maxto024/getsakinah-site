'use client';

import React, { useState, useEffect } from 'react';

export default function InsightsSection() {
  const [heatmap, setHeatmap] = useState<number[]>(() => Array(35).fill(0));

  useEffect(() => {
    setHeatmap(Array.from({ length: 35 }, () => Math.floor(Math.random() * 4)));
  }, []);
  return (
    <section className="gradient-bg py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-primary)]">
            Insights & Streaks
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Dive deep into your prayer habits with actionable analytics, habit-forming streaks, and personalized goals.  
            See where you shine and where you can grow—day by day, month by month.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature List */}
          <div className="space-y-10">
            {/* Prayer Streaks */}
            <FeatureItem
              icon="🔥"
              title="Prayer Streaks"
              description="Celebrate your consistency—track consecutive days of on-time prayers and unlock new milestones."
            />

            {/* Visual Analytics */}
            <FeatureItem
              icon="📊"
              title="Visual Analytics"
              description="Interactive heatmaps, bar charts, and progress lines reveal your patterns at a glance."
            />

            {/* Personal Goals */}
            <FeatureItem
              icon="🎯"
              title="Personal Goals"
              description="Set daily, weekly, or monthly prayer targets. Receive gentle reminders and motivational prompts."
            />

            {/* Motivational Hadith */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm sakinah-rounded p-6 shadow-sm">
              <blockquote className="text-lg italic text-gray-800 dark:text-gray-200 mb-3">
                “Whoever prays Fajr is under the protection of Allah.”  
              </blockquote>
              <cite className="text-[var(--color-primary)] font-semibold">
                — Sahih Muslim 657
              </cite>
            </div>
          </div>

          {/* Mock Dashboard */}
          <div className="bg-white dark:bg-gray-800 sakinah-rounded p-8 shadow-lg">
            {/* Streak Summary */}
            <div className="mb-8">
              <h4 className="text-2xl font-bold mb-2 text-[var(--color-primary)]">
                Your Prayer Journey
              </h4>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span>
                  Current Streak: <strong className="text-[var(--color-primary)]">12 days</strong>
                </span>
                <span>•</span>
                <span>
                  Best Streak: <strong className="text-[var(--color-primary)]">28 days</strong>
                </span>
              </div>
            </div>

            {/* Heatmap */}
            <div className="grid grid-cols-7 gap-1 mb-8">
              {heatmap.map((level, i) => {
                const classes = [
                  'bg-gray-200 dark:bg-gray-700',
                  'bg-[var(--color-primary)]/30',
                  'bg-[var(--color-primary)]/60',
                  'bg-[var(--color-primary)]'
                ][level];
                return (
                  <div key={i} className={`w-6 h-6 rounded-sm ${classes}`} />
                );
              })}
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <StatCard
                value="85%"
                label="This Month"
                iconColor="bg-[var(--color-primary)]"
              />
              <StatCard
                value="142"
                label="Total Prayers"
                iconColor="bg-[var(--color-primary)]"
              />
              <StatCard
                value="Fajr"
                label="Most Consistent"
                iconColor="bg-[var(--color-primary)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 flex items-center justify-center sakinah-rounded text-xl bg-[var(--color-primary)] text-white">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-1 text-[var(--color-primary)]">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}

function StatCard({
  value,
  label,
  iconColor,
}: {
  value: string;
  label: string;
  iconColor: string;
}) {
  return (
    <div>
      <div className={`w-10 h-10 mx-auto mb-2 sakinah-rounded ${iconColor}`} />
      <div className="text-2xl font-bold text-[var(--color-primary)]">{value}</div>
      <div className="text-xs text-gray-600 dark:text-gray-400">{label}</div>
    </div>
  );
}