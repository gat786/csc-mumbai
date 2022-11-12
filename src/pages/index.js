import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import logo from '@site/static/img/logo.png'
import { SocialIcon } from 'react-social-icons';

import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={`${styles.flex} ${styles.column} ${styles.mc} ${styles.cc} ${styles.full_page}`}>
      <img src={logo}/>

      <h1 className={`${styles.topPadding5rem} text-align-center`}>
        Chainlink Mumbai - Connected Smart Contracts
      </h1>

      <div className={`${styles.flex} ${styles.gap2} ${styles.topPadding2rem}`}>
        <SocialIcon 
          url='https://twitter.com/ChainlinkMumTwt' 
          target='_blank'/>

        <SocialIcon 
          url='https://www.meetup.com/chainlink-mumbai' 
          target='_blank'/>
      </div>

      <Link href='/events/' className={`text-white ${styles.topPadding2rem} underline`}>
        Check out our events here
      </Link>
      
    </div>
  );
}
