import React, { useState } from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import Entry from '../components/profileCards/Entry'; // Assuming Entry component is defined here
import ProfilesData from '../components/profileCards/ProfilesData'; 

const Navigation = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <Navbar expand="lg" className="bg-dark py-3 px-4">
      <Container fluid>
        <Navbar.Brand href="#">Geoprofiler Explorer</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="navbar-dark" />
        <Navbar.Collapse id="navbarScroll">
          <Form onSubmit={handleSearch} className="d-flex mb-2 mb-lg-0">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" variant="outline-success">Search</Button>
          </Form>
          <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Profiles</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const Profiles2 = () => {
  const [filteredProfiles, setFilteredProfiles] = useState(ProfilesData);

  const handleSearch = (searchQuery) => {
    const filtered = ProfilesData.filter((profile) =>
      profile.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  return (
    <div className="dictionary" style={{ marginTop: "100px", width: "80%" }}>
      {filteredProfiles.map((profile) => (
        <Entry
          key={profile.id}
          id={profile.id}
          imageURL={profile.imageURL}
          name={profile.name}
          description={profile.description}
        />
      ))}
    </div>
  );
};

export { Navigation, Profiles2 };
