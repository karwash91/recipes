// App.js

import { useAuth } from "react-oidc-context";
import Form from './Form';
import './App.css';

function App() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "4r9cfc0m1dh4b9dje8i95uksqo";
    const logoutUri = "https://d19o6330lu6a6h.cloudfront.net";
    const cognitoDomain = "https://us-east-1myf3tzsqx.auth.us-east-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <>
        <Form />
      </>
    );
  }

  return (
    <div className="App">
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={() => signOutRedirect()}>Sign out</button>
    </div>
  );
}

export default App;