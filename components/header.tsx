"use client"

import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (path: string) => {
    router.push(path)
    window.scrollTo(0, 0)
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms & Conditions", path: "/terms-conditions" },
    { label: "Contact Us", path: "/contact" },
  ]

  return (
    <>
      {/* Top bar */}
      <div className="bg-orange-500 text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="hidden sm:block">📍 THE GREEN #8 SUITE A, Dover DE 19901</span>
          <a href="tel:+18553784258" className="flex items-center gap-2 font-semibold hover:text-orange-100 transition-colors ml-auto">
            <Phone className="h-4 w-4" />
            855-378-4258
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`bg-gray-950 sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-[0_4px_24px_rgba(249,115,22,0.15)]" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 py-3">
            <button
              onClick={() => handleNavigation("/")}
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <Image src="/images/logo.png" alt="Optimus Auto Parts" width={48} height={48} className="rounded-md" />
              <div className="text-left">
                <div className="text-white font-black text-lg leading-tight tracking-wide" style={{fontFamily: "'Barlow Condensed', sans-serif"}}>
                  OPTIMUS AUTO PARTS
                </div>
                <div className="text-orange-400 text-xs font-medium tracking-widest uppercase">Quality Used Auto Parts</div>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${
                    pathname === link.path
                      ? "text-orange-400 bg-orange-500/10"
                      : "text-gray-300 hover:text-orange-400 hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:+18553784258"
                className="ml-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md text-sm font-bold transition-all duration-200 flex items-center gap-2 glow-orange-sm"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-300 hover:text-orange-400 hover:bg-white/10 transition-all"
              >
                <span className="sr-only">Open menu</span>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-gray-900">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={`block w-full text-left px-4 py-3 rounded-md text-sm font-semibold transition-all ${
                    pathname === link.path
                      ? "text-orange-400 bg-orange-500/10"
                      : "text-gray-300 hover:text-orange-400 hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:+18553784258"
                className="flex items-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-md text-sm font-bold mt-2 transition-all justify-center"
              >
                <Phone className="h-4 w-4" />
                855-378-4258
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
