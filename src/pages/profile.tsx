import React from 'react'
import Header from './header';
import { useState } from 'react';
import axios from 'axios';

const Profile = () => {

    const [profile, setProfile] = useState({
        profileImage: '',
        bio: '',
        firstName: '',
        lastName: '',
        displayName: '',
    });

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('/api/profile', profile)
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
    };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-900 to-indigo-600">
        
        <Header />
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="profileImage">
                Profile Image:
                <input
                type="file"
                name="profileImage"
                onChange={handleChange}
                />
            </label>
            <br />
            <label htmlFor="bio">
                Bio:
                <input
                type="text"
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                />
            </label>
            <br />
            <label htmlFor="firstName">
                First Name:
                <input
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleChange}
                />
            </label>
            <br />
            <label htmlFor="lastName">
                Last Name:
                <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleChange}
                />
            </label>
            <br />
            <label htmlFor="displayName">
                Display Name (@):
                <input
                type="text"
                name="displayName"
                value={profile.displayName}
                onChange={handleChange}
                />
            </label>
            <br />
            <button className="bg-orange-400 hover:bg-orange-200 text-white font-bold py-2 px-4 rounded" type="submit">Update Profile</button>
        </form>
    </div>
  )
}

export default Profile