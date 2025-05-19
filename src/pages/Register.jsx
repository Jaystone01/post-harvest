import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate, Link } from 'react-router-dom';  // ← added Link
import HeroImage from '../assets/HeroPage.png';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert("Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      alert(error.message);
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
          <h2 className="text-2xl font-semibold mb-4 text-black text-center">Create an Account</h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded bg-white bg-opacity-80"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded bg-white bg-opacity-80"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 border rounded bg-white bg-opacity-80"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-700"
            >
              Register
            </button>
          </form>
          {/* Login link */}
          <p className="mt-4 text-sm text-center text-black">
            Already have an account?{' '}
            <Link to="/login" className="text-green-800 font-semibold hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
