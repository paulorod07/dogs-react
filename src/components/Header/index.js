import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import dog from '../../assets/dogs.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <img src={dog} alt="Logo Dogs" />
        </Link>
        <Link className={styles.login} to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
}
