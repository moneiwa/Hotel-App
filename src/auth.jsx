// import {auth} from './config/firebase'
// import{createUserWithEmailAndPassword}from 'firebase/auth'
// import { useState } from "react"


// export const Auth = ()=>{
//     const [email,setEmail]=useState("");
//     const [password,setPassword]=useState("");
//     const signIn = async () =>{
//         await createUserWithEmailAndPassword(auth, email,password);

//     };
//     return(
//         <div>
//         <input 
//             placeholder="Email..." 
//             onChange={(e) => setEmail(e.target.value)} // Fix: add event handler
//         />
//         <input 
//             type="password" // Ensure this is a password field
//             placeholder="Password" 
//             onChange={(e) => setPassword(e.target.value)} // Fix: add event handler
//         />
//         <button onClick={signIn}>Sign In</button>
//     </div>
//     )
// }



import { auth } from './config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('User Logged in successfully!');
            window.location.href='/';
        } catch (error) {
            console.error('Error creating user:', error);
        }

    }
    const logout = async () => {
        try {
            await signOut(auth);
            window.location.href='/Login';
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <div className='login'>


         <h3>Sign in page</h3>
         <p>dont have an account? <Link to="/Register">signup</Link></p>
            <input 
            type='email'
                placeholder="Email..." 
                onChange={(e) => setEmail(e.target.value)}  // Fix: pass the event parameter 'e'
            />
            <input 
                type="password" 
                placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)}  // Fix: pass the event parameter 'e'
            />
            <button onClick={signin}>Sign in</button>

        </div>
    );
};
