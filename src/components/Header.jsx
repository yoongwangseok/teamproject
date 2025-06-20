import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header({title}) {

  return (
    <header>
      <h1 className={styles.h1}>{title}</h1>
    </header>
  );
}
