
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-grimper-dark pt-16 pb-6">
      <div className="container-width px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-gradient">Grimper</span>.Digital
            </h3>
            <p className="text-gray-400 mb-6">
              Estratégia, Criatividade e Resultado para seu negócio digital.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-grimper-primary/20 text-white/70 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-grimper-primary/20 text-white/70 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-grimper-primary/20 text-white/70 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Sobre</h4>
            <ul className="space-y-3">
              {['Quem Somos', 'Portfólio', 'Blog', 'Cases'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-grimper-secondary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Serviços</h4>
            <ul className="space-y-3">
              {['Tráfego Pago', 'Criação de Sites', 'Redes Sociais', 'E-mail Marketing'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-grimper-secondary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contato@grimper.digital" className="flex items-center text-gray-400 hover:text-grimper-secondary transition-colors">
                  <Mail size={18} className="mr-3" />
                  contato@grimper.digital
                </a>
              </li>
              <li>
                <a href="tel:+5511999999999" className="flex items-center text-gray-400 hover:text-grimper-secondary transition-colors">
                  <Phone size={18} className="mr-3" />
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin size={18} className="mr-3" />
                São Paulo - SP
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 Grimper.Digital — Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-grimper-secondary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-grimper-secondary transition-colors">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
