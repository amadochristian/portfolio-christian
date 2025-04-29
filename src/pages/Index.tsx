
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import { Sparkles, Zap, Search, TrendingUp } from 'lucide-react';

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: <TrendingUp className="h-6 w-6 text-grimper-secondary" />,
      title: "Performance",
      description: "Focamos em métricas que realmente importam para o crescimento do seu negócio."
    },
    {
      icon: <Search className="h-6 w-6 text-grimper-secondary" />,
      title: "Transparência",
      description: "Relatórios claros e reuniões periódicas para acompanhar cada resultado."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-grimper-secondary" />,
      title: "Estratégia",
      description: "Planejamento personalizado baseado em dados e comportamento do consumidor."
    },
    {
      icon: <Zap className="h-6 w-6 text-grimper-secondary" />,
      title: "Inovação",
      description: "Sempre atualizados com as últimas tendências e tecnologias do mercado."
    }
  ];

  return (
    <section className="section-padding bg-grimper-dark">
      <div className="container-width px-4">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-grimper-primary/10 border border-grimper-primary/20 text-grimper-secondary text-sm font-medium mb-4">
            Nossos Diferenciais
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que escolher a Grimper.Digital</h2>
          <p className="text-gray-400">Nosso compromisso com sua evolução digital vai além do básico.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-grimper-primary/30 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="p-3 rounded-lg bg-white/5 inline-block mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  useEffect(() => {
    document.title = "Grimper.Digital - Marketing de Alta Performance";
  }, []);

  return (
    <div className="min-h-screen bg-grimper-darker text-grimper-light overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <DifferentialsSection />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
};

export default Index;
