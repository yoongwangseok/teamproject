import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import iconSearch from '../assets/icon/icon-search.png'

export default function Header({title}) {

  return (
    <header className={styles.header}>
      <h1 className={styles["header-title"]}>{title}</h1>
      <img className={styles["search-icon"]} src={iconSearch} alt="검색" />
    </header>
  );
}
