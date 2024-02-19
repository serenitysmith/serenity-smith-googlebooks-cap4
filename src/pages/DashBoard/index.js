import React, { useState, useEffect } from 'react';
import { Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
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
    <div className='container mt-5'>
      <Card>
        <Card.Body>
          <div className="text-center mb-3">
            <Image
              src="https://cdn4.iconfinder.com/data/icons/human-resource-1-7/1024/employee_location-1024.png"
              roundedCircle
              alt="User Icon"
              style={{ width: '80px', height: '80px' }} // Adjust the size as needed
            />
          </div>
          <Card.Title className="text-center">User Profile</Card.Title>
          {profile ? (
            <div className='info'>
              <p><i className="fas fa-user"></i> Username: {profile.username}</p>
              <p><i className="fas fa-envelope"></i> Email: {profile.email}</p>
              {/* Display other user information as needed */}
            </div>
          ) : (
            <p className='paragraph-user text-center'>Loading user profile...</p>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Dashboard;
