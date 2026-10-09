import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react'

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#222] text-[#eee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-xl font-bold text-[#eee]">Example Domain</span>
            </div>
            <p className="text-sm text-[#eee]/70">
              This domain is for use in documentation examples without needing permission.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#eee]">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-sm text-[#eee]/70 hover:text-[#eee] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://iana.org/help/example-domains"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#eee]/70 hover:text-[#eee] transition-colors"
                >
                  Learn More
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#eee]">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Twitter"
                className="text-[#eee]/70 hover:text-[#eee] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-[#eee]/70 hover:text-[#eee] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#eee]/70 hover:text-[#eee] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@example.com"
                aria-label="Email"
                className="text-[#eee]/70 hover:text-[#eee] transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-[#eee]/20">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-[#eee]/70">
              © {currentYear} Example Domain. All rights reserved.
            </p>
            <p className="text-xs text-[#eee]/50">
              For documentation purposes only. Not a service.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}