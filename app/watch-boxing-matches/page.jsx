// pages/Categories.js
import Link from 'next/link';
import styles from '../../styles/Categories.module.css';

const categories = [
  { id: 1, name: 'Greatest Boxing Fights' },
  { id: 2, name: 'Classic Matches' },
  { id: 3, name: 'Famous Matches' },
  { id: 4, name: 'Championship Bouts' },
  { id: 5, name: 'Historical Rivalries' },
  { id: 6, name: 'Heavyweight Showdowns' },
  { id: 7, name: 'Underdog Victories' },
  { id: 8, name: 'Legendary Boxers' },

];

const Categories = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories of Boxing Matches</h1>
      <div className={styles.categoriesGrid}>
        {categories.map(category => (
          
          <Link href={`/category/${category.id}`} key={category.id}
          className={styles.categoryItem}>
              {category.name}
          </Link>

        ))}
      </div>
    </div>
  );
};

export default Categories;
