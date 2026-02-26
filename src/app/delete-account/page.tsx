import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Delete Your Account - Sakinah',
  description:
    'Learn how to permanently delete your Sakinah account and all associated data.',
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="gradient-bg py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--color-primary)]">
            Delete Your Account
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            We respect your right to control your data. Follow the steps below to permanently delete your account.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl space-y-8">
          {/* Warning */}
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 sakinah-rounded p-6">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <h2 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-1">
                  This action is irreversible
                </h2>
                <p className="text-red-700 dark:text-red-400">
                  All your prayer data, streaks, and settings will be permanently deleted.
                  This cannot be undone.
                </p>
              </div>
            </div>
          </div>

          {/* How to Delete */}
          <div className="bg-gray-50 dark:bg-gray-800 sakinah-rounded p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
              How to Delete Your Account
            </h2>
            <ol className="space-y-4">
              {[
                'Open the Sakinah app on your device.',
                'Tap the Settings icon (gear icon) in the bottom navigation bar.',
                'Scroll down to the Account section.',
                'Tap "Delete Account".',
                'Confirm the deletion when prompted.',
              ].map((step, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold text-sm">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* What Gets Deleted */}
          <div className="bg-gray-50 dark:bg-gray-800 sakinah-rounded p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              What Gets Deleted
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {[
                'Prayer logs and history',
                'Streaks and achievement data',
                'Mosque search history',
                'App preferences and settings',
                'All locally stored data',
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-red-500">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Never Stored */}
          <div className="bg-gray-50 dark:bg-gray-800 sakinah-rounded p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              What We Never Stored
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {[
                'Personal information (name, age, gender)',
                'Email addresses or phone numbers',
                'Tracking or advertising data',
                'Payment information',
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Need Help */}
          <div className="text-center bg-gray-50 dark:bg-gray-800 sakinah-rounded p-8">
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
              Need Help?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              If you&apos;re having trouble deleting your account, our team is here to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:support@getsakinah.org"
                className="inline-block sakinah-primary sakinah-rounded text-white px-8 py-3 font-semibold hover:bg-[#0d4429] transition-colors shadow-sm"
              >
                Contact Support
              </a>
              <Link
                href="/"
                className="inline-block text-[var(--color-primary)] font-semibold hover:underline"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
