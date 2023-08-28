// pages/posts/post1.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './Post1.module.css';


const suggestedArticles = [
    {
      id: 'post2',
      title: 'The Rise of Women in Boxing',
    },
    {
      id: 'post3',
      title: 'Famous Boxing Matches in History',
    },
    {
      id: 'post4',
      title: 'Training Techniques of Boxing Champions',
    },
  ];
  

const Post1 = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Evolution of Boxing Techniques</title>
        <meta name="description" content="Explore the history and evolution of boxing techniques over the years." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.articleContent}>
        <h1 className={styles.title}>The Evolution of Boxing Techniques</h1>
          <p>
            Boxing has a rich history that spans centuries, and with that history comes a fascinating evolution of techniques. From bare-knuckle brawls to modern professional boxing, the sport has seen remarkable changes in technique and strategy.
          </p>
          <p>
            In the early days of boxing, fighters relied heavily on raw power and endurance. There were minimal rules, and matches often lasted for dozens of rounds. As the sport gained popularity and regulations were introduced, fighters started to refine their techniques for efficiency and effectiveness.
          </p>
          <p>
            The introduction of gloves and weight classes marked significant turning points in boxing's evolution. Fighters began to emphasize speed, precision, and defensive maneuvers. Techniques like the jab, hook, uppercut, and footwork became essential components of a boxer's arsenal.
          </p>
          <p>
            Over the years, boxing techniques continued to evolve with the influence of legendary fighters and trainers. The peek-a-boo style of defense popularized by Cus D'Amato and mastered by Mike Tyson, the counterpunching brilliance of Muhammad Ali, and the defensive prowess of Floyd Mayweather Jr. are just a few examples of the diverse techniques that have emerged.
          </p>
          <p>
            Today, boxing techniques continue to evolve with advancements in sports science and technology. Fighters analyze their opponents' movements using sophisticated tools, and training regimens are tailored to optimize performance. The sport remains a dynamic blend of athleticism, strategy, and adaptability.
          </p>
          <p>
            Whether you're a seasoned boxing enthusiast or a newcomer to the sport, understanding its evolution provides a deeper appreciation for the skills and dedication required by the athletes. The techniques that have developed over centuries reflect the ever-changing nature of the sport and its enduring appeal.
          </p>
        </div>
        <div className={styles.backLink}>
          <Link href="/">
            Back to Home
          </Link>
        </div>


        <div className={styles.suggestedArticles}>
          <h2>Suggested Articles</h2>
          <ul className={styles.suggestedList}>
            {suggestedArticles.map(article => (
              <li key={article.id} className={styles.suggestedItem}>
                <Link href={`/posts/${article.id}`}>
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </main>

      <footer className={styles.footer}>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Post1;
