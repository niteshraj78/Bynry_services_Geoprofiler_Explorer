import React, { useState } from "react";
import userData from "../../pages/userData";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false); // State for checkbox

  const handleLogin = () => {
    if (!termsAccepted) {
      setError("Please accept the terms and conditions.");
      return;
    }

    const user = userData[username.toLowerCase()];
    if (user && user.password === password) {
      setUser(user);
      setError("");
    } else {
      setError("Invalid credentials");
    }
  };

  const handleCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
    setError(""); // Clear error message when checkbox state changes
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>Sign In</h2>
        <div style={subheadingStyle}>Username</div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
        <div style={subheadingStyle}>Password</div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ ...inputStyle, marginBottom: '25px' }} // Adjusted marginBottom
        />
        <button onClick={handleLogin} style={buttonStyle} disabled={!termsAccepted}>Login</button>
        {error && <div style={errorStyle}>{error}</div>}
        <div style={checkboxContainerStyle}>
          <input
            type="checkbox"
            id="termsCheckbox"
            style={checkboxStyle}
            checked={termsAccepted}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="termsCheckbox" style={checkboxLabelStyle}>
            I accept the terms and conditions
          </label>
          {!termsAccepted && <div style={errorTextStyle}>Please accept the terms and conditions.</div>}
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#ededed',
};

const cardStyle = {
  overflow: 'hidden',
  position: 'relative',
  width: '400px',
  height: '500px',
  margin: '0 auto',
  background: '#fff',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  padding: '50px 30px 0',
  borderRadius: '15px', // Rounded corners
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '20px', // Spacing between heading and inputs
};

const subheadingStyle = {
  fontSize: '14px',
  marginBottom: '5px', // Spacing between subheading and input field
};

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  marginBottom: '15px', // Original marginBottom
  fontSize: '16px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.4)',
  textAlign: 'center',
  borderRadius: '20px'
};

const buttonStyle = {
  display: 'block',
  margin: '0 auto',
  width: '200px',
  padding: '10px 20px',
  backgroundColor: '#000000',
  color: '#fff',
  borderRadius: '40px',
  fontSize: '15px',
  cursor: 'pointer',
  textTransform: 'uppercase',
};

const errorStyle = {
  color: 'red',
  textAlign: 'center',
  marginTop: '15px',
};

const checkboxContainerStyle = {
  marginTop: '20px',
  textAlign: 'center',
};

const checkboxStyle = {
  marginRight: '10px',
};

const checkboxLabelStyle = {
  fontSize: '14px',
};

const errorTextStyle = {
  color: 'red',
};

export default Login;
