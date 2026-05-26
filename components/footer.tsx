import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5 hover:opacity-90 transition-opacity">
              <Image src="/images/logo.png" alt="Optimus Auto Parts" width={40} height={40} className="rounded-md" />
              <div>
                <div className="text-white font-black text-lg leading-tight tracking-wide" style={{fontFamily: "'Barlow Condensed', sans-serif"}}>
                  OPTIMUS AUTO PARTS
                </div>
                <div className="text-orange-400 text-xs font-medium tracking-widest uppercase">Quality Used Auto Parts</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Your trusted partner for quality used auto parts. Extensive inventory, competitive prices, and expert service.
            </p>
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-400 text-sm">
                THE GREEN #8 SUITE A<br />
                Dover DE 19901
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 pb-2 border-b border-orange-500/40" style={{fontFamily: "'Barlow Condensed', sans-serif"}}>
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms and Conditions", href: "/terms-conditions" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 pb-2 border-b border-orange-500/40" style={{fontFamily: "'Barlow Condensed', sans-serif"}}>
              CONTACT INFO
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+18553784258"
                className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors group"
              >
                <div className="w-9 h-9 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <Phone className="h-4 w-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Phone</p>
                  <p className="text-sm font-semibold text-white">855-378-4258</p>
                </div>
              </a>
              <a
                href="mailto:support@optimusautoparts.com"
                className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors group"
              >
                <div className="w-9 h-9 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <Mail className="h-4 w-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Support</p>
                  <p className="text-sm font-semibold text-white">support@optimusautoparts.com</p>
                </div>
              </a>
              <a
                href="mailto:billing@optimusautoparts.com"
                className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors group"
              >
                <div className="w-9 h-9 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <Mail className="h-4 w-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Billing</p>
                  <p className="text-sm font-semibold text-white">billing@optimusautoparts.com</p>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-4 w-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Hours</p>
                  <p className="text-sm text-white">Mon–Fri: 8AM–8PM</p>
                  <p className="text-sm text-gray-400">Sat: 8AM–4PM | Sun: 8AM–2PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="text-orange-400">Optimus Auto Parts</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-orange-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-gray-500 hover:text-orange-400 text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
