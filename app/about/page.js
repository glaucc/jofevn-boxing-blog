// pages/about.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
        <meta name="description" content="About Boxing Articles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>About Us</h1>
          <p>
            Welcome to Boxing Articles, your go-to source for interesting articles and insights about the world of boxing. Our passion for the sport drives us to provide you with accurate and engaging content.
          </p>
          <p>
            Our team consists of boxing enthusiasts and experts who are dedicated to delivering high-quality articles that cover various aspects of boxing. From the history of the sport to in-depth analysis of techniques, we strive to provide informative and entertaining content for all boxing enthusiasts.
          </p>
          <p>
            Whether you're a seasoned boxing fan or new to the sport, our goal is to share our knowledge and passion with you. We believe in the power of boxing to inspire, challenge, and entertain, and we're excited to have you join us on this journey.
          </p>
          {/* Add more "About Us" content here */}
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <Link href="/">
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
