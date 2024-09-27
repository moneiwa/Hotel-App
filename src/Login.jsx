import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { setUser, setError } from './authSlice';  
import { auth } from './config/firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // Get error from Redux state
    const error = useSelector((state) => state.auth.error);

    const signIn = async () => {
        if (!email || !password) {
            dispatch(setError('Please fill in all fields.'));
            return;
        }

        setLoading(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            dispatch(setUser(userCredential.user));  
            navigate('/');  
        } catch (error) {
            dispatch(setError(error.message));  
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h1>Login Page</h1>
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
            <br /><br />
            <button onClick={signIn} disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
            </button>
            <br /><br />
            {error && <p className="error">{error}</p>} {/* Display error message */}
            <Link to="/signup">Don't have an account? Sign Up</Link>
        </div>
    );
};

export default Login;
