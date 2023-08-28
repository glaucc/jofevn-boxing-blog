// pages/contact.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Boxing Articles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Contact Us</h1>
          <p>
            We'd love to hear from you! If you have any questions, suggestions, or feedback about our content, feel free to reach out to us.
          </p>
          <p>
            You can contact us via email at <a href="mailto:jofevn@gmail.com">jofevn@gmail.com</a> or by using the contact form below.
          </p>
          
          <form className={styles.contactForm}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required />

            <button type="submit">Send</button>
          </form>
          {/* Add more contact information or form fields here */}
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

export default Contact;
