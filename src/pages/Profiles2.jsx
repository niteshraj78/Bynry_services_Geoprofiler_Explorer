// import Entry from '../components/profileCards/Entry'; // Assuming Entry component is defined here
// import ProfilesData from '../components/profileCards/ProfilesData'; 

// export const Profiles2 = () => {
//     function createEntry(profile) {
//         return (
//           <Entry
//             key={profile.id}
//             id={profile.id}
//             imageURL={profile.imageURL}
//             name={profile.name}
//             description={profile.description}
//           />
//         );
//       }

//     return (
//         <div className="dictionary" style={{marginTop:"100px",width:"80%"}}>
//             {ProfilesData.map(createEntry)}
//         </div>
//     )
// }

import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Entry from '../components/profileCards/Entry'; // Assuming Entry component is defined here
import ProfilesData from '../components/profileCards/ProfilesData'; // Assuming ProfilesData is imported here

const Profiles2 = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  function createEntry(profile) {
    return (
      <Entry
        key={profile.id}
        id={profile.id}
        imageURL={profile.imageURL}
        name={profile.name}
        description={profile.description}
      />
    );
  }

  const filteredProfiles = ProfilesData && ProfilesData.filter((profile) => {
    const searchValue = searchQuery.toLowerCase();
    return (
      profile.name.toLowerCase().includes(searchValue) ||
      profile.id.toString().includes(searchValue)
    );
  });

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', /* Adjust as needed */
      backgroundColor: '#f0f0f0', /* Background color */
      padding: '20px', /* Padding */
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' /* Box shadow */
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px', /* Adjust as needed */
        marginBottom: '20px' /* Adjust as needed */
      }}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Button style={{marginRight:"5px"}} variant="dark">Search</Button>
        <input
          type="text"
          placeholder="Search by name or ID"
          value={searchQuery}
          onChange={handleSearch}
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            outline: 'none'
          }}
        />
        </div>
      </div>
      <div className="dictionary">
        {filteredProfiles && filteredProfiles.map(createEntry)}
      </div>
    </div>
  );
  
  // return (
  //   <div>
  //     <input
  //       type="text"
  //       placeholder="Search by name or ID"
  //       value={searchQuery}
  //       onChange={handleSearch}
  //     />
  //     <div className="dictionary" style={{ marginTop: "20px" }}>
  //       {filteredProfiles && filteredProfiles.map(createEntry)}
  //     </div>
  //   </div>
  // );
};

export default Profiles2;
