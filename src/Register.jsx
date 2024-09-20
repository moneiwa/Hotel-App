
import { auth } from './config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signout = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log('User created successfully!');
            window.location.href='/Login';
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <div className='login'>
         <h3>Sign Up</h3>
         <p>have an account <Link to="/Login">signup</Link></p>
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
            <button onClick={signout}>Sign in</button>
        </div>

    );
};

export default Register;
