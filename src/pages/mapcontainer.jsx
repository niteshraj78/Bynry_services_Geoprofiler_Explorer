import React from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

const MapContainer = ({ profiles }) => {
  return (
    <div className='MapContainer' style={containerStyle}>
      <div className='MapCard' style={mapCardStyle}>
        <div className='Map' style={mapStyle}>
          <LeafletMap center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {profiles.map((profile, id) => (
              <Marker key={id} position={profile.coordinates}>
                <Popup>
                  <div style={popupContainer}>
                    <div style={profileDetailsContainer}>
                      <h2>{profile.name}</h2>
                      <p>{profile.address}</p>
                      {/* Additional profile details */}
                      <p>Email: {profile.email}</p>
                      <p>Phone: {profile.phone}</p>
                      {/* Add more details as needed */}
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </LeafletMap>
        </div>
      </div>
    </div>
  );
};

// CSS styles
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // Adjust height as needed
};

const mapCardStyle = {
  width: '90%',
  height: '800px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const mapStyle = {
  height: '100%',
  width: '100%',
};

const popupContainer = {
  padding: '10px',
};

const profileDetailsContainer = {
  padding: '20px',
  backgroundColor: '#f9f9f9',
  border: '1px solid #ddd',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

export default MapContainer;
