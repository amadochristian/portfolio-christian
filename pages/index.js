import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Olá, eu sou o Christian!</h1>
      <Image
        src="/profile.jpg"
        alt="Foto de perfil"
        width={150}
        height={150}
        className={styles.profileImage}
      />
      <p className={styles.description}>
        Bem-vindo ao meu portfólio. Aqui você encontrará alguns dos meus projetos e habilidades.
      </p>
    </div>
  );
}
