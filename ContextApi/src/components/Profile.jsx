
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className='bg-gray-100 p-6 mt-6 rounded-lg shadow-md w-[90%] max-w-md text-center'>
      {!user ? (
        <h2 className='text-xl font-medium text-gray-700'>Please Login</h2>
      ) : (
        <h2 className='text-2xl font-bold text-green-600'>
          Welcome, {user.username}!
        </h2>
      
      )}
    </div>
  );
}

export default Profile;
