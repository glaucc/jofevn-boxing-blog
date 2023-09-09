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
        <title>Knockout Analysis - Breaking Down Famous Fights: Muhammad Ali vs. Joe Frazier III</title>
        <meta name="description" content="Knockout Analysis - Breaking Down Famous Fights: Muhammad Ali vs. Joe Frazier III" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.articleContent}>
          
        <h1 className={styles.title}>Knockout Analysis - Breaking Down Famous Fights: Muhammad Ali vs. Joe Frazier III</h1>
        <h2 className='header'>

    <strong>
Introduction
    </strong>
    </h2>
        <p>
In the annals of boxing history, few rivalries have ignited the imagination and left an indelible mark quite like the legendary feud between Muhammad Ali and Joe Frazier. A storied trilogy that transcended the sport itself, their battles inside the squared circle were more than just fights; they were epic sagas of willpower, skill, and unyielding determination.
			<br/>
			<br/>
Among these three monumental encounters, Muhammad Ali vs. Joe Frazier III stands as a pinnacle of pugilistic drama. It was a fight that would etch itself into the collective memory of boxing aficionados, leaving fans worldwide breathless and forever questioning what it truly means to be a fighter.
			<br/>
			<br/>
In this edition of "Knockout Analysis," we take you back to the thrilling climax of one of boxing's greatest rivalries - the Thrilla in Manila. We'll dissect the fight blow by blow, examining the strategies, the tactics, and the heart-stopping moments that culminated in a knockout finish that still reverberates through time.
			<br/>
			<br/>
Join us as we revisit the intense build-up, the climactic rounds, and the profound impact of Muhammad Ali vs. Joe Frazier III - a bout that showcased the best of both men, leaving an enduring legacy in the world of sports and cementing their places as two of the greatest fighters to ever step into the ring.
		</p><br/>

    <h2 className='header'>

    <strong>
      Round 1: A Fierce Grudge Match
    </strong>
    </h2>
    <p>  
Muhammad Ali vs. Joe Frazier III, better known as the "Thrilla in Manila," was the culmination of a bitter rivalry that had simmered for years. The tension between these two boxing giants was palpable as they entered the ring in the Philippines on October 1, 1975.
			<br/>
			<br/>
The first few rounds of this epic bout were nothing short of electrifying. Both Ali and Frazier displayed remarkable skills and relentless determination. Ali danced around the ring, utilizing his famed "rope-a-dope" strategy to tire out Frazier, who relentlessly pursued his elusive opponent.
			<br/>
			<br/>
<h2 className='header'>

    <strong>
    Round 6: Ali's Comeback Surge
    </strong>
    </h2>
As the middle rounds unfolded, Muhammad Ali began to assert his dominance. His sharp jabs and combinations found their mark, leaving Frazier's left eye swollen and nearly shut. The crowd in the Araneta Coliseum roared as Ali's tactical brilliance began to shine through.
			<br/>
			<br/>
But Frazier, known for his unbreakable will, refused to back down. He continued to press forward, landing powerful hooks to Ali's body and head, keeping the fight competitive despite the mounting damage to his eye.
			<br/>
			<br/>
<h2 className='header'>

    <strong>
    Round 12: The Thrilla Reaches Its Climax
    </strong>
    </h2>
It was in the sweltering heat of the Philippines that Muhammad Ali and Joe Frazier reached the pinnacle of their rivalry. Round 12 would go down in history as one of the most grueling rounds in boxing.
			<br/>
			<br/>
Both fighters were exhausted, their bodies battered and bruised. The heat and humidity inside the arena were unbearable, adding an extra layer of challenge to the already brutal contest. Ali and Frazier traded vicious blows, and with each punch, it seemed as though their determination grew stronger.
			<br/>
			<br/>
<h2 className='header'>

    <strong>
    The Climactic Knockout: A Legacy Defined
    </strong>
    </h2>
As the final round neared its conclusion, Joe Frazier's trainer, Eddie Futch, made the heart-wrenching decision to end the fight. Frazier's left eye was completely closed, rendering him unable to see his opponent. Despite Frazier's protests, Futch's decision was ultimately an act of compassion, protecting his fighter from further harm.
			<br/>
			<br/>
Muhammad Ali was declared the winner by technical knockout, securing his place in boxing history and ending a rivalry that had pushed both men to their limits.
			<br/>
			<br/>
<h2 className='header'>

    <strong>
Conclusion: A Fight Forever Remembered
    </strong>
    </h2>
Muhammad Ali vs. Joe Frazier III was more than a boxing match; it was a battle of wills, a test of endurance, and a showcase of the human spirit's indomitable strength. This fight analysis allows us to appreciate the strategic brilliance, raw determination, and heart that defined this legendary encounter. It stands as a testament to the enduring legacy of two boxing icons and serves as a reminder of the remarkable stories that unfold inside the squared circle.
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
