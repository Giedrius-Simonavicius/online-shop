import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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

function HeaderComponent({ products }) {
  const { setFilterArr, setSearchResults, mdScreen } = useGeneralCtx();
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

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

  return (
    <header className=" text-xs lg:text-xxs">
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

        <div className="flex gap-6">
          <SearchButton
            openCloseSearchBar={
              isSearchBarVisible ? closeSearchBar : openSearchBar
            }
            isSearchBar={isSearchBarVisible}
          />

          <CartButton mdScreen={mdScreen} />
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

export default HeaderComponent;
