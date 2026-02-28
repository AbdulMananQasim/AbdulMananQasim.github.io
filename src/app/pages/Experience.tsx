import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, CheckCircle2, MapPin, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.experience-hero',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      gsap.utils.toArray('.timeline-item').forEach((item: any, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      title: 'Financial Accountant',
      company: 'EigenSol',
      location: 'Lahore, Pakistan',
      period: '2023 - Present',
      type: 'Full-time',
      responsibilities: [
        'Lead year-end accounting processes and final accounts preparation ensuring compliance with IFRS and local regulations',
        'Manage month-end and quarter-end closing activities including journal entries, account reconciliations, and variance analysis',
        'Prepare comprehensive financial statements including Statement of Financial Position, Income Statement, Cash Flow Statement, and Notes',
        'Implement and maintain robust internal controls to safeguard assets and ensure accuracy of financial reporting',
        'Coordinate with external auditors during statutory audits, providing necessary documentation and explanations',
        'Develop and maintain detailed documentation of accounting policies and procedures',
        'Train and mentor junior accounting staff on best practices and technical accounting matters',
        'Utilize SAP ERP system for financial transactions processing and reporting',
        'Analyze financial data to identify trends, anomalies, and opportunities for cost optimization',
        'Collaborate with cross-functional teams to support business decision-making with financial insights',
      ],
      achievements: [
        'Successfully implemented process improvements reducing month-end close time by 30%',
        'Achieved zero audit qualifications in annual statutory audits',
        'Streamlined reconciliation processes improving accuracy and efficiency',
      ],
    },
    {
      title: 'Freelance Business Analyst',
      company: 'Upwork',
      location: 'Remote (International Clients)',
      period: '2021 - Present',
      type: 'Freelance',
      responsibilities: [
        'Conduct comprehensive IT business analysis for diverse international clients across various industries',
        'Gather and document business requirements through stakeholder interviews and workshops',
        'Create detailed functional specifications, process flow diagrams, and user stories',
        'Develop advanced Microsoft Excel solutions including automation using VBA macros and complex formulas',
        'Build financial models and forecasting tools for budgeting and strategic planning',
        'Design and implement Power BI dashboards providing real-time business intelligence',
        'Perform data analysis and create actionable insights from large datasets',
        'Optimize business processes through workflow analysis and redesign recommendations',
        'Translate technical requirements into business language and vice versa',
        'Provide training and documentation for delivered solutions ensuring smooth adoption',
      ],
      achievements: [
        'Maintained 100% client satisfaction rate with multiple 5-star reviews',
        'Delivered 50+ successful projects across finance, operations, and data analytics',
        'Built long-term relationships with repeat clients across North America, Europe, and Middle East',
      ],
    },
  ];

  return (
    <div ref={pageRef}>
      {/* Hero Section */}
      <section
        className="experience-hero py-20 lg:py-32"
        style={{ background: 'linear-gradient(135deg, var(--navy-blue) 0%, var(--deep-navy) 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div
            className="inline-block p-4 rounded-2xl mb-6"
            style={{ background: 'rgba(59, 130, 246, 0.2)' }}
          >
            <Briefcase className="w-12 h-12" style={{ color: '#93c5fd' }} />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">Professional Experience</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#cbd5e1' }}>
            A track record of delivering excellence in financial accounting, business analysis, and data-driven
            solutions across diverse organizational contexts.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20" style={{ background: 'var(--slate-light)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="timeline-item relative"
              >
                {/* Timeline connector for desktop */}
                {index < experiences.length - 1 && (
                  <div
                    className="hidden lg:block absolute left-1/2 top-full w-0.5 h-12 -ml-px"
                    style={{ background: 'var(--accent-blue)' }}
                  ></div>
                )}

                <div
                  className="p-8 lg:p-12 rounded-2xl shadow-lg transition-all hover:shadow-2xl"
                  style={{ background: 'white', border: '2px solid #e2e8f0' }}
                >
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-2" style={{ color: 'var(--navy-blue)' }}>
                        {exp.title}
                      </h3>
                      <p className="text-xl mb-3" style={{ color: 'var(--accent-blue)' }}>
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'var(--slate-grey)' }}>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    <span
                      className="inline-block px-4 py-2 rounded-full text-sm font-medium"
                      style={{
                        background: exp.type === 'Full-time' ? '#dbeafe' : '#fef3c7',
                        color: exp.type === 'Full-time' ? '#1e40af' : '#92400e',
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--navy-blue)' }}>
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2
                            className="w-5 h-5 flex-shrink-0 mt-0.5"
                            style={{ color: 'var(--accent-blue)' }}
                          />
                          <span style={{ color: 'var(--charcoal-grey)' }}>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div
                    className="p-6 rounded-xl"
                    style={{ background: 'var(--slate-light)' }}
                  >
                    <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--navy-blue)' }}>
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span
                            className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                            style={{ background: 'var(--accent-blue)' }}
                          ></span>
                          <span className="font-medium" style={{ color: 'var(--charcoal-grey)' }}>
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Highlight Section */}
      <section className="py-20" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: 'var(--navy-blue)' }}>
            Professional Competencies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Financial Management',
                items: ['Year-End Closing', 'Financial Reporting', 'Budget Analysis', 'Cost Control'],
              },
              {
                title: 'Technical Systems',
                items: ['SAP ERP (FI/CO/MM)', 'Microsoft Power BI', 'Advanced Excel', 'VBA Automation'],
              },
              {
                title: 'Business Analysis',
                items: ['Requirements Gathering', 'Process Optimization', 'Stakeholder Management', 'Documentation'],
              },
              {
                title: 'Compliance & Audit',
                items: ['IFRS Standards', 'Internal Controls', 'Audit Coordination', 'Risk Management'],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-xl transition-all hover:scale-105"
                style={{ background: 'var(--slate-light)', border: '1px solid #e2e8f0' }}
              >
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--navy-blue)' }}>
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2" style={{ color: 'var(--charcoal-grey)' }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-blue)' }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
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
          <h2 className="text-4xl font-bold mb-6 text-white">Looking to Add Value to Your Team?</h2>
          <p className="text-xl mb-8" style={{ color: '#cbd5e1' }}>
            Let's discuss how my experience in financial accounting and business analysis can contribute to your
            organization's success.
          </p>
          <a
            href="mailto:abdulmananca2006@gmail.com"
            className="inline-block px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-xl"
            style={{ background: 'var(--accent-blue)', color: 'white' }}
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}
