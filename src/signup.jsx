import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser, setError } from './authSlice';
import { auth } from './config/firebase';
import { Link, useNavigate } from 'react-router-dom'; // Make sure to import Link

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signUp = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const { uid, email: userEmail } = userCredential.user; 
            dispatch(setUser({ uid, email: userEmail })); 
            navigate('/'); // Redirect to home or another page on success
        } catch (error) {
            dispatch(setError(error.message));
            setErrorMessage(error.message); // Set the error message to display
        }
    };

    return (
        <div className="container">
            <h1>Sign Up</h1>
            <input
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button onClick={() => signUp(email, password)}>Sign Up</button>
            {errorMessage && <p className="error">{errorMessage}</p>} {/* Display error message */}
            <Link to="/Login">Already have an account? Log In</Link>
        </div>
    );
};

export default Signup;
