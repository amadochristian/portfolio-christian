import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const socialLinks = [
    { name: 'GitHub', url: '#', icon: 'github' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin' },
    { name: 'Twitter', url: '#', icon: 'twitter' },
    { name: 'Instagram', url: '#', icon: 'instagram' },
    { name: 'Behance', url: '#', icon: 'behance' }
  ];

  return (
    <>
      <Head>
        <title>Christian Amado | Portfólio</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <meta name="description" content="Portfólio profissional de Christian Amado" />
      </Head>

      <div className={`${styles.container} ${isLoaded ? styles.loaded : ''}`}>
        <div className={styles.particles}>
          {[...Array(15)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animationDelay: `${Math.random() * 5}s`
            }} />
          ))}
        </div>

        <div className={styles.profileCard}>
          <div className={styles.profileImageContainer}>
            <img 
              src="/profile.jpg" 
              alt="Christian Amado" 
              className={styles.profileImage} 
            />
            <div className={styles.imageBorder}></div>
            <div className={styles.imageGlow}></div>
          </div>

          <h1 className={styles.title}>
            <span className={styles.greeting}>Olá!</span>
            <span className={styles.name}>Eu sou Christian Amado</span>
            <span className={styles.subtitle}>Desenvolvedor & Designer Criativo</span>
          </h1>

          <div className={styles.socialLinks}>
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                className={styles.socialLink}
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fab fa-${link.icon}`}></i>
              </a>
            ))}
          </div>

          <div className={styles.ctaButtons}>
            <a href="#contato" className={`${styles.ctaButton} ${styles.primary}`}>Contato</a>
            <a href="#projetos" className={`${styles.ctaButton} ${styles.secondary}`}>Meus Projetos</a>
          </div>
        </div>
      </div>
    </>
  );
}