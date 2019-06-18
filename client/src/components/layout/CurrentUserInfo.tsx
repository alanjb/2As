import React from 'react';

const CurrentUserInfo = (props: { firstName: string; lastName: string; username: string }) => {
    const { firstName, lastName, username } = props;
  
    return (
      <div className="user-info">
        signed in as{' '}
        <span>
          <strong>{username || `${firstName} ${lastName}`}</strong>
        </span>
      </div>
    );
  };