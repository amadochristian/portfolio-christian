
import { Phone } from 'lucide-react';

const Cta = () => {
  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-grimper-primary-dark to-grimper-primary bg-hero-pattern z-0"></div>
      
      {/* Radial blur elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-grimper-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="container-width px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Pronto para transformar seu negócio?
              </h2>
              <p className="text-gray-200 mb-8">
                Entre em contato agora e descubra como podemos impulsionar seus resultados com estratégias digitais inteligentes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contato" className="btn-primary">
                  Fale com um Especialista
                </a>
                <a href="tel:+5511999999999" className="btn-secondary flex items-center justify-center">
                  <Phone size={18} className="mr-2" />
                  (11) 99999-9999
                </a>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-grimper-secondary"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-grimper-secondary"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-grimper-secondary"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-grimper-secondary to-grimper-primary text-white font-medium py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-grimper-primary/25 transition-all duration-300"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
