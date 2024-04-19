// Profile.jsx

import React, { useState } from 'react';
import Entry from '../components/profileCards/Entry';
import initialProfilesData from '../components/profileCards/ProfilesData';

export const Profiles = () => {
  // Initialize state with the initialProfilesData
  const [profilesData, setProfilesData] = useState(initialProfilesData);
  const [formData, setFormData] = useState({ id: '', name: '', imageURL: '', description: '' });
  const [newProfileData, setNewProfileData] = useState({ id: '', name: '', imageURL: '', description: '' });
  const [deleteId, setDeleteId] = useState(''); // State to store the ID for deletion

  // Function to update profile by ID
  const updateProfile = (id, newData) => {
    setProfilesData(prevData =>
      prevData.map(profile =>
        profile.id === id ? { ...profile, ...newData } : profile
      )
    );
  };

  // Function to add new profile
  const addNewProfile = () => {
    setProfilesData(prevData => [...prevData, newProfileData]);
    setNewProfileData({ id: '', name: '', imageURL: '', description: '' }); // Clear form after adding
  };

  // Function to delete profile by ID
  const deleteProfile = () => {
    if (deleteId.trim() !== '') {
      setProfilesData(prevData => prevData.filter(profile => profile.id !== parseInt(deleteId)));
      setDeleteId(''); // Clear input after deletion
    } else {
      alert('Please enter ID to delete.');
    }
  };

  // Handle form submission for updating
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const { id, name, imageURL, description } = formData;
    if (id.trim() !== '' && (name.trim() !== '' || imageURL.trim() !== '' || description.trim() !== '')) {
      const newData = {};
      if (name.trim() !== '') newData.name = name;
      if (imageURL.trim() !== '') newData.imageURL = imageURL;
      if (description.trim() !== '') newData.description = description;
      updateProfile(parseInt(id), newData);
      setFormData({ id: '', name: '', imageURL: '', description: '' }); // Clear form after submission
    } else {
      alert('Please enter ID and at least one field to update.');
    }
  };

  // Handle form submission for adding new profile
  const handleAddSubmit = (e) => {
    e.preventDefault();
    const { id, name, imageURL, description } = newProfileData;
    if (id.trim() !== '' && name.trim() !== '' && imageURL.trim() !== '' && description.trim() !== '') {
      addNewProfile();
    } else {
      alert('Please enter ID, name, imageURL, and description to add a new profile.');
    }
  };

  // Handle input changes for updating
  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle input changes for adding new profile
  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewProfileData(prevState => ({ ...prevState, [name]: value }));
  };

  function createEntry(profile) {
    return (
      <div key={profile.id} className="entry" style={profileStyles.entry}>
        <Entry
          id={profile.id}
          imageURL={profile.imageURL}
          name={profile.name}
          description={profile.description}
        />
        <button onClick={() => setDeleteId(profile.id)} style={profileStyles.deleteButton}>Delete</button>
      </div>
    );
  }

  return (
    <div className="dictionary" style={profileStyles.container}>
      <div className="row" style={profileStyles.row}>
        <div className="column" style={profileStyles.column}>
          <div className="card" style={profileStyles.card}>
            <h2>Update Profile</h2>
            <form onSubmit={handleUpdateSubmit} style={profileStyles.form}>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleUpdateChange}
                placeholder="Enter ID"
                style={profileStyles.input}
              />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleUpdateChange}
                placeholder="Enter New Name"
                style={profileStyles.input}
              />
              <input
                type="text"
                name="imageURL"
                value={formData.imageURL}
                onChange={handleUpdateChange}
                placeholder="Enter New Image URL"
                style={profileStyles.input}
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleUpdateChange}
                placeholder="Enter New Description"
                style={profileStyles.textarea}
              ></textarea>
              <button type="submit" style={profileStyles.button}>Update Profile</button>
            </form>
          </div>
        </div>

        <div className="column" style={profileStyles.column}>
          <div className="card" style={profileStyles.card}>
            <h2>Add New Profile</h2>
            <form onSubmit={handleAddSubmit} style={profileStyles.form}>
              <input
                type="text"
                name="id"
                value={newProfileData.id}
                onChange={handleAddChange}
                placeholder="Enter ID for new profile"
                style={profileStyles.input}
              />
              <input
                type="text"
                name="name"
                value={newProfileData.name}
                onChange={handleAddChange}
                placeholder="Enter Name for new profile"
                style={profileStyles.input}
              />
              <input
                type="text"
                name="imageURL"
                value={newProfileData.imageURL}
                onChange={handleAddChange}
                placeholder="Enter Image URL for new profile"
                style={profileStyles.input}
              />
              <textarea
                name="description"
                value={newProfileData.description}
                onChange={handleAddChange}
                placeholder="Enter Description for new profile"
                style={profileStyles.textarea}
              ></textarea>
              <button type="submit" style={profileStyles.button}>Add New Profile</button>
            </form>
          </div>
        </div>

        <div className="column" style={profileStyles.column}>
          <div className="card" style={profileStyles.card}>
            <h2>Delete Profile</h2>
            <div style={profileStyles.deleteContainer}>
              <input
                type="text"
                value={deleteId}
                onChange={(e) => setDeleteId(e.target.value)}
                placeholder="Enter ID to delete"
                style={profileStyles.input}
              />
              <button onClick={deleteProfile} style={profileStyles.button}>Delete Profile</button>
            </div>
          </div>
        </div>
      </div>

      <div className="entries-container" style={profileStyles.entriesContainer}>
        {profilesData.map(createEntry)}
      </div>
    </div>
  );
}

// Styles
const profileStyles = {
  container: {
    marginTop: "100px",
    width: "80%",
    textAlign: "center",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "20px",
  },
  column: {
    flex: "1",
    margin: "0 10px",
  },
  card: {
    padding: "20px",
    background: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "5px",
    textAlign: "left",
  },
  form: {
    width: '100%',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    fontSize: '16px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.4)',
    borderRadius: '20px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    fontSize: '16px',
    border: '1px solid rgba(0, 0, 0, 0.4)',
    borderRadius: '20px',
  },
  button: {
    width: '100%',
    padding: '10px 20px',
    backgroundColor: '#2ec2b0',
    color: '#fff',
    borderRadius: '40px',
    fontSize: '15px',
    cursor: 'pointer',
    textTransform: 'uppercase',
  },
  entry: {
    width: 'calc(33.33% - 20px)',
    marginBottom: '20px',
    padding: '10px',
    background: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '5px',
    display: 'inline-block',
    textAlign: 'center',
    verticalAlign: 'top',
    marginRight: '20px',
    boxSizing: 'border-box',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#ff6347',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  deleteContainer: {
    marginBottom: '20px',
  },
  entriesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

export default Profiles;
