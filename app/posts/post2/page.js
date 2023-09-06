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
          In the heart-pounding world of professional boxing, the 21st century has been a treasure trove of unforgettable moments, iconic rivalries, and epic showdowns that have left audiences on the edge of their seats. From the legendary clashes of seasoned champions to the rise of new boxing prodigies, the sport has continuously evolved, producing some of the most intense and dramatic battles in its storied history.
          </p>
          <br></br>
          <p>
          As we step into the ring of memory, we'll recall the bouts that defined an era, matches that showcased extraordinary skill, boundless courage, and unyielding determination. Join us as we revisit the Famous Boxing Matches of the 21st Century, a journey through the blood, sweat, and tears of fighters who etched their names into the annals of boxing history.          
          </p>
          <br></br>
          <p><strong>

          1. Muhammad Ali vs. Joe Frazier III (Thrilla in Manila) - 1975:
          </strong>
          </p>
          <p>
          While this bout occurred in the 20th century, it's often considered one of the greatest matches in boxing history. The brutal 14-round encounter between Ali and Frazier captivated fans worldwide.          
          </p><br></br>
          <p><strong>

          2. Manny Pacquiao vs. Juan Manuel Marquez IV - 2012:
          </strong>
          </p>
          <p>
          The fourth fight between Pacquiao and Marquez was a thrilling showdown that ended with a stunning knockout by Marquez in the sixth round.
</p>

<br></br>
          <p><strong>

          3. Floyd Mayweather Jr. vs. Manny Pacquiao - 2015:
          </strong>
          </p>
          <p>
          This "Fight of the Century" brought together two of the most famous boxers of the era. Mayweather won by unanimous decision in a highly anticipated bout.

</p>

<br></br>
          <p><strong>

          4. Arturo Gatti vs. Micky Ward Trilogy - 2002-2003:
          </strong>
          </p>
          <p>
          These three fights between Gatti and Ward are renowned for their back-and-forth action and were a testament to the heart and determination of both fighters.

</p>

<br></br>
          <p><strong>

          5. Lennox Lewis vs. Vitali Klitschko - 2003:

          </strong>
          </p>
          <p>
          In this heavyweight clash, Lennox Lewis retained his title after a fierce battle with Klitschko, who showed tremendous courage despite a deep cut.

</p>

<br></br>
          <p><strong>

          6. Diego Corrales vs. Jose Luis Castillo I - 2005:

          </strong>
          </p>
          <p>
          Corrales and Castillo engaged in a brutal lightweight fight that included a memorable 10th round where Corrales came back from multiple knockdowns to win.

</p>

<br></br>
          <p><strong>

          7. Gennady Golovkin vs. Canelo Alvarez I and II - 2017 and 2018:

          </strong>
          </p>
          <p>
          These middleweight battles between Golovkin and Alvarez showcased elite-level boxing skills and ended in a draw and a close decision win for Alvarez, respectively.

</p>

<br></br>
          <p><strong>

          8. Anthony Joshua vs. Wladimir Klitschko - 2017:


          </strong>
          </p>
          <p>
          Joshua faced Klitschko in a heavyweight clash that saw both fighters hit the canvas before Joshua emerged victorious.


</p>

<br></br>
          <p><strong>

          9. Miguel Cotto vs. Antonio Margarito I - 2008:


          </strong>
          </p>
          <p>
          Cotto and Margarito had a fierce encounter, and Cotto emerged victorious, avenging his later-disputed loss to Margarito.


</p>

<br></br>
          <p><strong>

          10. Timothy Bradley vs. Ruslan Provodnikov - 2013:


          </strong>
          </p>
          <p>
          Bradley and Provodnikov's welterweight fight was a slugfest that showcased incredible toughness and heart from both fighters.


</p>
<br></br>
<p><strong>Conclusion:</strong></p>
<p>In the ever-evolving world of boxing, the 21st century has provided us with a collection of matches that will forever be etched in our collective memory. From the dazzling skills of fighters like Floyd Mayweather Jr. to the sheer determination of Manny Pacquiao, these battles showcased the essence of what makes boxing so compelling — heart, grit, and the relentless pursuit of greatness.</p>
  <br></br>
  <p>As we conclude our journey through the Famous Boxing Matches of the 21st Century, we're reminded of the sheer human spirit that these fighters exhibited in the ring. Their unwavering dedication to their craft and the willingness to face adversity head-on is a testament to the enduring allure of the sweet science.

</p>
<br></br>
  <p>While the boxing world continues to evolve and new champions emerge, these iconic matches serve as a timeless reminder of the sheer drama and excitement that only boxing can deliver. As we bid farewell to this retrospective, we look forward to the future, where new legends will rise, new battles will captivate us, and the spirit of boxing will continue to thrive.
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
