// components/ViewAllButton.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const ViewAllButton = () => {
  return (
    <div className={styles.viewAllButtonContainer}>
      <Link href="/all-articles" className={styles.viewAllButton}>
            View All Articles
      </Link>
    </div>
  );
};

export default ViewAllButton;
