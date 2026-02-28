import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Mail, Linkedin, MapPin, Send, Phone, Globe } from 'lucide-react';

export default function Contact() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-hero',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.contact-card',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.3, stagger: 0.1 }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:abdulmananca2006@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Inquiry from Portfolio Website'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'abdulmananca2006@gmail.com',
      link: 'mailto:abdulmananca2006@gmail.com',
      description: 'Send me an email anytime',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Manan Qasim',
      link: 'https://linkedin.com/in/manan-qasim',
      description: 'Connect professionally',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Lahore, Pakistan',
      link: null,
      description: 'Based in Lahore',
    },
  ];

  return (
    <div ref={pageRef}>
      {/* Hero Section */}
      <section
        className="contact-hero py-20 lg:py-32"
        style={{ background: 'linear-gradient(135deg, var(--navy-blue) 0%, var(--deep-navy) 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block p-4 rounded-2xl mb-6" style={{ background: 'rgba(59, 130, 246, 0.2)' }}>
            <Send className="w-12 h-12" style={{ color: '#93c5fd' }} />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">Let's Connect</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#cbd5e1' }}>
            I'm always open to discussing new opportunities, collaborations, or answering any questions you may have
            about my experience and expertise.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20" style={{ background: 'var(--slate-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="contact-card p-8 rounded-2xl text-center transition-all hover:scale-105 hover:shadow-xl"
                style={{ background: 'white', border: '1px solid #e2e8f0' }}
              >
                <div
                  className="inline-block p-4 rounded-xl mb-4"
                  style={{ background: 'var(--slate-light)' }}
                >
                  <method.icon className="w-8 h-8" style={{ color: 'var(--accent-blue)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--navy-blue)' }}>
                  {method.title}
                </h3>
                <p className="text-sm mb-3" style={{ color: 'var(--slate-grey)' }}>
                  {method.description}
                </p>
                {method.link ? (
                  <a
                    href={method.link}
                    target={method.title === 'LinkedIn' ? '_blank' : undefined}
                    rel={method.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                    className="font-medium hover:underline"
                    style={{ color: 'var(--accent-blue)' }}
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="font-medium" style={{ color: 'var(--charcoal-grey)' }}>
                    {method.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="p-8 lg:p-12 rounded-2xl shadow-lg" style={{ background: 'white' }}>
              <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: 'var(--navy-blue)' }}>
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2" style={{ color: 'var(--navy-blue)' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                      style={{ borderColor: '#e2e8f0', background: 'var(--slate-light)' }}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2" style={{ color: 'var(--navy-blue)' }}>
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                      style={{ borderColor: '#e2e8f0', background: 'var(--slate-light)' }}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2" style={{ color: 'var(--navy-blue)' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: '#e2e8f0', background: 'var(--slate-light)' }}
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2" style={{ color: 'var(--navy-blue)' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all resize-none"
                    style={{ borderColor: '#e2e8f0', background: 'var(--slate-light)' }}
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                  style={{ background: 'var(--accent-blue)', color: 'white' }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--navy-blue)' }}>
            Areas of Interest
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Job Opportunities',
                desc: 'Full-time positions in finance, accounting, or business analysis',
              },
              {
                title: 'Freelance Projects',
                desc: 'Business analysis, financial modeling, and Excel automation',
              },
              {
                title: 'Consulting',
                desc: 'Financial reporting, SAP implementation, and Power BI solutions',
              },
              {
                title: 'Networking',
                desc: 'Professional connections and industry collaborations',
              },
            ].map((area, index) => (
              <div
                key={index}
                className="p-6 rounded-xl transition-all hover:scale-105"
                style={{ background: 'var(--slate-light)', border: '1px solid #e2e8f0' }}
              >
                <h3 className="font-semibold mb-2" style={{ color: 'var(--navy-blue)' }}>
                  {area.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--slate-grey)' }}>
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, var(--navy-blue) 0%, var(--deep-navy) 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Response Time</h2>
          <p className="text-xl mb-8" style={{ color: '#cbd5e1' }}>
            I typically respond to all inquiries within 24-48 hours. For urgent matters, please mention "URGENT" in
            your subject line.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:abdulmananca2006@gmail.com"
              className="px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2"
              style={{ background: 'var(--accent-blue)', color: 'white' }}
            >
              <Mail className="w-5 h-5" />
              Email Me Directly
            </a>
            <a
              href="https://linkedin.com/in/manan-qasim"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 flex items-center gap-2"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
