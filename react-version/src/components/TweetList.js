import React from 'react';

const TweetList = () => {
  return (
    <section class="tweets">
      <article class="tweet">
        <header class="tweet--header">
          <img class="tweet--avatar" src="https://i.imgur.com/73hZDYK.png" alt="avatar" />
          <h2 class="tweet--name">Newton</h2>
          <small class="tweet--handle">@SirIsaac</small>
        </header>

        <div class="tweet--body">
          <p>If I have seen further it is by standing on the shoulders of giants</p>
        </div>

        <footer class="tweet--footer">
          <small class="footer--age">10 days ago<small>
            <span class="footer--actions">
              <a href="#"><i class="fa fa-flag" alt="flag icon"></i></a>
              <a href="#"><i class="fa fa-retweet" alt="retweet icon"></i></a>
              <a href="#"><i class="fa fa-heart" alt="heart icon"></i></a>
            </span>
          </small></small></footer>
      </article>
      <article class="tweet">
        <header class="tweet--header">
          <img class="tweet--avatar" src="https://i.imgur.com/nlhLi3I.png" alt="avatar" />
          <h2 class="tweet--name">Descartes</h2>
          <small class="tweet--handle">@rd</small>
        </header>

        <div class="tweet--body">
          <p>Je pense , donc je suis</p>
        </div>

        <footer class="tweet--footer">
          <small class="footer--age">10 days ago<small>
            <span class="footer--actions">
              <a href="#"><i class="fa fa-flag" alt="flag icon"></i></a>
              <a href="#"><i class="fa fa-retweet" alt="retweet icon"></i></a>
              <a href="#"><i class="fa fa-heart" alt="heart icon"></i></a>
            </span>
          </small></small></footer>
      </article>

    </section>
  );
};

export default TweetList;