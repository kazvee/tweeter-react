import React from 'react';

const TweetForm = () => {
  const tagline = "What are you humming about?";

  return (
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form" onSubmit={(event) => event.preventDefault()}>
        <textarea className="form__textarea" name="text" placeholder={tagline}></textarea>
        <input type="submit" value="Tweet" className="form__input" onClick={(event) => event.preventDefault()} />
        <span className="form__counter">140</span>
      </form>
    </section>
  );
};

export default TweetForm;