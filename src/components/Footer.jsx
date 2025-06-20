import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Footer.module.css';
import FooterContext from '../contexts/FooterContext';

export default function Footer() {
  const isHidden = useContext(FooterContext);

  return isHidden ? '' : (
    <footer>
      <h1 className={styles.h1}>Footer</h1>
    </footer>
  );
}
