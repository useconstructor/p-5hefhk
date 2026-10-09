"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/', hasDropdown: false },
  ]

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setOpenMenu(null)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="font-bold text-lg" style={{ color: '#222' }}>Example Domain</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setOpenMenu(openMenu === item.name ? null : item.name)}
                      className="flex items-center text-sm font-medium transition-colors hover:opacity-80"
                      style={{ color: '#222' }}
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openMenu === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {openMenu === item.name && (
                      <div className="absolute top-full left-0 mt-1 bg-white shadow-xl border border-gray-100 rounded-md z-50 min-w-52 py-2">
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          onClick={() => setOpenMenu(null)}
                        >
                          {item.name} Overview
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:opacity-80"
                    style={{ color: '#222' }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium rounded-md transition-colors"
              style={{ backgroundColor: '#eee', color: '#222' }}
            >
              More Information
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-md"
            style={{ color: '#222' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setOpenMenu(openMenu === item.name ? null : item.name)}
                      className="flex items-center justify-between w-full px-3 py-2 text-base font-medium rounded-md hover:bg-gray-50"
                      style={{ color: '#222' }}
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {openMenu === item.name && (
                      <div className="ml-4 mt-1 space-y-1">
                        <Link
                          href={item.href}
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                          onClick={closeMobileMenu}
                        >
                          {item.name} Overview
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-50"
                    style={{ color: '#222' }}
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/"
                className="block w-full text-center px-4 py-2 text-sm font-medium rounded-md transition-colors"
                style={{ backgroundColor: '#eee', color: '#222' }}
                onClick={closeMobileMenu}
              >
                More Information
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}