import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md bg-white shadow-md rounded-xl p-8 space-y-6"
      >
        <div className="flex justify-center">
          <img src={assets.logo} alt="Logo" className="h-12" />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">
            {currentState}
          </h2>
          <div className="w-10 h-1 bg-gray-800 mx-auto rounded-full" />
        </div>

        {currentState === 'Sign Up' && (
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
        )}

        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
        />

        <div className="flex items-center justify-between text-sm text-gray-600">
          <span className="hover:underline cursor-pointer">
            Forgot Password?
          </span>
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

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition duration-300"
        >
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;
