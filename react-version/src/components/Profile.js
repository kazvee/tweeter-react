import React from 'react';

const Profile = () => {
  return (
    <aside>
      <div class="profile">
        <img class="profile__image" src="./profile-hex.png" alt="profile"/>
      </div>
      <br />
      <div class="profile__name">
        <h2><span class="profile--bold">Amy</span> Mansell</h2>
      </div>
    </aside>
  );
};

export default Profile;