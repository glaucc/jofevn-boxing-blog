'use client';

import { useEffect, useState } from 'react';
import styles from '../../../styles/WatchBoxingMatches.module.css'; // Import your component-specific styles


const LazyWatchBoxingMatches = () => {
  const [randomVideoId, setRandomVideoId] = useState('');

  useEffect(() => {
    async function fetchRandomVideo() {
      const apiKey = process.env.API_KEY; // Replace with your actual API key
      const playlistId = 'PLQcJnkxSzA8ypDBwz9wbP87MN4dNwklBO'; // Replace with your playlist ID

      try {
        // Fetch the list of videos in the playlist
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${playlistId}&part=snippet&maxResults=50`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch videos from the playlist.');
        }

        const data = await response.json();

        // Get a random video from the list
        const randomVideo = data.items[randomIndex].snippet.resourceId.videoId;

        // Set the random video ID to state
        setRandomVideoId(randomVideo);
      } catch (error) {
        console.error('Error fetching random video:', error);
      }
    }

    fetchRandomVideo();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Watch Random Boxing Matches</h1>
      <p className={styles.description}>
        Enjoy a random full-length boxing match from our collection.
      </p>

      {/* Embed the random video */}
      <div className={styles.videoWrapper}>
        {randomVideoId && (
          <iframe
            className={styles.videoIframe}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${randomVideoId}`}
            title="Random Boxing Match"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default LazyWatchBoxingMatches;
