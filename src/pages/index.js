import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import logo from '@site/static/img/logo.png'

import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={`${styles.flex} ${styles.column} ${styles.mc} ${styles.cc} ${styles.full_page}`}>
      <img src={logo}/>

      <h1 className={`${styles.topPadding5rem}`}>
        Chainlink Smart Contracts - Mumbai Chapter
      </h1>
    </div>
  );
}
