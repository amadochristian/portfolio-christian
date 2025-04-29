
import { useState, useEffect, useRef } from 'react';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatItem = ({ value, label, suffix = "", delay = 0 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const timeout = setTimeout(() => {
      const duration = 2000;
      const start = performance.now();
      
      const animate = (time: number) => {
        const elapsed = time - start;
        const progress = Math.min(elapsed / duration, 1);
        const currentCount = Math.floor(progress * value);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return (
    <div 
      ref={ref}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-8 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-grimper-primary/10 hover:border-grimper-primary/30"
    >
      <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-400 font-medium">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatItem value={85} label="ROI em campanhas" suffix="%" delay={0} />
      <StatItem value={200} label="Projetos entregues" suffix="+" delay={200} />
      <StatItem value={100} label="Foco em resultados" suffix="%" delay={400} />
    </div>
  );
};

export default Stats;
