import './App.css';
import app from './firebase_init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  
  // google signin handler
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log('The user is: ',user);
      }).catch(error => {
        console.error('Error reason: ', error);
    })
  }

  // github signin handler
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error(error);
    })
  }

  // event listner for signing out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
      });
  }

  return (
    <div className="App">
      {
        user.email ?
          <button onClick={handleSignOut}>Sign out</button>
          :
          <>
            <button onClick={handleGoogleSignIn}>google signIn</button>
            <button onClick={handleGithubSignIn}>Github signin</button>
          </>
      }
      <h4>User Name: {user.displayName}</h4>
      <h4>Email: {user.email}</h4>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
