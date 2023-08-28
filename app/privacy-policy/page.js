// pages/privacy-policy.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Privacy Policy for Boxing Articles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p>
            At Boxing Articles, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your personal information.
          </p>
          <p>
            <strong>Information Collection and Use</strong>
            <br />
            We may collect personal information such as your name, email address, and other relevant details when you interact with our website.
          </p>
          <p>
            <strong>How We Use Your Information</strong>
            <br />
            We use the collected information to provide and improve our services, communicate with you, and enhance your user experience.
          </p>
          <p>
            <strong>Cookies and Tracking</strong>
            <br />
            Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze usage patterns.
          </p>
          <p>
            <strong>Information Sharing</strong>
            <br />
            We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers to assist in delivering our services.
          </p>
          <p>
            <strong>Security</strong>
            <br />
            We take reasonable measures to protect your personal information. However, no data transmission over the internet can be guaranteed to be 100% secure.
          </p>
          <p>
            <strong>Changes to Privacy Policy</strong>
            <br />
            We may update this Privacy Policy from time to time. It is recommended to review this page periodically for any changes.
          </p>
          {/* Add more Privacy Policy content here */}
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

export default PrivacyPolicy;
