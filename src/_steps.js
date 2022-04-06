
/**
 * Steps to use firebase
 * 1. create an app to console.firebase.google.com 
 * 2. install firebase [npm install firebase]
 * 3. Register web app in firebase
 * 4. copy firebase init with config from firebase project settings 
 *    into a file [firebase_init.js] 
 * 5. export default app
 * 6. import firebase init app into my -> app.js [import app from './firebase_init';]
 * 
 * 7. in app.js we have to write > 
*           [import { getAuth } from 'firebase/auth';] 
*           and [const auth = getAuth(app);]
 *     above (before) the [ function App(){} ]
 * 
 * 8. turn on google sign in authentication by going to authentication tab
 * 
 * 9. create google provider by following authentication documentation. [step- 1, 5]
 *      9.1 import { GoogleAuthProvider } from "firebase/auth";
 *          before return{} stateent write -> [const provider = new GoogleAuthProvider();]
 * 
 *      9.2 create an event listner [handleGoogleSignIn] and inside of it we have to 
 *          write codes derived in documentation.
 *          - signInWithPopup(auth, provider)
 *          - .then
 *          - catch
 * 
 * 10. we can stop auto signin in google. for that we need to go to [account.google.com]
 *     from there we can remove the loged in accounts.
 *          
*/

