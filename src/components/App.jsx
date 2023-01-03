import React from 'react';
import { Profile } from 'components/Profile/Profile.jsx';
import user from 'components/Profile/user.json';
import { Statistics } from 'components/Statistics/Statistics.jsx';
import data from 'components/Statistics/data.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
};
