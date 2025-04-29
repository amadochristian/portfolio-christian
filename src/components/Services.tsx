
import { TrendingUp, Monitor, MessageSquare } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features 
}: { 
  icon: any, 
  title: string, 
  description: string, 
  features: string[] 
}) => (
  <div className="bg-grimper-dark border border-white/5 rounded-2xl p-6 card-hover hover:border-grimper-primary/30 group">
    <div className="p-4 rounded-xl bg-gradient-to-br from-grimper-primary/20 to-grimper-secondary/20 inline-block mb-6 group-hover:bg-gradient-to-br group-hover:from-grimper-primary/30 group-hover:to-grimper-secondary/30 transition-all duration-300">
      <Icon size={30} className="text-grimper-secondary" />
    </div>
    
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 mb-6">{description}</p>
    
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <svg className="h-5 w-5 text-grimper-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Gestão de Tráfego Pago",
      description: "Atraia mais clientes com campanhas otimizadas no Google, Facebook, Instagram e TikTok Ads.",
      features: ["Anúncios de alta conversão", "Otimização contínua", "Relatórios transparentes"]
    },
    {
      icon: Monitor,
      title: "Criação de Sites Profissionais",
      description: "Sites responsivos, rápidos e bonitos. Desenvolvidos para encantar visitantes e gerar conversões.",
      features: ["Design moderno", "Otimizado para SEO", "Integrações completas"]
    },
    {
      icon: MessageSquare,
      title: "Gestão de Redes Sociais",
      description: "Conteúdo estratégico que transforma suas redes em canais de vendas e relacionamento.",
      features: ["Conteúdo premium", "Estratégia personalizada", "Engajamento garantido"]
    }
  ];

  return (
    <section id="serviços" className="section-padding">
      <div className="container-width px-4">
        <div className="text-center max-w-xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1 rounded-full bg-grimper-primary/10 border border-grimper-primary/20 text-grimper-secondary text-sm font-medium mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">O que podemos fazer por você</h2>
          <p className="text-gray-400">Soluções completas para alavancar seu negócio com estratégias digitais que realmente funcionam.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
