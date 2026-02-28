import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { ArrowRight, TrendingUp, Database, BarChart3, FileCheck, Brain, Briefcase } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Slider from 'react-slick';
import profileImage from 'figma:asset/69c0de984a06d43dd791fd2fec0441c675bff4f9.png';
import Counter from '../components/Counter';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animations
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-title',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.hero-buttons',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
      );

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.8, rotate: -10 },
          { opacity: 1, scale: 1, rotate: 0, duration: 1.2, delay: 0.4, ease: 'elastic.out(1, 0.5)' }
        );
      }

      // Animate expertise cards on scroll
      gsap.utils.toArray('.expertise-card').forEach((card: any) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const testimonials = [
    {
      text: "Manan's expertise in financial reporting and SAP implementation transformed our accounting processes, delivering exceptional accuracy and efficiency.",
      author: "EigenSol Team",
      role: "Financial Services"
    },
    {
      text: "Outstanding business analysis skills combined with technical proficiency. Manan consistently delivers data-driven solutions that drive business value.",
      author: "Upwork Client",
      role: "International Business"
    },
    {
      text: "His ability to bridge finance and technology is remarkable. A strategic thinker who brings both analytical rigor and practical solutions.",
      author: "Professional Network",
      role: "Industry Peer"
    }
  ];

  return (
    <div ref={heroRef}>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--navy-blue) 0%, var(--deep-navy) 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          ></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-20 animate-pulse" style={{ background: 'var(--accent-blue)' }}></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full opacity-10 animate-pulse" style={{ background: 'var(--accent-blue)', animationDelay: '1s' }}></div>

        <div className="relative max-w-7xl mx-auto px-6 py-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <div
                  className="hero-title inline-block px-5 py-3 rounded-full"
                  style={{ background: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(59, 130, 246, 0.4)' }}
                >
                  <span className="tracking-wide" style={{ color: '#93c5fd' }}>Finance & Analytics Expert</span>
                </div>
                <h1 className="hero-title text-5xl lg:text-7xl font-bold leading-tight">
                  Bridging Financial Excellence{' '}
                  <span style={{ color: 'var(--accent-blue)' }}>& Data Analytics</span>
                </h1>
                <p className="hero-subtitle text-xl lg:text-2xl opacity-90" style={{ color: '#cbd5e1' }}>
                  ACCA Finalist | CFA Candidate | SAP & Power BI Specialist
                </p>
              </div>

              <div className="hero-buttons flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="group px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-2xl flex items-center gap-2"
                  style={{ background: 'var(--accent-blue)', color: 'white' }}
                >
                  Explore My Journey
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://linkedin.com/in/manan-qasim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-lg font-medium transition-all hover:scale-105"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div ref={imageRef} className="relative">
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-40 animate-pulse"
                  style={{ background: 'var(--accent-blue)' }}
                ></div>
                <img
                  src={profileImage}
                  alt="Manan Qasim"
                  className="relative w-80 h-80 lg:w-[450px] lg:h-[450px] rounded-full object-cover border-8 border-white/10 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section ref={statsRef} className="py-20" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter end={5} suffix="+" label="Years Experience" />
            <Counter end={14} label="ACCA Papers Cleared" />
            <Counter end={50} suffix="+" label="Projects Completed" />
            <Counter end={100} suffix="%" label="Client Satisfaction" />
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-20" style={{ background: 'var(--slate-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--navy-blue)' }}>
              Core Expertise
            </h2>
            <p className="text-lg lg:text-xl" style={{ color: 'var(--slate-grey)' }}>
              Specialized skills that drive business excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileCheck,
                title: 'Financial Reporting',
                desc: 'Expert in preparing comprehensive financial statements, year-end accounts, and regulatory compliance reports with exceptional accuracy.',
              },
              {
                icon: Database,
                title: 'SAP ERP',
                desc: 'Advanced proficiency in SAP modules including FI, CO, and MM for seamless enterprise resource planning and process optimization.',
              },
              {
                icon: BarChart3,
                title: 'Microsoft Power BI',
                desc: 'Creating insightful dashboards and interactive data visualizations that transform complex data into actionable business intelligence.',
              },
              {
                icon: TrendingUp,
                title: 'Auditing',
                desc: 'Thorough understanding of audit processes, internal controls, and compliance standards ensuring financial integrity and transparency.',
              },
              {
                icon: Brain,
                title: 'Strategic Thinking',
                desc: 'Analytical approach to complex business challenges, combining financial acumen with strategic foresight for sustainable growth.',
              },
              {
                icon: Briefcase,
                title: 'Business Analysis',
                desc: 'Translating business requirements into technical solutions, bridging the gap between stakeholders and implementation teams.',
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="expertise-card group p-8 rounded-2xl transition-all hover:scale-105 hover:shadow-2xl cursor-pointer"
                style={{ background: 'white', border: '1px solid #e2e8f0' }}
              >
                <div
                  className="mb-6 inline-block p-4 rounded-xl transition-all group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: 'var(--slate-light)' }}
                >
                  <skill.icon className="w-8 h-8" style={{ color: 'var(--accent-blue)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--navy-blue)' }}>
                  {skill.title}
                </h3>
                <p style={{ color: 'var(--slate-grey)' }}>{skill.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-xl"
              style={{ background: 'var(--navy-blue)', color: 'white' }}
            >
              Learn More About My Skills
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-20" style={{ background: 'white' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--navy-blue)' }}>
              What People Say
            </h2>
            <p className="text-lg" style={{ color: 'var(--slate-grey)' }}>
              Testimonials from colleagues and clients
            </p>
          </div>

          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div
                  className="p-12 rounded-2xl shadow-lg mx-auto max-w-3xl"
                  style={{ background: 'var(--slate-light)' }}
                >
                  <p className="text-xl lg:text-2xl mb-8 italic" style={{ color: 'var(--charcoal-grey)' }}>
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                      <div className="font-semibold" style={{ color: 'var(--navy-blue)' }}>
                        {testimonial.author}
                      </div>
                      <div className="text-sm" style={{ color: 'var(--slate-grey)' }}>
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, var(--navy-blue) 0%, var(--deep-navy) 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Ready to Collaborate?</h2>
          <p className="text-xl mb-8" style={{ color: '#cbd5e1' }}>
            Let's discuss how my expertise in finance and analytics can add value to your organization.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-xl"
              style={{ background: 'var(--accent-blue)', color: 'white' }}
            >
              Get in Touch
            </Link>
            <Link
              to="/experience"
              className="px-8 py-4 rounded-lg font-medium transition-all hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                backdropFilter: 'blur(10px)',
              }}
            >
              View My Experience
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
