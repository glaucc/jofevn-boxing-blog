import Link from 'next/link';
import styles from '../../styles/AllArticles.module.css'; // Import your CSS module
import styles1 from '../../styles/NewsletterSignup.module.css'; // Import your page's CSS module

const AllArticles = () => {
  // Define your list of articles here
  const articles = [
    { id: 1, title: 'Article 1', content: 'Content for Article 1' },
    { id: 2, title: 'Article 2', content: 'Content for Article 2' },
    { id: 3, title: 'Article 3', content: 'Content for Article 3' },
  ];

  return (
    <div className={styles.container}>
      <div className='article-content'>
        <h1 className={styles.title}>All Articles</h1>
        <ul className={styles.articleList}>
          {articles.map(article => (
            <li key={article.id} className={styles.article}>
              <Link href={`/article/${article.id}`} className={styles.articleLink}>
                <h2 className={styles.articleTitle}>{article.title}</h2>
                <p className={styles.articleContent}>{article.content}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles1.newsletterSection}>
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with the latest articles and news.</p>
        <form action="your-newsletter-action-url" method="post">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <button type="submit" className={styles1.subscribeButton}>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default AllArticles;
