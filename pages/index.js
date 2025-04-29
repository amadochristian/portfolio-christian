import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>Grimper<span>.digital</span></h1>
        <nav className={styles.nav}>
          <a href="#services">Serviços</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>

      <main className={styles.main}>
        <h2 className={styles.headline}>Impulsione seu negócio com marketing estratégico</h2>
        <p className={styles.subtext}>
          Soluções criativas e resultados reais para marcas que querem crescer.
        </p>
        <a href="#contact" className={styles.ctaButton}>Fale com a gente</a>
      </main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Grimper.Digital. Todos os direitos reservados.
      </footer>
    </div>
  );
}
