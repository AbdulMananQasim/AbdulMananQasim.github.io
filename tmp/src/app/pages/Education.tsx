import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, BookOpen, Trophy, CheckCircle2, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.education-hero',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      gsap.utils.toArray('.education-card').forEach((card: any, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, rotate: -5 },
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      });

      gsap.utils.toArray('.cert-card').forEach((card: any) => {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const mainQualifications = [
    {
      icon: Award,
      title: 'ACCA',
      subtitle: 'Association of Chartered Certified Accountants',
      status: 'Finalist - April 2026',
      statusColor: '#3b82f6',
      description:
        'Pursuing the globally recognized ACCA qualification, demonstrating comprehensive expertise in accounting, finance, and business strategy.',
      details: [
        'Completed Applied Knowledge Level (Business and Technology, Management Accounting, Financial Accounting)',
        'Completed Applied Skills Level (Corporate and Business Law, Performance Management, Taxation, Financial Reporting, Audit and Assurance, Financial Management)',
        'Progressing through Strategic Professional Level (Strategic Business Reporting, Strategic Business Leader)',
        'Expected completion: April 2026',
      ],
      papers: [
        { name: 'Business and Technology (BT)', status: 'Completed' },
        { name: 'Management Accounting (MA)', status: 'Completed' },
        { name: 'Financial Accounting (FA)', status: 'Completed' },
        { name: 'Corporate and Business Law (LW)', status: 'Completed' },
        { name: 'Performance Management (PM)', status: 'Completed' },
        { name: 'Taxation (TX)', status: 'Completed' },
        { name: 'Financial Reporting (FR)', status: 'Completed' },
        { name: 'Audit and Assurance (AA)', status: 'Completed' },
        { name: 'Financial Management (FM)', status: 'Completed' },
        { name: 'Strategic Business Reporting (SBR)', status: 'In Progress' },
        { name: 'Strategic Business Leader (SBL)', status: 'In Progress' },
      ],
    },
    {
      icon: Trophy,
      title: 'CFA',
      subtitle: 'Chartered Financial Analyst',
      status: 'Candidate',
      statusColor: '#3b82f6',
      description:
        'Pursuing the CFA designation to enhance expertise in investment analysis, portfolio management, and ethical professional standards.',
      details: [
        'Comprehensive curriculum covering Ethics, Quantitative Methods, Economics, Financial Statement Analysis',
        'Advanced study in Corporate Finance, Equity Investments, Fixed Income, Derivatives, Alternative Investments',
        'Portfolio Management and Wealth Planning expertise',
        'Rigorous examination process demonstrating commitment to investment excellence',
      ],
      levels: [
        { name: 'Level I', focus: 'Investment Tools and Ethical Standards', status: 'In Progress' },
        { name: 'Level II', focus: 'Asset Valuation and Analysis', status: 'Planned' },
        { name: 'Level III', focus: 'Portfolio Management and Wealth Planning', status: 'Planned' },
      ],
    },
  ];

  const certifications = [
    {
      icon: BookOpen,
      title: 'SAP ERP Certification',
      provider: 'SAP',
      description: 'Comprehensive training in SAP Financial Accounting (FI), Controlling (CO), and Materials Management (MM) modules',
      status: 'Certified',
    },
    {
      icon: Award,
      title: 'Microsoft Power BI',
      provider: 'Microsoft',
      description: 'Advanced data visualization, DAX formulas, and business intelligence dashboard development',
      status: 'Certified',
    },
    {
      icon: BookOpen,
      title: 'McKinsey Forward Program',
      provider: 'McKinsey & Company',
      description: 'Business strategy, leadership development, and strategic thinking methodologies',
      status: 'Active Learner',
    },
    {
      icon: Award,
      title: 'Advanced Foundation Diploma',
      provider: 'Professional Body',
      description: 'Foundation in Business, Finance, and Accounting principles',
      status: 'Completed',
    },
  ];

  return (
    <div ref={pageRef}>
      {/* Hero Section */}
      <section
        className="education-hero py-20 lg:py-32"
        style={{ background: 'linear-gradient(135deg, var(--navy-blue) 0%, var(--deep-navy) 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block p-4 rounded-2xl mb-6" style={{ background: 'rgba(59, 130, 246, 0.2)' }}>
            <GraduationCap className="w-12 h-12" style={{ color: '#93c5fd' }} />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">Education & Credentials</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#cbd5e1' }}>
            A commitment to continuous learning and professional excellence through globally recognized qualifications
            and certifications.
          </p>
        </div>
      </section>

      {/* Main Qualifications */}
      <section className="py-20" style={{ background: 'var(--slate-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: 'var(--navy-blue)' }}>
            Professional Qualifications
          </h2>
          <div className="space-y-8">
            {mainQualifications.map((qual, index) => (
              <div
                key={index}
                className="education-card p-8 lg:p-12 rounded-2xl shadow-lg"
                style={{ background: 'white', border: '2px solid #e2e8f0' }}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Icon and Title */}
                  <div className="lg:w-1/3">
                    <div
                      className="inline-block p-6 rounded-2xl mb-4"
                      style={{ background: 'var(--slate-light)' }}
                    >
                      <qual.icon className="w-12 h-12" style={{ color: 'var(--accent-blue)' }} />
                    </div>
                    <h3 className="text-3xl font-bold mb-2" style={{ color: 'var(--navy-blue)' }}>
                      {qual.title}
                    </h3>
                    <p className="text-lg mb-4" style={{ color: 'var(--slate-grey)' }}>
                      {qual.subtitle}
                    </p>
                    <span
                      className="inline-block px-4 py-2 rounded-full text-sm font-medium"
                      style={{ background: '#dbeafe', color: qual.statusColor }}
                    >
                      {qual.status}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="lg:w-2/3">
                    <p className="text-lg mb-6" style={{ color: 'var(--charcoal-grey)' }}>
                      {qual.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      {qual.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2
                            className="w-5 h-5 flex-shrink-0 mt-0.5"
                            style={{ color: 'var(--accent-blue)' }}
                          />
                          <span style={{ color: 'var(--charcoal-grey)' }}>{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Papers/Levels Progress */}
                    {qual.papers && (
                      <div className="p-6 rounded-xl" style={{ background: 'var(--slate-light)' }}>
                        <h4 className="font-semibold mb-4" style={{ color: 'var(--navy-blue)' }}>
                          Examination Progress
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {qual.papers.map((paper, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-3 rounded-lg"
                              style={{ background: 'white' }}
                            >
                              <span className="text-sm" style={{ color: 'var(--charcoal-grey)' }}>
                                {paper.name}
                              </span>
                              <span
                                className="text-xs px-2 py-1 rounded"
                                style={{
                                  background: paper.status === 'Completed' ? '#dcfce7' : '#fef3c7',
                                  color: paper.status === 'Completed' ? '#166534' : '#92400e',
                                }}
                              >
                                {paper.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {qual.levels && (
                      <div className="space-y-3">
                        {qual.levels.map((level, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-xl flex items-start gap-4"
                            style={{ background: 'var(--slate-light)' }}
                          >
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{
                                background: level.status === 'In Progress' ? 'var(--accent-blue)' : 'var(--slate-grey)',
                                color: 'white',
                              }}
                            >
                              {level.status === 'In Progress' ? (
                                <Clock className="w-5 h-5" />
                              ) : (
                                <span className="font-bold">{idx + 1}</span>
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h5 className="font-semibold" style={{ color: 'var(--navy-blue)' }}>
                                  {level.name}
                                </h5>
                                <span
                                  className="text-xs px-2 py-1 rounded"
                                  style={{
                                    background: level.status === 'In Progress' ? '#dbeafe' : '#f1f5f9',
                                    color: level.status === 'In Progress' ? '#1e40af' : '#64748b',
                                  }}
                                >
                                  {level.status}
                                </span>
                              </div>
                              <p className="text-sm" style={{ color: 'var(--slate-grey)' }}>
                                {level.focus}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Certifications */}
      <section className="py-20" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: 'var(--navy-blue)' }}>
            Technical Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="cert-card p-6 rounded-xl transition-all hover:scale-105 hover:shadow-xl"
                style={{ background: 'var(--slate-light)', border: '1px solid #e2e8f0' }}
              >
                <div
                  className="inline-block p-3 rounded-lg mb-4"
                  style={{ background: 'white' }}
                >
                  <cert.icon className="w-8 h-8" style={{ color: 'var(--accent-blue)' }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--navy-blue)' }}>
                  {cert.title}
                </h3>
                <p className="text-sm mb-3" style={{ color: 'var(--accent-blue)' }}>
                  {cert.provider}
                </p>
                <p className="text-sm mb-4" style={{ color: 'var(--slate-grey)' }}>
                  {cert.description}
                </p>
                <span
                  className="inline-block text-xs px-3 py-1 rounded-full font-medium"
                  style={{
                    background:
                      cert.status === 'Certified'
                        ? '#dcfce7'
                        : cert.status === 'Active Learner'
                        ? '#dbeafe'
                        : '#f1f5f9',
                    color:
                      cert.status === 'Certified'
                        ? '#166534'
                        : cert.status === 'Active Learner'
                        ? '#1e40af'
                        : '#64748b',
                  }}
                >
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, var(--navy-blue) 0%, var(--deep-navy) 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Commitment to Continuous Learning</h2>
          <p className="text-xl mb-6" style={{ color: '#cbd5e1' }}>
            In a rapidly evolving professional landscape, I believe that continuous education is not just an advantage—it's
            a necessity. My pursuit of multiple prestigious qualifications reflects my dedication to staying at the
            forefront of finance and analytics.
          </p>
          <p className="text-lg" style={{ color: '#94a3b8' }}>
            Each qualification builds upon the last, creating a comprehensive skill set that bridges accounting
            excellence, investment analysis, and technological innovation.
          </p>
        </div>
      </section>
    </div>
  );
}
