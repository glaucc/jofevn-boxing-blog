// pages/index.js
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ViewAllButton from '../components/ViewAllButton'; // Import the ViewAllButton component


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
      title: 'Full Training Routine of The Most Disciplined Boxer: Legendary Middleweight Champion Marvellious Marvin Hagler.',
      content: '',
    },
    {
      id: 'post4',
      title: 'The Psychology of Boxing: Mental Toughness in the Ring and How Boxers Developed This Mindset.',
      content: "",
    },
    {
      id: 'post5',
      title: 'Knockout Analysis - Breaking Down Famous Fights: Mike Tyson vs. Michael Spinks (1988)',
      content: '',
    },
    {
      id: 'post6',
      title: 'Knockout Analysis - Breaking Down Famous Fights: Muhammad Ali vs. Joe Frazier III',
      content: '',
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
        <h1 className={styles.title}>Welcome to Jofevn Boxing Articles</h1>

        <div className={styles.boxingGameSection}>
          <div className={styles.boxingGameInfo}>
            <h2>Test Your Real-World Fighting Knowledge</h2>
            <p>
              
Step into the world of real-world fighting knowledge and put your expertise to the test.
            </p>
            <Link href="/quiz"
              className={styles.playButton}>Take Quiz Now
            </Link>
          </div>

          <div className={styles.boxingGameAnimation}>
          <div className={styles.mikeTysonImage}>
        <img
          src="/tyson1.webp" // Replace with the path to your Mike Tyson photo
          alt="Mike Tyson"
          className={styles.mikeTysonImage}
        />
      </div>
          </div>
        </div>


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

        <ViewAllButton />

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
