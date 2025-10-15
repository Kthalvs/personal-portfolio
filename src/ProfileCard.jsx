import React from 'react';

// Use the absolute path. This works if your image is in the 'public/images/' folder.
const ProfilePic = '/images/profile.png'; 

function ProfileCard() {
  return (
    // Use a section or div to hold the card content.
    // The background-color is set here for context but is usually defined in CSS.
    <section style={{ padding: '80px 20px', backgroundColor: '#fff5f8' }}>
      <div className="profile-card">
        
        {/* Profile Picture (Centered on top) */}
        <img 
          src={ProfilePic} 
          alt="Kathline Alvarado Profile" 
          className="profile-picture"
        />
        
        {/* Large Name */}
        <h2 className="profile-name">
          Kathline Alvarado
        </h2>
        
        {/* Smaller Subtitle */}
        <p className="profile-subtitle">
          BS Information Systems<br/>
          3rd Year
        </p>
      </div>
    </section>
  );
}

export default ProfileCard;