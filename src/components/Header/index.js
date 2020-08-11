import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import dog from '../../assets/dogs.svg';
import { UserContext } from '../../Hooks/UserContext';

export default function Header() {
  const { data } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <img src={dog} alt="Logo Dogs" />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}
