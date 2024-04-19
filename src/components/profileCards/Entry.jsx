import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Entry(props) {
  return (
    <div className="term" style={{
      margin: '20px', /* Adjust the margin value as needed */
      padding: '20px', /* Optional: Add padding if necessary */
      border: '1px solid #ccc', /* Optional: Add border for better visualization */
      borderRadius: '5px', /* Optional: Add border radius for better visualization */
    }}>
      <div className="">
        <img src={props.imageURL} alt="" />
      </div>
      <h3 style={{color:"black"}}>{props.name}</h3>
      <p style={{color:"black"}}>{props.description}</p>
      <Button variant="dark" size="lg" >
        <Link to={`/user/${props.id}`} style={{ color: 'white', textDecoration: 'none' }}>
          Summary
        </Link>
      </Button>
    </div>
  );
}

export default Entry;
