/* File: pages/index.tsx */
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import '../styles/globals.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Grimper.Digital | Resultados Reais ou Nada</title>
        <meta name="description" content="Marketing digital para pequenos e médios negócios. Só recebemos se gerarmos resultado." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Grimper.Digital</h1>
        <p className={styles.subtitle}>Marketing digital underground. Só recebemos se der resultado.</p>

        <section className={styles.section}>
          <h2>O que fazemos?</h2>
          <ul>
            <li>Gestão de Tráfego (Google Ads & Meta Ads)</li>
            <li>Criação de Sites e Landing Pages</li>
            <li>Implementação de Google Analytics, Tag Manager e Looker Studio</li>
            <li>Email Marketing e E-commerce</li>
            <li>Desenvolvimento Front-End sob demanda</li>
          </ul>
        </section>

        <section className={styles.sectionDark}>
          <h2>Modelo de Trabalho</h2>
          <p>Você investe em mídia. Se gerar resultado, a gente divide o lucro. Se não funcionar, você não paga nada além dos créditos da campanha. Simples assim.</p>
        </section>

        <section className={styles.ctaSection}>
          <h2>Quer testar sem compromisso?</h2>
          <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>Fale com a Grimper no WhatsApp</a>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Grimper.Digital - Resultados ou Nada</p>
      </footer>
    </div>
  );
}
