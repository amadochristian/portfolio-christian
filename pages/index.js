import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Grimper.Digital - Marketing de Alta Performance</title>
        <meta name="description" content="Agência de marketing digital focada em tráfego pago, criação de sites e redes sociais." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Suba de Nível com a <span>Grimper.Digital</span></h1>
            <p>Impulsionamos marcas com estratégias inteligentes de tráfego pago, sites que convertem e redes sociais que engajam.</p>
            <div className={styles.ctaContainer}>
              <a href="#contato" className={styles.ctaPrimary}>Solicite uma Proposta</a>
              <a href="#servicos" className={styles.ctaSecondary}>Conheça nossos serviços →</a>
            </div>
          </div>
          <div className={styles.heroPattern}></div>
        </section>

        {/* Sobre a Agência */}
        <section className={styles.about}>
          <div className={styles.aboutContent}>
            <h2>Marketing Digital com <span>Propósito</span> e <span>Performance</span></h2>
            <p>
              Na Grimper.Digital, somos movidos por resultados. Ajudamos empresas a crescer através de estratégias digitais personalizadas,
              combinando criatividade, dados e tecnologia para entregar crescimento consistente.
            </p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>+85%</span>
                <span className={styles.statLabel}>ROI em campanhas</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>+200</span>
                <span className={styles.statLabel}>Projetos entregues</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Foco em resultados</span>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section className={styles.services} id="servicos">
          <div className={styles.sectionHeader}>
            <h2>O que podemos fazer por você</h2>
            <p className={styles.sectionSubtitle}>Soluções completas para alavancar seu negócio</p>
          </div>
          <div className={styles.serviceCards}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>📈</div>
              <h3>Gestão de Tráfego Pago</h3>
              <p>Atraia mais clientes com campanhas otimizadas no Google, Facebook, Instagram e TikTok Ads.</p>
              <ul className={styles.cardFeatures}>
                <li>Anúncios de alta conversão</li>
                <li>Otimização contínua</li>
                <li>Relatórios transparentes</li>
              </ul>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>💻</div>
              <h3>Criação de Sites Profissionais</h3>
              <p>Sites responsivos, rápidos e bonitos. Desenvolvidos para encantar visitantes e gerar conversões.</p>
              <ul className={styles.cardFeatures}>
                <li>Design moderno</li>
                <li>Otimizado para SEO</li>
                <li>Integrações completas</li>
              </ul>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>📱</div>
              <h3>Gestão de Redes Sociais</h3>
              <p>Conteúdo estratégico que transforma suas redes em canais de vendas e relacionamento.</p>
              <ul className={styles.cardFeatures}>
                <li>Conteúdo premium</li>
                <li>Estratégia personalizada</li>
                <li>Engajamento garantido</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className={styles.differentials}>
          <div className={styles.sectionHeader}>
            <h2>Por que escolher a Grimper.Digital</h2>
            <p className={styles.sectionSubtitle}>Nosso compromisso com sua evolução digital</p>
          </div>
          <div className={styles.differentialGrid}>
            <div className={styles.differentialItem}>
              <div className={styles.differentialIcon}>⚡</div>
              <h3>Performance</h3>
              <p>Focamos em métricas que realmente importam para o crescimento do seu negócio.</p>
            </div>
            <div className={styles.differentialItem}>
              <div className={styles.differentialIcon}>🔍</div>
              <h3>Transparência</h3>
              <p>Relatórios claros e reuniões periódicas para acompanhar cada resultado.</p>
            </div>
            <div className={styles.differentialItem}>
              <div className={styles.differentialIcon}>🧠</div>
              <h3>Estratégia</h3>
              <p>Planejamento personalizado baseado em dados e comportamento do consumidor.</p>
            </div>
            <div className={styles.differentialItem}>
              <div className={styles.differentialIcon}>🚀</div>
              <h3>Inovação</h3>
              <p>Sempre atualizados com as últimas tendências e tecnologias do mercado.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Pronto para transformar seu negócio?</h2>
            <p>Entre em contato agora e descubra como podemos impulsionar seus resultados com estratégias digitais inteligentes.</p>
            <div className={styles.ctaContainer}>
              <a href="#contato" className={styles.ctaPrimary}>Fale com um Especialista</a>
              <a href="tel:+5511999999999" className={styles.ctaSecondary}>(11) 99999-9999</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <h3>Grimper.Digital</h3>
              <p>Estratégia, Criatividade e Resultado para seu negócio digital.</p>
              <div className={styles.socialLinks}>
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
                <a href="#">Facebook</a>
              </div>
            </div>
            <div className={styles.footerMenus}>
              <div>
                <h4>Sobre</h4>
                <ul>
                  <li>Quem Somos</li>
                  <li>Portfólio</li>
                  <li>Blog</li>
                  <li>Cases</li>
                </ul>
              </div>
              <div>
                <h4>Serviços</h4>
                <ul>
                  <li>Tráfego Pago</li>
                  <li>Criação de Sites</li>
                  <li>Redes Sociais</li>
                  <li>E-mail Marketing</li>
                </ul>
              </div>
              <div>
                <h4>Contato</h4>
                <ul>
                  <li>contato@grimper.digital</li>
                  <li>(11) 99999-9999</li>
                  <li>São Paulo - SP</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p className={styles.copy}>© 2025 Grimper.Digital — Todos os direitos reservados.</p>
            <div className={styles.legalLinks}>
              <a href="#">Política de Privacidade</a>
              <a href="#">Termos de Serviço</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}