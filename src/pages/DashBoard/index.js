
import React, { useState, useEffect } from 'react';

function DashBoard() {
  // State to hold user profile details
  const [profile, setProfile] = useState(null);

  // Mock user profile data
  const mockProfile = { 
    username: 'exampleUser',
    email: 'user@example.com',
    // Add more mock data as needed
  };

  // Function to simulate fetching user profile details
  const fetchUserProfile = () => {
    // Simulate a delay to mimic an API request
    setTimeout(() => {
      setProfile(mockProfile);
    }, 1000); // Adjust the delay as needed
  };

  // useEffect to fetch user profile details when the component mounts
  useEffect(() => {
    fetchUserProfile();
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div className='user-profile'>
      <h1>User Profile</h1>
      {profile ? (
        <div className='info'>
          <p>Username: {profile.username}</p>
          <p>Email: {profile.email}</p>
          {/* Display other user information as needed */}
        </div>
      ) : (
        <p className='paragrah-user'>Loading user profile...</p>
      )}
    </div>
  );
}


// this  is used as a placeholder for the user profile data. The fetchUserProfile function simulates the asynchronous process of fetching data. You can customize the mockProfile object with any mock data you'd like to display in your component.

// in a real-world scenario, you would replace the fetchUserProfile function with an actual API call to retrieve user profile details from your server.






export default DashBoard;
