import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Form from './Form';
import { useAuth } from "react-oidc-context";

function App() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "4r9cfc0m1dh4b9dje8i95uksqo";
    const logoutUri = "https://d19o6330lu6a6h.cloudfront.net";
    const cognitoDomain = "https://us-east-1myf3tzsqx.auth.us-east-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/submit" element={
            <div>
              <pre> Hello: {auth.user?.profile.email} </pre>
              <pre> ID Token: {auth.user?.id_token} </pre>
              <pre> Access Token: {auth.user?.access_token} </pre>
              <pre> Refresh Token: {auth.user?.refresh_token} </pre>

              <button onClick={() => signOutRedirect()}>Sign out</button>
              <Form />
            </div>
          } />
          <Route path="*" element={<Navigate to="/submit" />} />
        </Routes>
      </BrowserRouter>
    );
  }

  auth.signinRedirect();
  return <div>Redirecting to sign in...</div>;
}

export default App;