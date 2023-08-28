// pages/index.js
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {
  const posts = [
    {
      id: 'post1',
      title: 'The Evolution of Boxing Techniques',
      content: 'Explore the history and evolution of boxing techniques over the years.',
    },
    {
      id: 'post2',
      title: 'Famous Boxing Matches of the 21st Century',
      content: 'Recall some of the most intense and iconic boxing matches of the 21st century.',
    },
    {
      id: 'post3',
      title: 'Training Regimens of Professional Boxers',
      content: 'Learn about the rigorous training routines that professional boxers follow.',
    },
    {
      id: 'post4',
      title: 'The Mental Game: Psychology in Boxing',
      content: 'Discover how mental strength and psychology play a crucial role in boxing success.',
    },
    
    // Add more posts here
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Boxing Articles</title>
        <meta name="description" content="Interesting articles about boxing." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Boxing Articles</h1>

        <div className={styles.articles}>
          {posts.map(post => (
            <div className={styles.article} key={post.id}>
              <Link href={`/posts/${post.id}`}>
                
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                
              </Link>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
  <div className={styles.footerContent}>
    <div className={styles.footerLinks}>
      <Link href="/about">
        <span className={styles.footerLink}>About Us</span>
      </Link>
      <Link href="/contact">
        <span className={styles.footerLink}>Contact</span>
      </Link>
      <Link href="/privacy-policy">
        <span className={styles.footerLink}>Privacy Policy</span>
      </Link>
    </div>
  </div>
  <p className={styles.footerCopyright}>
    © {new Date().getFullYear()} Boxing Articles. All rights reserved.
  </p>
</footer> 
    </div>
  );
};

export default Home;
