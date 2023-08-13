import React, { useState, useEffect } from 'react';

import Users from './components/Users';

const App = () => {
  // step1 : declare three states here : users, isLoading, error
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // step2 : use useEffect for fetching the data including updating isLoading and error states
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if ( !response.ok ) {
          throw Error('Error fetching users.')
        }
        return response.json()
      })
      .then((res) => {
        setIsLoading(false);
        setUsers(res);
        setError(null);

      })
      .catch((error)=> {
        setIsLoading(false);
        setError(error.message);
      })
  }, [])

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      {/* step3 : pass the users data to Users component  */}
      {
        users && <Users users={users} />
      }
    </div>
  );
};

export default App;
