
import Stats from './Stats';

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-grimper-dark">
      <div className="container-width px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-right">
            <div className="inline-block px-4 py-1 rounded-full bg-grimper-primary/10 border border-grimper-primary/20 text-grimper-secondary text-sm font-medium mb-2">
              Sobre a Agência
            </div>
            
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold">
              Marketing Digital com{' '}
              <span className="text-gradient">Propósito</span> e{' '}
              <span className="text-gradient">Performance</span>
            </h2>
            
            <p className="text-gray-300 text-lg">
              Na Grimper.Digital, somos movidos por resultados. Ajudamos empresas a crescer através de estratégias digitais personalizadas,
              combinando criatividade, dados e tecnologia para entregar crescimento consistente.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-grimper-primary/20 text-grimper-primary mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-medium">Missão</h3>
                </div>
                <p className="text-sm text-gray-400">Impulsionar o crescimento de negócios através de estratégias digitais inovadoras.</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-grimper-secondary/20 text-grimper-secondary mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="font-medium">Visão</h3>
                </div>
                <p className="text-sm text-gray-400">Ser referência em marketing digital com propósito no mercado brasileiro.</p>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-left">
            <Stats />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
