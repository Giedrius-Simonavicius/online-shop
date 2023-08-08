import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import '../../styles/style.css';
import WorkingHours from '../openClose/WorkingHours';
import { useGeneralCtx } from '../../context/GeneralProvider';
import { Popover, Transition } from '@headlessui/react';
import SearchBar from '../openClose/SearchBar';
import NavBar from '../headerComponents/NavBar';
import HomeButton from '../headerComponents/HomeButton';
import SearchButton from '../headerComponents/SearchButton';
import CartButton from '../headerComponents/CartButton';
import SocialMedia from '../headerComponents/SocialMedia';
import ArrowUpDown from '../openClose/ArrowUpDown';
import PropTypes from 'prop-types';
import UserButton from '../headerComponents/UserButton';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { toast } from 'react-hot-toast';

function HeaderComponent({ products }) {
  const {
    setFilterArr,
    setSearchResults,
    mdScreen,
    smScreen,
    user,
    isLoggedIn,
  } = useGeneralCtx();

  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const shouldRenderUserButton =
    location.pathname !== '/user' && location.pathname !== '/user/register';

  function handleCloseNav() {
    setIsPopoverOpen(false);
  }

  function openSearchBar() {
    setIsSearchBarVisible(true);
  }

  function closeSearchBar() {
    setIsSearchBarVisible(false);
  }

  function resetFilterArr() {
    setFilterArr([]);
  }
  function openPanel() {
    document.getElementById('myNav').style.width = '100%';
    document.getElementById('myNav').style.height = '100%';
    document.getElementById('myNav').style.zIndex = '1';
    document.getElementById('myNav').style.padding = '24px';
  }

  function logoutUserFire() {
    signOut(auth)
      .then(() => {
        isLoggedIn(false);
        toast.success('Logged out');
        navigate('/');
      })
      .catch((error) => {});
    toast.success('Logged out');
  }
  return (
    <header className="text-xs lg:text-xxs">
      <Popover>
        {({ open }) => (
          <>
            <div className="bg-[#020202]">
              <div
                className={`${
                  mdScreen
                    ? 'container mx-auto flex justify-between pb-3 pt-3'
                    : 'container mx-auto flex justify-around pb-3 pt-3'
                }`}
              >
                {mdScreen ? (
                  <HomeButton mdScreen={mdScreen} />
                ) : (
                  <Popover.Button
                    onClick={closeSearchBar}
                    className="focus:outline-none"
                  >
                    <div className="flex text-white ">
                      <p>
                        <span className="text-[#A2A6B0]"> Mon-Thu: </span>9:00
                        AM - 5:30 PM
                      </p>
                      <div className="ml-2 pt-1 align-bottom">
                        <ArrowUpDown open={open} wh />
                      </div>
                    </div>
                  </Popover.Button>
                )}

                <div className="flex">
                  <p className="text-[#ACACAC] md:hidden">
                    Visit our showroom in 1234 Street Adress City Address, 1234{' '}
                  </p>
                  <NavLink
                    to={'contact-us'}
                    className={`${
                      mdScreen
                        ? 'mr-10 mt-[2%] align-baseline text-xl text-white underline underline-offset-4'
                        : 'ml-1 text-white underline underline-offset-4 duration-200 hover:text-color3'
                    }`}
                  >
                    {' '}
                    &nbsp;Contact Us&nbsp;
                  </NavLink>
                </div>
                <SocialMedia />
              </div>
            </div>
            <Transition
              show={open}
              enter="transition duration-300 transform origin-top"
              enterFrom="opacity-0 scale-y-0"
              enterTo="opacity-100 scale-y-100"
              leave="transition duration-300 transform origin-top"
              leaveFrom="opacity-100 scale-y-100"
              leaveTo="opacity-0 scale-y-0"
              className="relative"
            >
              <Popover.Panel className="absolute z-20">
                <WorkingHours />
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <nav className="container mx-auto flex justify-around px-2 md:bg-color3 md:py-2">
        {mdScreen ? (
          <img
            width="30px"
            onClick={() => {
              setIsPopoverOpen(!isPopoverOpen);
              openPanel();
            }}
            className="focus:outline-none"
            src="/icons/ui/burger.svg"
            alt="burger"
          />
        ) : (
          <HomeButton mdScreen={mdScreen} />
        )}

        {mdScreen || isSearchBarVisible ? (
          <div className={`my-auto w-[70%] `}>
            <SearchBar products={products} mdScreen={mdScreen} />
          </div>
        ) : (
          <NavBar
            setSearchResults={setSearchResults}
            resetFilterArr={resetFilterArr}
          />
        )}

        <div className={`flex ${smScreen ? 'gap-2' : 'gap-6'} `}>
          <SearchButton
            openCloseSearchBar={
              isSearchBarVisible ? closeSearchBar : openSearchBar
            }
            isSearchBar={isSearchBarVisible}
          />

          <CartButton mdScreen={mdScreen} />
          {isLoggedIn ? (
            <div className="ml-2 flex flex-col items-center justify-center">
              <p className={`${smScreen ? 'hidden' : ''}`}>{user.email}</p>
              <button
                className="mt-1 w-fit rounded-full border border-color3 bg-color3 px-2 font-normal text-white duration-200 hover:bg-color1 hover:text-color3"
                onClick={logoutUserFire}
              >
                Logout
              </button>
            </div>
          ) : (
            shouldRenderUserButton && <UserButton mdScreen={mdScreen} />
          )}
        </div>

        {mdScreen && (
          <NavBar
            tablet
            handleCloseNav={handleCloseNav}
            setSearchResults={setSearchResults}
            resetFilterArr={resetFilterArr}
          />
        )}
      </nav>
    </header>
  );
}
HeaderComponent.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      productId: PropTypes.string.isRequired,
      aboutProduct: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default HeaderComponent;
