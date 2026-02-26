import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Sakinah',
  description:
    'Privacy policy for Sakinah: Prayer Companion. Learn how we protect your data and respect your privacy.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="gradient-bg py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--color-primary)]">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Your privacy matters. Sakinah is designed to never collect or share your personal data.
          </p>
          <div className="mt-6 text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <p><strong>Effective Date:</strong> July 28, 2025</p>
            <p><strong>App:</strong> Sakinah: Prayer Companion</p>
            <p><strong>Developer:</strong> Mohamed Hassan</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl space-y-8">
          {/* Section 1 */}
          <div className="bg-gray-50 dark:bg-gray-800 sakinah-rounded p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              1. Information We Do Not Collect
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sakinah is built with a privacy-first philosophy. We do <strong>not</strong> collect:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {[
                'Your name, email address, or login credentials',
                'Contact lists, photos, or media files',
                'Advertising or tracking identifiers',
                'Prayer history tied to any personal identity',
                'Browsing data or usage analytics sent to external servers',
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-gray-50 dark:bg-gray-800 sakinah-rounded p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              2. Location Data
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Sakinah may request access to your device&apos;s location solely for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-2">
              <li>Calculating accurate prayer times based on your geographic position</li>
              <li>Determining Qibla direction</li>
              <li>Finding nearby mosques</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              Location data is processed <strong>on your device only</strong> and is never transmitted to our servers or any third party.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-gray-50 dark:bg-gray-800 sakinah-rounded p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              3. No Third-Party Services
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Sakinah does not integrate any third-party analytics, advertising networks, or tracking SDKs.
              There are no external services receiving your data. What happens on your device stays on your device.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-gray-50 dark:bg-gray-800 sakinah-rounded p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              4. Data Storage
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              All app data—including prayer logs, preferences, and settings—is stored <strong>locally on your device</strong>.
              If you uninstall the app, all data is permanently deleted. We do not maintain any server-side backups
              of your personal data.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-gray-50 dark:bg-gray-800 sakinah-rounded p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              5. Children&apos;s Privacy
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Sakinah is suitable for users of all ages. Since we do not collect any personal data,
              there is no risk of collecting information from children under 13.
              The app complies with COPPA and similar regulations by design.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-gray-50 dark:bg-gray-800 sakinah-rounded p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              6. Changes to This Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              If we make changes to this privacy policy, we will update the effective date at the top of this page.
              We encourage you to review this policy periodically. Continued use of the app after any changes
              constitutes your acceptance of the updated policy.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-gray-50 dark:bg-gray-800 sakinah-rounded p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              7. Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions or concerns about this privacy policy, please contact us:
            </p>
            <a
              href="mailto:support@getsakinah.org"
              className="inline-block sakinah-primary sakinah-rounded text-white px-6 py-3 font-semibold hover:bg-[#0d4429] transition-colors shadow-sm"
            >
              support@getsakinah.org
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
