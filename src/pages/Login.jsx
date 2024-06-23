import React, { useState } from 'react';
import Modal from 'react-modal';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { useAuth } from '../server/context';
import { Navigate } from 'react-router-dom';

const Login = () => {
  useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log('User signed in:', user);
          setIsModalOpen(false);
          alert('Login successful!');
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
          alert('Error signing in: ' + errorMessage);
        });
    } catch (error) {
      console.error('Sign in error:', error);
      setError('Error signing in');
      alert('Error signing in: ' + error.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log('User signed up:', user);
          setIsModalOpen(false);
          alert('Account created successfully!');
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
          alert('Error creating account: ' + errorMessage);
        });
    } catch (error) {
      console.error('Sign up error:', error);
      setError('Error creating account');
      alert('Error creating account: ' + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider)
        .then((result) => {
          // Google sign-in successful
          const user = result.user;
          console.log('User signed in with Google:', user);
          setIsModalOpen(false);
          alert('Signed in with Google successfully!');
          
        })
        .catch((error) => {
          // Google sign-in error
          console.error('Google sign-in error:', error);
          setError('Error signing in with Google');
          alert('Error signing in with Google: ' + error.message);
        });
    } catch (error) {
      console.error('Google sign-in error:', error);
      setError('Error signing in with Google');
      alert('Error signing in with Google: ' + error.message);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsSigningIn(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setError('');
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleOpenModal}
        className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Sign In/Sign Up
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Login/Signup Modal"
        className="modal bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto mt-20"
        overlayClassName="modal-overlay fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-500">
          {isSigningIn ? 'Sign In' : 'Sign Up'}
        </h2>
        <form
          onSubmit={isSigningIn ? handleSignIn : handleSignUp}
          className="space-y-4"
        >
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              size="40"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          {error && (
            <div className="text-red-500 font-semibold">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            {isSigningIn ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full bg-white hover:bg-gray-100 text-gray-700 font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 mt-4 border border-gray-300"
        >
          Sign in with Google
        </button>
        <div className="flex items-center justify-center mt-4">
          <button
            type="button"
            onClick={() => setIsSigningIn(!isSigningIn)}
            className="text-indigo-500 font-semibold hover:underline"
          >
            {isSigningIn
              ? "Don't have an account? Sign Up"
              : 'Already have an account? Sign In'}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Login;