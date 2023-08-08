import React from 'react';

import { signInWithEmailAndPassword, signInWithPopup } from '@firebase/auth';
import { auth, googleProvider } from '../firebase/firebase';
import { toast } from 'react-hot-toast';
import LoginForm from '../components/forms/LoginForm';
import { useGeneralCtx } from '../context/GeneralProvider';
import { useNavigate } from 'react-router-dom';

function UserLogin() {
  const { smScreen, mdScreen } = useGeneralCtx();
  const navigate = useNavigate();

  function loginToFirebase({ email, password }) {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success('logged in');
          resolve();
          navigate('/');
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(
            errorMessage === 'auth._getRecaptchaConfig is not a function'
              ? 'Server error'
              : 'Email or password incorrect',
          );
          reject(error);
        });
    });
  }
  function loginWithGoogle() {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        toast.success('logged in');
        navigate('/');
      })
      .catch((error) => {
        console.log('failed to login');
      });
  }

  return (
    <div className="container mx-auto px-8">
      <h1 className="text-3xl font-bold lg:mt-4 lg:text-2xl">User login</h1>
      <div
        className={`mx-20 mt-8 lg:mx-5 ${
          smScreen ? 'flex-col lg:mx-1' : ''
        } flex justify-center gap-6`}
      >
        <div
          className={`${
            smScreen ? 'w-full' : ''
          } w-1/2 bg-color1 px-12 py-8 md:px-6`}
        >
          <h2 className="text-xl">Registered users</h2>
          <p className="my-2 text-sm font-light">
            If you have an account, sign in with your email address.
          </p>
          <LoginForm onUserLogin={loginToFirebase} />
        </div>
        <div
          className={`${
            smScreen ? 'w-full' : ''
          } w-1/2 bg-color1 px-12 py-8 md:px-6`}
        >
          <h2 className="text-xl">New User?</h2>
          <p className="my-2 text-sm font-light">
            Creating an account has many benefits:{' '}
          </p>
          <ul className="ml-4 mt-4 list-disc text-sm font-light">
            <li>Check out faster</li>
            <li>Keep more than one address</li>
            <li>Track orders and more</li>
          </ul>
          <button
            onClick={() => navigate('/user/register')}
            className={` ${
              mdScreen
                ? 'w-full px-4 py-1 text-sm md:px-8 md:py-2'
                : 'px-8 py-2 font-normal'
            } mt-6 rounded-full border-2 border-color3 bg-color3 text-white  duration-200 hover:bg-white hover:text-color3 
        `}
          >
            Create an account
          </button>

          <div className="mt-8 flex flex-col gap-2">
            <button
              className="flex w-fit items-center gap-1 rounded-full px-4 py-1 duration-100  hover:outline"
              onClick={loginWithGoogle}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/30px-Google_%22G%22_Logo.svg.png"
                alt="google"
              />
              <span>Log in with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
