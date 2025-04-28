import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'LinkedIn', url: '#', icon: 'linkedin' },
    { name: 'GitHub', url: '#', icon: 'github' },
    { name: 'Behance', url: '#', icon: 'behance' },
    { name: 'Instagram', url: '#', icon: 'instagram' }
  ];

  const portfolioItems = [
    { 
      id: 1,
      title: 'Site Institucional', 
      description: 'WordPress, Elementor', 
      thumb: 'https://via.placeholder.com/400x300',
      full: 'https://via.placeholder.com/800x600'
    },
    { 
      id: 2,
      title: 'Landing Page', 
      description: 'HTML, CSS, JavaScript', 
      thumb: 'https://via.placeholder.com/400x300',
      full: 'https://via.placeholder.com/800x600'
    },
    { 
      id: 3,
      title: 'E-commerce', 
      description: 'WordPress, WooCommerce', 
      thumb: 'https://via.placeholder.com/400x300',
      full: 'https://via.placeholder.com/800x600'
    }
  ];

  const skills = [
    { name: 'WordPress', icon: 'wordpress', percent: 90 },
    { name: 'HTML', icon: 'html5', percent: 85 },
    { name: 'CSS', icon: 'css3-alt', percent: 80 },
    { name: 'Photoshop', icon: 'camera-retro', percent: 75 }
  ];

  const education = [
    { degree: 'Marketing', institution: 'Faculdade Estácio', period: '2020/2023' },
    { degree: 'Técnico em Informática', institution: 'ETEC', period: '2015/2017' }
  ];

  const jobs = [
    {
      title: 'Analista em Marketing',
      company: 'Zanardi Empreendimentos',
      period: '2024',
      responsibilities: [
        'Campanha Meta Ads e Google Ads',
        'Produção de Landing Pages',
        'Lançamentos de Loteamentos',
        'Análise de Campanhas e métricas',
        'Produção de Vídeos e Artes Promocionais/Institucionais',
        'Atendimento SDR'
      ]
    },
    {
      title: 'Analista em Marketing',
      company: 'Maxxi Tacos',
      period: '2023',
      responsibilities: [
        'Análise de dados de tráfego de e-commerce',
        'Elaboração de Relatórios com Looker Studio',
        'Análise de Relatórios Power BI',
        'Estudo de métricas SEO e comportamento do cliente'
      ]
    },
    {
      title: 'Gestor em Marketing',
      company: 'Hotel Villa Santo Agostinho',
      period: '2020 - 2023',
      responsibilities: [
        'Campanhas Meta Ads e Google Ads para reservas do Hotel',
        'Produção de Landing Pages em Wordpress/Elementor',
        'Email Marketing e Endomarketing',
        'Criação de Animações com a Recreação',
        'Produção de Artes Promocionais'
      ]
    },
    {
      title: 'Assistente em Marketing',
      company: 'Dokar Veículos, concessionária autorizada Volkswagen',
      period: '2016 - 2017',
      responsibilities: [
        'Campanhas Meta Ads para venda de Veículos',
        'Endomarketing',
        'Produção de Artes Promocionais',
        'Produção de Vídeos Institucionais'
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Christian Amado - Web Designer</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <meta name="description" content="Portfólio profissional de Christian Amado" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className={`${styles.container} ${isLoaded ? styles.loaded : ''}`}>
        <header className={styles.header}>
          <div className={styles.profileImgContainer}>
            <img src="/profile.jpg" alt="Christian Amado" className={styles.profileImg} />
          </div>
          <div className={styles.headerText}>
            <h1 className={styles.headerTitle}>Christian Amado</h1>
            <p className={styles.objective}>Web Designer / Desenvolvimento / Front-end jr.</p>
          </div>
        </header>

        <div className={styles.mainContainer}>
          <aside className={styles.sidebar}>
            <div className={styles.aboutMe}>
              <p className={styles.aboutMeText}>Olá! meu nome é Christian, tenho 28 anos. Estou sempre em busca de inovação e aprendizado para trazer soluções modernas e eficazes aos projetos que assumo.</p>
            </div>

            <div className={styles.education}>
              <h2 className={styles.sectionTitle}>Formação Acadêmica</h2>
              {education.map((edu, index) => (
                <div key={index} className={styles.educationItem}>
                  <h3 className={styles.educationItemTitle}>{edu.degree}</h3>
                  <p className={styles.educationItemText}>{edu.institution} {edu.period}</p>
                </div>
              ))}
            </div>
          </aside>

          <main className={styles.portfolioSection}>
            <div className={styles.portfolioGrid}>
              {portfolioItems.map(item => (
                <div key={item.id} className={styles.portfolioCard} onClick={() => openModal(item.full)}>
                  <img src={item.thumb} alt={item.title} className={styles.portfolioImg} />
                  <div className={styles.portfolioInfo}>
                    <h3 className={styles.portfolioInfoTitle}>{item.title}</h3>
                    <p className={styles.portfolioInfoText}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.skillsSection}>
              <h2 className={styles.sectionTitle}>Habilidades</h2>
              {skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>
                      <i className={`fab fa-${skill.icon}`}></i> {skill.name}
                    </span>
                    <span className={styles.skillPercent}>{skill.percent}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div 
                      className={styles.skillProgress} 
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.experienceSection}>
              <h3 className={styles.expTitle}>Experiência Profissional</h3>
              {jobs.map((job, index) => (
                <div key={index} className={styles.job}>
                  <h4 className={styles.jobTitle}>{job.title}</h4>
                  <p className={styles.jobPeriod}><em>{job.company} / {job.period}</em></p>
                  <ul className={styles.jobList}>
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className={styles.jobListItem}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </main>
        </div>

        <footer className={styles.footer}>
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
          <p>© 2025 Christian Amado. Todos os direitos reservados.</p>
          <a href="#" className={styles.downloadBtn}>Download CV (PDF)</a>
        </footer>

        {modalOpen && (
          <div className={styles.modal} onClick={closeModal}>
            <span className={styles.close} onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}>&times;</span>
            <img className={styles.modalContent} src={modalImage} id="modalImage" />
          </div>
        )}

        <button 
          id="backToTop" 
          className={`${styles.backToTop} ${showBackToTop ? styles.show : ''}`} 
          title="Voltar ao topo"
          onClick={scrollToTop}
        >
          ↑
        </button>
      </div>
    </>
  );
}