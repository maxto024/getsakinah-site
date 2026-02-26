import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Sakinah</h3>
            <p className="text-sm text-gray-400 mb-4">
              Your all-in-one prayer companion. Track your salah, find mosques, and grow spiritually.
            </p>
            <a
              href="https://apps.apple.com/us/app/sakinah-prayer-companion/id6748843314"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block sakinah-primary sakinah-rounded text-white px-5 py-2 text-sm font-semibold hover:bg-[#0d4429] transition-colors"
            >
              Download for iOS
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@getsakinah.org"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/delete-account" className="hover:text-white transition-colors">
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2025 Sakinah. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Privacy-first. No ads. No tracking.</p>
        </div>
      </div>
    </footer>
  );
}
