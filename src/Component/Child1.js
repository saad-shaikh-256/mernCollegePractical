import React, { useContext } from 'react';
import { userContext } from './Context';

const Child1 = () => {
  const username = useContext(userContext);
  return (
    <div>
      <h2>Username: {username}</h2>
    </div>
  )
}

export default Child1;