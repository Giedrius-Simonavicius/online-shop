import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/style.css';
import WorkingHours from '../openClose/WorkingHours';
import { useGeneralCtx } from '../../context/GeneralProvider';
import { useShoppingCartCtx } from '../../context/ShoppingCartContext';
import { Popover, Transition } from '@headlessui/react';

function HeaderComponent() {
  const { setFilterArr } = useGeneralCtx();
  const { cartArr } = useShoppingCartCtx();
  console.log('cartArr ===', cartArr);
  function resetFiltArr() {
    setFilterArr([]);
  }

  const [onHoverColorCart, setOnHoverColorCart] = useState('black');

  function changeOnHoverColor(setColorFunction, newColor) {
    setColorFunction(newColor);
  }

  function ArrowUpDown({ open }) {
    return (
      <div className="pb-2 ">
        {open ? (
          <img loading="lazy" src="/icons/ui/arrowDownWh.svg" alt="arrowDown" />
        ) : (
          <img loading="lazy" src="/icons/ui/arrowUpWh.svg" alt="arrowUp" />
        )}
      </div>
    );
  }

  return (
    <header className="text-xs">
      <Popover>
        {({ open }) => (
          <>
            <div className=" bg-[#020202] ">
              <div className="container  mx-auto flex justify-between pb-3 pt-3">
                <Popover.Button className="focus:outline-none">
                  <div className="flex text-white ">
                    <p>
                      <span
                        className="
                 text-[#A2A6B0]"
                      >
                        Mon-Thu:
                      </span>{' '}
                      9:00 AM - 5:30 PM{' '}
                    </p>
                    <div className="ml-2 pt-1 align-bottom">
                      <ArrowUpDown open={open} />
                    </div>
                  </div>
                </Popover.Button>

                <div className="flex">
                  <p
                    className="
             text-[#ACACAC]"
                  >
                    Visit our showroom in 1234 Street Adress City Address, 1234{' '}
                  </p>
                  <NavLink
                    to={'contact-us'}
                    className="ml-1 text-white underline duration-200 hover:text-color3"
                  >
                    {' '}
                    &nbsp;Contact Us&nbsp;
                  </NavLink>
                </div>
                <div className="flex items-center gap-2 bg-black text-white">
                  <p>
                    Call Us:{' '}
                    <Link
                      className="duration-200 hover:text-color4"
                      to="tel:0012345678"
                    >
                      (00) 1234 5678
                    </Link>
                  </p>
                  <Link
                    className="duration-200 hover:scale-110"
                    to="https://www.facebook.com/"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.1051 2.27661H2.89423C2.55247 2.27661 2.27637 2.55272 2.27637 2.89447V17.1053C2.27637 17.4471 2.55247 17.7232 2.89423 17.7232H17.1051C17.4468 17.7232 17.723 17.4471 17.723 17.1053V2.89447C17.723 2.55272 17.4468 2.27661 17.1051 2.27661ZM15.321 6.78508H14.0872C13.1199 6.78508 12.9326 7.24462 12.9326 7.92041V9.40907H15.2418L14.9406 11.7396H12.9326V17.7232H10.5248V11.7415H8.51099V9.40907H10.5248V7.69064C10.5248 5.6961 11.7432 4.60905 13.5234 4.60905C14.3768 4.60905 15.1086 4.67276 15.3229 4.70173V6.78508H15.321Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="duration-200 hover:scale-110"
                    to="https://www.instagram.com/"
                  >
                    <span className="sr-only">Instagram</span>

                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.9996 7.39645C8.56601 7.39645 7.39609 8.56638 7.39609 9.99997C7.39609 11.4336 8.56601 12.6035 9.9996 12.6035C11.4332 12.6035 12.6031 11.4336 12.6031 9.99997C12.6031 8.56638 11.4332 7.39645 9.9996 7.39645ZM17.8082 9.99997C17.8082 8.92184 17.818 7.85349 17.7574 6.77731C17.6969 5.52731 17.4117 4.41794 16.4977 3.50388C15.5816 2.58786 14.4742 2.30466 13.2242 2.24411C12.1461 2.18356 11.0777 2.19333 10.0016 2.19333C8.92343 2.19333 7.85507 2.18356 6.7789 2.24411C5.5289 2.30466 4.41953 2.58981 3.50546 3.50388C2.58945 4.41989 2.30624 5.52731 2.2457 6.77731C2.18515 7.85544 2.19492 8.9238 2.19492 9.99997C2.19492 11.0761 2.18515 12.1465 2.2457 13.2226C2.30624 14.4726 2.5914 15.582 3.50546 16.4961C4.42148 17.4121 5.5289 17.6953 6.7789 17.7558C7.85703 17.8164 8.92539 17.8066 10.0016 17.8066C11.0797 17.8066 12.148 17.8164 13.2242 17.7558C14.4742 17.6953 15.5836 17.4101 16.4977 16.4961C17.4137 15.58 17.6969 14.4726 17.7574 13.2226C17.8199 12.1465 17.8082 11.0781 17.8082 9.99997ZM9.9996 14.0058C7.78281 14.0058 5.99375 12.2168 5.99375 9.99997C5.99375 7.78317 7.78281 5.99411 9.9996 5.99411C12.2164 5.99411 14.0055 7.78317 14.0055 9.99997C14.0055 12.2168 12.2164 14.0058 9.9996 14.0058ZM14.1695 6.76559C13.6519 6.76559 13.234 6.34763 13.234 5.83005C13.234 5.31247 13.6519 4.8945 14.1695 4.8945C14.6871 4.8945 15.1051 5.31247 15.1051 5.83005C15.1052 5.95295 15.0811 6.07467 15.0342 6.18825C14.9872 6.30182 14.9183 6.40502 14.8314 6.49192C14.7445 6.57883 14.6413 6.64773 14.5277 6.69469C14.4142 6.74166 14.2924 6.76575 14.1695 6.76559Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </div>
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
              <Popover.Panel className="absolute z-10">
                <WorkingHours />
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <nav className="container mx-auto flex justify-between">
        <NavLink
          to={'/'}
          className=" duration-[1000ms] hover:rotate-[360deg] hover:scale-150"
        >
          <span className="sr-only">Home page</span>
          <svg
            width="85"
            height="69"
            viewBox="0 0 85 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.0331 13.9454L25.2969 23.8637V36.0708L42.0331 45.9891L55.4588 38.3596V41.9836L42.0331 49.9946L25.2969 39.8855V44.2725L42.0331 54L58.7693 44.2725V32.0653L45.3435 39.8855V36.0708L58.7693 28.0599V23.8637L42.0331 13.9454Z"
              fill="#0156FF"
            />
          </svg>
        </NavLink>

        <div className={`flex  items-center gap-3 `}>
          <NavLink
            className={'duration-300 hover:scale-110 hover:text-color3'}
            to={'all-products/laptops'}
          >
            Laptops
          </NavLink>
          <NavLink
            className={'duration-300 hover:scale-110 hover:text-color3'}
            to={'all-products/desktops'}
          >
            Desktop PC's
          </NavLink>
          <NavLink
            className={'duration-300 hover:scale-110 hover:text-color3'}
            to={'all-products/custom-pcs'}
          >
            Custom builds
          </NavLink>
          <NavLink
            className={'duration-300 hover:scale-110 hover:text-color3'}
            to={'all-products/monitors'}
          >
            Monitors
          </NavLink>
          <NavLink
            onClick={resetFiltArr}
            to={'/all-products'}
            className="rounded-full border-2 border-color3 p-1 pl-5 pr-5 text-color3 duration-300 hover:bg-color3 hover:text-white"
          >
            Show all
          </NavLink>
        </div>

        <div className="relative flex items-center duration-200 hover:scale-110">
          <span
            className={`${
              cartArr.length === 0 ? 'hidden' : ''
            } absolute left-5 top-4 flex h-4 w-4 items-center justify-center rounded-full bg-color3 text-xxs text-white `}
          >
            {cartArr.length}
          </span>
          <NavLink to={'/cart'}>
            <span className="sr-only">Shopping cart</span>
            <svg
              onMouseEnter={() =>
                changeOnHoverColor(setOnHoverColorCart, '#0156FF')
              }
              onMouseLeave={() =>
                changeOnHoverColor(setOnHoverColorCart, 'black')
              }
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5834 20.8334C15.1359 20.8334 15.6658 20.6139 16.0566 20.2232C16.4473 19.8325 16.6667 19.3026 16.6667 18.75C16.6667 18.1975 16.4473 17.6676 16.0566 17.2769C15.6658 16.8862 15.1359 16.6667 14.5834 16.6667C14.0309 16.6667 13.501 16.8862 13.1103 17.2769C12.7196 17.6676 12.5001 18.1975 12.5001 18.75C12.5001 19.3026 12.7196 19.8325 13.1103 20.2232C13.501 20.6139 14.0309 20.8334 14.5834 20.8334ZM7.29174 20.8334C7.84428 20.8334 8.37418 20.6139 8.76488 20.2232C9.15558 19.8325 9.37508 19.3026 9.37508 18.75C9.37508 18.1975 9.15558 17.6676 8.76488 17.2769C8.37418 16.8862 7.84428 16.6667 7.29174 16.6667C6.73921 16.6667 6.20931 16.8862 5.81861 17.2769C5.4279 17.6676 5.20841 18.1975 5.20841 18.75C5.20841 19.3026 5.4279 19.8325 5.81861 20.2232C6.20931 20.6139 6.73921 20.8334 7.29174 20.8334ZM20.873 6.16981C21.133 6.16142 21.3796 6.05223 21.5606 5.86531C21.7416 5.6784 21.8428 5.42842 21.8428 5.16825C21.8428 4.90807 21.7416 4.6581 21.5606 4.47118C21.3796 4.28427 21.133 4.17507 20.873 4.16669H19.674C18.7345 4.16669 17.922 4.81877 17.7178 5.73544L16.4126 11.6125C16.2084 12.5292 15.3959 13.1813 14.4563 13.1813H6.63133L5.12924 7.17085H14.8636C15.1212 7.1591 15.3644 7.0485 15.5425 6.86205C15.7206 6.67561 15.82 6.42767 15.82 6.16981C15.82 5.91195 15.7206 5.66401 15.5425 5.47757C15.3644 5.29113 15.1212 5.18052 14.8636 5.16877H5.12924C4.82473 5.16868 4.5242 5.23802 4.25051 5.37151C3.97682 5.50501 3.73716 5.69915 3.54976 5.93917C3.36236 6.17919 3.23215 6.45878 3.16903 6.75668C3.10591 7.05458 3.11154 7.36295 3.1855 7.65835L4.68758 13.6667C4.79586 14.1002 5.046 14.4851 5.39821 14.7601C5.75042 15.0351 6.18447 15.1845 6.63133 15.1844H14.4563C15.368 15.1845 16.2524 14.8737 16.9636 14.3032C17.6748 13.7328 18.1701 12.9369 18.3678 12.0469L19.674 6.16981H20.873Z"
                fill={onHoverColorCart}
              />
            </svg>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;
