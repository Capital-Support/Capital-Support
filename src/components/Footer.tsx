import { Dispatch, SetStateAction } from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

interface FooterProps {
  setActivePage: Dispatch<SetStateAction<string>>;
}

export default function Footer({ setActivePage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#050816] to-[#0B1F3B] text-gray-300 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              Capital Support Services
            </h3>
            <p className="text-sm md:text-base text-gray-400 max-w-sm leading-relaxed">
              Integrated manpower, subcontracting, equipment, and management solutions
              for construction and industrial projects in Oman.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {[
                { label: 'Home', page: 'home' },
                { label: 'About Us', page: 'about' },
                { label: 'Services', page: 'services' },
                { label: 'Contact', page: 'contact' },
              ].map((link) => (
                <button
                  key={link.page}
                  onClick={() => setActivePage(link.page)}
                  className="block text-sm md:text-base text-gray-300 hover:text-[#F59E0B] transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 text-[#F59E0B]" size={18} />
                <span className="text-gray-300">
                  564 St. Bawsher, Muscat, Sultanate of Oman
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 text-[#F59E0B]" size={18} />
                <span className="text-gray-300">
                  +968 7778 6668
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 text-[#F59E0B]" size={18} />
                <span className="text-gray-300">
                  mady@capitaloman.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-1 text-[#F59E0B]" size={18} />
                <span className="text-gray-300">
                  WhatsApp: +968 7778 6668
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-xs md:text-sm text-gray-400">
            © {currentYear} Capital Support Services. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
