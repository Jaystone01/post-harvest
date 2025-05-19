import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <nav className="w-full bg-gradient-to-r from-sky-green to-summar-green px-6 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <div className="w-[55px] sm:w-[66px] md:w-[79px]">
        <img src={logo} className="w-full h-auto" alt="Crop-care logo" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
        <li><Link to="/storagetips">STORAGE TIPS</Link></li>
        <li><Link to="/storagecenters">STORAGE CENTERS</Link></li>
        <li><Link to="/testimonials">NEWS</Link></li>
        <li><Link to="/aboutus">ABOUT US</Link></li>
      </ul>

      {/* Buttons (Desktop) */}
      <div className="hidden md:flex items-center space-x-4">
        {user ? (
          <button onClick={handleLogout} className="bg-red-100 text-red-800 px-4 py-2 rounded-full">Log Out</button>
        ) : (
          <>
            <button onClick={() => navigate('/login')} className="bg-white text-green-800 px-4 py-2 rounded-full">Log In</button>
            <button onClick={() => navigate('/register')} className="bg-green-900 text-white px-4 py-2 rounded-full">Register</button>
          </>
        )}
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button onClick={() => setToggle(!toggle)} className="text-green-900">
          {toggle ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {toggle && (
        <div className="absolute top-[68px] left-0 w-full bg-white shadow-md md:hidden flex flex-col items-start p-6 space-y-4 z-50">
          <a href="#storagetips">STORAGE TIPS</a>
          <a href="#storagecenters">STORAGE CENTERS</a>
          <a href="#testimonials">NEWS</a>
          <a href="#aboutus">ABOUT US</a>
          {user ? (
            <button onClick={handleLogout} className="w-full bg-red-100 text-red-800 py-2 rounded-full">Log Out</button>
          ) : (
            <>
              <button onClick={() => { setToggle(false); navigate('/login'); }} className="w-full bg-green-100 text-green-800 py-2 rounded-full">Log In</button>
              <button onClick={() => { setToggle(false); navigate('/register'); }} className="w-full bg-green-900 text-white py-2 rounded-full">Register</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
