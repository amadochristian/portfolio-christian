
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-3/5 h-full bg-gradient-to-br from-grimper-primary-dark to-grimper-primary clip-polygon bg-hero-pattern" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-grimper-darker to-transparent" />
      </div>

      {/* Animated circles */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-grimper-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/3 -right-20 w-60 h-60 bg-grimper-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="container-width px-4 sm:px-6 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-right">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Suba de Nível com a{' '}
              <span className="bg-gradient-to-r from-grimper-secondary to-grimper-accent bg-clip-text text-transparent">
                Grimper.Digital
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Impulsionamos marcas com estratégias inteligentes de tráfego pago, sites que convertem e redes sociais que engajam.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contato" className="btn-primary">
                Solicite uma Proposta
              </a>
              <a href="#serviços" className="btn-secondary group">
                Conheça nossos serviços
                <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" size={18} />
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block animate-fade-left">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                alt="Marketing Digital Estratégico" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -right-5 -bottom-5 w-full h-full border-2 border-grimper-secondary rounded-lg -z-10" />
            <div className="absolute -left-5 -top-5 w-3/4 h-3/4 bg-grimper-primary/10 rounded-lg blur-lg -z-10 animate-float" style={{ animationDuration: '7s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
