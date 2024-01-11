import logo from './logo.svg';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './Login'; // adjust the path according to your file structure
import LogoutButton from './Logout'; // adjust the path according to your file structure
import Profile from './Profile'; // adjust the path according to your file structure

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        {isAuthenticated ? (
          <>
            <LogoutButton />
            <Profile />
          </>
        ) : (
          <LoginButton />
        )}

      </header>
    </div>
  );
}

export default App;
