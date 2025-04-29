import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Grimper.Digital - Marketing de Alta Performance</title>
        <meta name="description" content="Agência de marketing digital focada em tráfego pago, criação de sites e redes sociais." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1>Suba de Nível com a <span>Grimper.Digital</span></h1>
          <p>Impulsionamos marcas com estratégias inteligentes de tráfego pago, sites que convertem e redes sociais que engajam.</p>
          <a href="#contato" className={styles.cta}>Solicite uma Proposta Personalizada</a>
        </section>

        {/* Sobre a Agência */}
        <section className={styles.about}>
          <h2>Marketing Digital com Propósito e Performance</h2>
          <p>
            Na Grimper.Digital, somos movidos por resultados. Ajudamos empresas a crescer através de estratégias digitais personalizadas,
            combinando criatividade, dados e tecnologia.
          </p>
        </section>

        {/* Serviços */}
        <section className={styles.services}>
          <h2>O que podemos fazer por você</h2>
          <div className={styles.serviceCards}>
            <div className={styles.card}>
              <h3>Gestão de Tráfego Pago</h3>
              <p>Atraia mais clientes com campanhas otimizadas no Google, Facebook, Instagram e TikTok Ads.</p>
            </div>
            <div className={styles.card}>
              <h3>Criação de Sites Profissionais</h3>
              <p>Sites responsivos, rápidos e bonitos. Desenvolvidos para encantar visitantes e gerar conversões.</p>
            </div>
            <div className={styles.card}>
              <h3>Gestão de Redes Sociais</h3>
              <p>Conteúdo estratégico que transforma suas redes em canais de vendas e relacionamento com o público.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <h2>Quer atrair mais clientes e vender todos os dias?</h2>
          <p>Entre em contato agora e descubra como podemos transformar sua presença digital com inteligência e criatividade.</p>
          <a href="#contato" className={styles.cta}>Fale com um Especialista</a>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div>
              <h4>Sobre</h4>
              <ul>
                <li>Quem Somos</li>
                <li>Portfólio</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4>Serviços</h4>
              <ul>
                <li>Tráfego Pago</li>
                <li>Criação de Sites</li>
                <li>Redes Sociais</li>
              </ul>
            </div>
            <div>
              <h4>Contato</h4>
              <ul>
                <li>Email</li>
                <li>WhatsApp</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <p className={styles.copy}>© 2025 Grimper.Digital — Estratégia, Criatividade e Resultado.</p>
        </footer>
      </main>
    </>
  );
}
