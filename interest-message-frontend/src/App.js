import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
      <div>
          <h1>Welcome to the Interest Messaging App</h1>
          <nav>
              <ul>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/register">Register</Link></li>  {/* Add a link to the registration page */}
                  <li><Link to="/users">Users</Link></li>
              </ul>
          </nav>
      </div>
  );
}

export default App;