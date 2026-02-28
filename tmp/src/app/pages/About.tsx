import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Award, TrendingUp, Users, Lightbulb, Heart } from 'lucide-react';
import profileImage from 'figma:asset/69c0de984a06d43dd791fd2fec0441c675bff4f9.png';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-hero',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      gsap.utils.toArray('.value-card').forEach((card: any, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      });

      gsap.utils.toArray('.skill-bar').forEach((bar: any) => {
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: bar.getAttribute('data-width'),
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 85%',
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Precision & Accuracy',
      desc: 'Commitment to delivering error-free financial reporting and data analysis with meticulous attention to detail.',
    },
    {
      icon: Award,
      title: 'Professional Excellence',
      desc: 'Continuously pursuing certifications and knowledge to maintain the highest standards of professional competence.',
    },
    {
      icon: TrendingUp,
      title: 'Strategic Vision',
      desc: 'Combining financial expertise with forward-thinking strategies to drive sustainable business growth.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      desc: 'Building strong relationships with stakeholders through effective communication and teamwork.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      desc: 'Leveraging technology and creative solutions to optimize processes and deliver exceptional results.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      desc: 'Upholding ethical standards and transparency in all professional engagements and relationships.',
    },
  ];

  const skills = [
    { name: 'Financial Reporting & Analysis', level: 95 },
    { name: 'SAP ERP (FI/CO/MM)', level: 90 },
    { name: 'Microsoft Power BI', level: 88 },
    { name: 'Microsoft Excel (Advanced)', level: 95 },
    { name: 'Auditing & Compliance', level: 85 },
    { name: 'Business Analysis', level: 87 },
    { name: 'Strategic Planning', level: 82 },
    { name: 'Data Analytics', level: 90 },
  ];

  return (
    <div ref={pageRef}>
      {/* Hero Section */}
      <section
        className="about-hero py-20 lg:py-32"
        style={{ background: 'linear-gradient(135deg, var(--navy-blue) 0%, var(--deep-navy) 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">About Me</h1>
              <p className="text-xl mb-6" style={{ color: '#cbd5e1' }}>
                A passionate Finance and Analytics professional dedicated to bridging the gap between financial
                excellence and data-driven decision making.
              </p>
              <div className="space-y-4" style={{ color: '#cbd5e1' }}>
                <p>
                  With a strong foundation in accounting and finance, I've built my career on the principles of
                  precision, continuous learning, and strategic thinking. Currently on the path to becoming a fully
                  qualified ACCA professional (Finalist, April 2026) and pursuing the CFA designation, I combine
                  theoretical knowledge with practical expertise.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={profileImage}
                alt="Manan Qasim"
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl object-cover shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20" style={{ background: 'white' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: 'var(--navy-blue)' }}>
            My Journey
          </h2>
          <div className="space-y-6" style={{ color: 'var(--charcoal-grey)' }}>
            <p className="text-lg leading-relaxed">
              My journey in finance began with an <strong>Advanced Foundation Diploma</strong>, which laid the
              groundwork for my understanding of business and financial principles. This initial qualification ignited
              my passion for the field and set me on a path of continuous professional development.
            </p>
            <p className="text-lg leading-relaxed">
              I progressed through the rigorous <strong>ACCA qualification</strong>, systematically clearing papers
              across Financial and Management Accounting, Taxation, Audit and Assurance, Financial Reporting, and
              Strategic Business Leadership. With only the final strategic papers remaining (targeted for April 2026), I
              have demonstrated consistent excellence in technical and strategic accounting disciplines.
            </p>
            <p className="text-lg leading-relaxed">
              Complementing my accounting expertise, I embarked on the <strong>CFA Program</strong> to deepen my
              understanding of investment analysis, portfolio management, and financial markets. This dual pursuit of
              ACCA and CFA reflects my commitment to becoming a well-rounded finance professional.
            </p>
            <p className="text-lg leading-relaxed">
              Recognizing the importance of technology in modern finance, I acquired proficiency in{' '}
              <strong>SAP ERP</strong> and <strong>Microsoft Power BI</strong>, enabling me to leverage enterprise
              systems and data visualization tools to drive business insights. As a{' '}
              <strong>McKinsey Forward learner</strong>, I continue to expand my strategic thinking and leadership
              capabilities.
            </p>
            <p className="text-lg leading-relaxed">
              Throughout my career, I've gained practical experience in financial accounting at <strong>EigenSol</strong>
              , where I manage year-end accounting processes and final account preparation. Simultaneously, my freelance
              work on <strong>Upwork</strong> has exposed me to diverse international clients, enhancing my business
              analysis and Excel automation skills.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20" style={{ background: 'var(--slate-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: 'var(--navy-blue)' }}>
            Core Values & Principles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card p-8 rounded-2xl transition-all hover:scale-105 hover:shadow-xl"
                style={{ background: 'white', border: '1px solid #e2e8f0' }}
              >
                <div
                  className="inline-block p-4 rounded-xl mb-4"
                  style={{ background: 'var(--slate-light)' }}
                >
                  <value.icon className="w-8 h-8" style={{ color: 'var(--accent-blue)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--navy-blue)' }}>
                  {value.title}
                </h3>
                <p style={{ color: 'var(--slate-grey)' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20" style={{ background: 'white' }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: 'var(--navy-blue)' }}>
            Technical Proficiency
          </h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium" style={{ color: 'var(--navy-blue)' }}>
                    {skill.name}
                  </span>
                  <span style={{ color: 'var(--slate-grey)' }}>{skill.level}%</span>
                </div>
                <div className="h-3 rounded-full overflow-hidden" style={{ background: 'var(--slate-light)' }}>
                  <div
                    className="skill-bar h-full rounded-full transition-all"
                    data-width={`${skill.level}%`}
                    style={{ background: 'linear-gradient(90deg, var(--accent-blue), #2563eb)', width: '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, var(--navy-blue) 0%, var(--deep-navy) 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Professional Philosophy</h2>
          <p className="text-xl mb-6" style={{ color: '#cbd5e1' }}>
            "In the intersection of financial rigor and technological innovation lies the future of business excellence.
            My mission is to bridge these worlds, delivering insights that drive strategic decisions and sustainable
            growth."
          </p>
          <p className="text-lg" style={{ color: '#94a3b8' }}>
            I believe that exceptional financial professionals must be more than number crunchers—they must be strategic
            advisors, technology enablers, and trusted partners in organizational success.
          </p>
        </div>
      </section>
    </div>
  );
}
