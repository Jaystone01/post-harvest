import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate, Link } from 'react-router-dom'; // Add Link here
import HeroImage from '../assets/HeroPage.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError(false);
      navigate('/');
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div
        className="p-6 max-w-md w-full rounded-md shadow-md"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="p-6 rounded bg-white bg-opacity-60 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4 text-black text-center">Log In</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-2 border rounded bg-white bg-opacity-80"
              required
            />
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 border rounded bg-white bg-opacity-80"
              required
            />
            {error && (
              <p className="text-red-600 text-sm">Invalid email or password. Please try again.</p>
            )}
            <button
              type="submit"
              className="bg-green-800 text-white w-full py-2 rounded hover:bg-green-700"
            >
              Log In
            </button>
          </form>

          {/* Register link */}
          <p className="mt-4 text-sm text-center text-black">
            Don't have an account?{' '}
            <Link to="/register" className="text-green-800 font-semibold hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
