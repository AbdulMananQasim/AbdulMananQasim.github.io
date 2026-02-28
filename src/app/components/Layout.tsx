import { Outlet, Link, useLocation } from 'react-router';
import { Menu, X, Linkedin, Mail } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);

    // Animate navigation on mount
    if (navRef.current && logoRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-family)' }}>
      {/* Navigation */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
        style={{ background: 'rgba(15, 23, 42, 0.9)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" ref={logoRef} className="group">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center transition-all group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' }}
                >
                  <span className="text-white font-bold text-xl">MQ</span>
                </div>
                <div className="hidden sm:block">
                  <div className="text-white font-semibold text-lg">Manan Qasim</div>
                  <div className="text-xs" style={{ color: '#94a3b8' }}>
                    Finance & Analytics Expert
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative text-white hover:text-blue-400 transition-colors py-2"
                >
                  <span>{link.name}</span>
                  {location.pathname === link.path && (
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: 'var(--accent-blue)' }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://linkedin.com/in/manan-qasim"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all hover:scale-110"
                style={{ background: 'rgba(59, 130, 246, 0.2)' }}
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:abdulmananca2006@gmail.com"
                className="px-6 py-2 rounded-lg transition-all hover:scale-105"
                style={{ background: 'var(--accent-blue)', color: 'white' }}
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-white hover:text-blue-400 transition-colors py-2"
                  style={{
                    borderLeft: location.pathname === link.path ? '3px solid var(--accent-blue)' : 'none',
                    paddingLeft: location.pathname === link.path ? '1rem' : '0',
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://linkedin.com/in/manan-qasim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg"
                  style={{ background: 'rgba(59, 130, 246, 0.2)', color: 'white' }}
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="mailto:abdulmananca2006@gmail.com"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg"
                  style={{ background: 'var(--accent-blue)', color: 'white' }}
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-12" style={{ background: 'var(--navy-blue)', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' }}
                >
                  <span className="text-white font-bold">MQ</span>
                </div>
                <span className="text-white font-semibold">Manan Qasim</span>
              </div>
              <p style={{ color: '#94a3b8' }}>
                Finance & Analytics Expert bridging financial excellence with data-driven insights.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block hover:text-blue-400 transition-colors"
                    style={{ color: '#94a3b8' }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="space-y-3">
                <a
                  href="mailto:abdulmananca2006@gmail.com"
                  className="block hover:text-blue-400 transition-colors"
                  style={{ color: '#94a3b8' }}
                >
                  abdulmananca2006@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/manan-qasim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  style={{ color: '#94a3b8' }}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </a>
                <p style={{ color: '#94a3b8' }}>Lahore, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="pt-8 text-center" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <p style={{ color: '#94a3b8' }}>© 2026 Manan Qasim. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
