import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, serverUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(serverUrl + '/api/user/register', { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(serverUrl + '/api/user/login', { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 px-4">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-gray-200"
      >
        {/* Logo */}
        <div className="flex justify-center">
          <img src={assets.logo} alt="Logo" className="h-14" />
        </div>

        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-1">{currentState}</h2>
          <div className="w-12 h-1 bg-black mx-auto rounded-full" />
        </div>

        {/* Name (Sign Up only) */}
        {currentState === 'Sign Up' && (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        )}

        {/* Email */}
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email Address"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Password with Eye Toggle */}
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            required
            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span className="hover:underline cursor-pointer">Forgot Password?</span>
          {currentState === 'Login' ? (
            <span
              className="hover:underline cursor-pointer"
              onClick={() => setCurrentState('Sign Up')}
            >
              Create an Account
            </span>
          ) : (
            <span
              className="hover:underline cursor-pointer"
              onClick={() => setCurrentState('Login')}
            >
              Login Instead
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-gray-900 transition duration-300"
        >
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;
