
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "A Grimper.Digital transformou completamente nossa presença online. As estratégias de tráfego pago aumentaram nossas vendas em 70% em apenas 3 meses!",
    author: "Ana Silva",
    role: "CEO, TechStore",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "Com a gestão de redes sociais da Grimper, conseguimos aumentar nosso engajamento em 120% e converter seguidores em clientes fiéis.",
    author: "Carlos Eduardo",
    role: "Diretor de Marketing, Fitness Plus",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "O novo site desenvolvido pela equipe é simplesmente incrível! Rápido, bonito e principalmente, eficiente em conversões.",
    author: "Mariana Costa",
    role: "Fundadora, Studio M",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&auto=format&fit=crop&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="section-padding bg-grimper-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-grimper-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-grimper-secondary/10 rounded-full blur-3xl" />
      
      <div className="container-width px-4 relative">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-grimper-primary/10 border border-grimper-primary/20 text-grimper-secondary text-sm font-medium mb-4">
            Depoimentos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">O que nossos clientes dizem</h2>
          <p className="text-gray-400">Histórias de sucesso dos nossos parceiros que confiaram na Grimper.Digital para impulsionar seus negócios.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-grimper-dark to-grimper-darker p-1 rounded-2xl">
            <div className="bg-grimper-darker rounded-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-grimper-primary/30">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="mb-6 text-xl md:text-2xl italic text-gray-200 relative">
                    <svg className="absolute -top-6 -left-6 h-12 w-12 text-grimper-primary/20" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zM10 26c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM24 8c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zM24 26c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"></path>
                    </svg>
                    {testimonials[activeIndex].quote}
                  </div>
                  
                  <div>
                    <div className="font-bold text-white">{testimonials[activeIndex].author}</div>
                    <div className="text-grimper-secondary">{testimonials[activeIndex].role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeIndex === index 
                      ? 'bg-grimper-secondary w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        {/* Client Logos */}
        <div className="mt-20">
          <p className="text-center text-gray-500 mb-8">Empresas que confiam na Grimper.Digital</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                <div className="bg-white/5 h-16 w-32 rounded-md flex items-center justify-center">
                  <div className="text-xl font-bold text-gradient">LOGO {i+1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
