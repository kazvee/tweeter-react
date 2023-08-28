import React from 'react';
import Tweet from '../components/Tweet';

const TweetList = () => {
  return (
    <section className="tweets">
      <Tweet />
      <Tweet />
    </section>
  );
};

export default TweetList;