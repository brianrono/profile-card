import React from 'react';

const UserProfile = ({name, age, hobbies}) => {
    return (
        <div className="profile-card">
            <h2 className="profile-name">{name}</h2>
            <p className="profile-age">{age}</p>
            <ul className="profile-hobbies">
                <h4>Hobbies</h4>
                {hobbies.map(hobby => (
                    <li key={hobby}>{hobby}</li>
                ))}
            </ul>
        </div>
    );
};
export default UserProfile;