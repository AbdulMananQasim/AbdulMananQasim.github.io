import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
}

export default function Counter({ end, duration = 2, suffix = '', label }: CounterProps) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!counterRef.current || hasAnimated.current) return;

    const element = counterRef.current;

    ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        gsap.to({ value: 0 }, {
          value: end,
          duration,
          ease: 'power2.out',
          onUpdate: function() {
            setCount(Math.floor(this.targets()[0].value));
          },
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [end, duration]);

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-5xl font-bold mb-2" style={{ color: 'var(--accent-blue)' }}>
        {count}{suffix}
      </div>
      <div className="text-sm" style={{ color: '#94a3b8' }}>{label}</div>
    </div>
  );
}
