
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-grimper-darker/90 backdrop-blur-lg shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-width flex justify-between items-center px-4">
        <a href="#" className="text-xl md:text-2xl font-bold text-white">
          <span className="text-gradient">Grimper</span>.Digital
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {['Serviços', 'Sobre', 'Cases', 'Blog', 'Contato'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contato" 
            className="btn-primary text-sm px-4 py-2"
          >
            Solicitar Proposta
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-grimper-dark absolute top-full left-0 w-full animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            {['Serviços', 'Sobre', 'Cases', 'Blog', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors py-2 px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contato" 
              className="btn-primary text-center" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Solicitar Proposta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
