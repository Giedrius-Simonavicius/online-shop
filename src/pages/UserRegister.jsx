import React from 'react';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import RegistrationForm from '../components/forms/RegistrationForm';
import { useGeneralCtx } from '../context/GeneralProvider';

function UserRegister() {
  const navigate = useNavigate();
  const { smScreen, mdScreen } = useGeneralCtx();

  function registerToFirebase({ email, password }) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success('Registration succesfull');
        navigate('/user');
      })
      .catch((error) => {
        toast.error('Something went wrong');
        window.location.reload();
      });
  }
  return (
    <div className="container mx-auto px-8">
      <h1 className="mt-6 text-3xl font-bold lg:mt-4 lg:text-2xl">
        Registration
      </h1>
      <div
        className={`${smScreen ? 'mx-2 my-2' : ''}${
          mdScreen ? 'mx-10 my-10' : 'mx-20 my-20'
        } `}
      >
        <RegistrationForm onUserRegistration={registerToFirebase} />
      </div>
      <button
        className="mt-6 rounded-full
              border-2 border-color3 bg-color3 px-8 font-normal text-white duration-200 hover:border-2 hover:bg-color1 hover:text-color3"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </div>
  );
}

export default UserRegister;
