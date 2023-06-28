import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useGeneralCtx } from '../../context/GeneralProvider';

function FooterComponent() {
  const { setSearchResults } = useGeneralCtx();

  return (
    <footer className="bg-[#020202] font-normal text-white ">
      <div className="container mx-auto grid gap-8 pb-4  pt-8">
        <div className="flex justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-normal">
              Sign Up To Our Newsletter.
            </h2>
            <p className="text-sm">
              Be the first to hear about the latest offers.
            </p>
          </div>
          <div className="flex h-12 gap-4">
            <input
              className="w-96 rounded border-2 bg-[#020202] pl-3 outline placeholder:text-sm placeholder:font-light placeholder:text-white"
              type="email"
              placeholder="Your Email"
            />
            <button className="rounded-full bg-color3 pl-7  pr-7">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex justify-between  text-xs">
          <div>
            <h3 className="mb-3 font-bold tracking-wide text-[#ffffff82]">
              Information
            </h3>
            <ul>
              <li>
                <NavLink
                  className="duration-200 hover:text-color4"
                  to="/about-us"
                >
                  About Us
                </NavLink>
              </li>
              <li>About Zip</li>
              <li>Privacy Policy</li>
              <li>Search</li>
              <li>
                <NavLink
                  className="duration-200 hover:text-color4"
                  to="/terms-conditions"
                >
                  Terms
                </NavLink>
              </li>
              <li>Orders and Returns</li>
              <li>
                <NavLink
                  to="/contact-us"
                  className="mt-1 text-xs font-normal duration-200 hover:text-color4"
                >
                  Contact us
                </NavLink>
              </li>
              <li>Advanced Search</li>
              <li>Newsletter Subscription</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-bold tracking-wide text-[#ffffff82]">
              PC Parts
            </h3>
            <ul>
              <li>CPUS</li>
              <li>Add On Cards</li>
              <li>Hard Drives (Internal)</li>
              <li>Graphic Cards</li>
              <li>Keyboards / Mice</li>
              <li>Cases / Power Supplies / Cooling</li>
              <li>RAM (Memory)</li>
              <li>Software</li>
              <li>Speakers / Headsets</li>
              <li>Motherboards</li>
            </ul>
          </div>
          <div>
            <NavLink
              onClick={() => setSearchResults([])}
              className="font-bold tracking-wide text-[#ffffff82] duration-200 hover:text-color4"
              to="/all-products/desktops"
            >
              Desktop PCs
            </NavLink>
            <ul className="mt-3">
              <li className="duration-200 hover:text-color4">
                <NavLink
                  onClick={() => setSearchResults([])}
                  to="/all-products/custom-pcs"
                >
                  Custom PCs
                </NavLink>
              </li>
              <li>Servers</li>
              <li>MSI All-In-One PCs</li>
              <li>HP/Compaq PCs</li>
              <li>ASUS PCs</li>
              <li>Tecs PCs</li>
            </ul>
          </div>
          <div>
            <NavLink
              onClick={() => setSearchResults([])}
              className="font-bold tracking-wide text-[#ffffff82] duration-200 hover:text-color4"
              to="/all-products/laptops"
            >
              Laptops
            </NavLink>
            <ul className="mt-3">
              <li>Evryday Use Notebooks</li>
              <li>MSI Workstation Series</li>
              <li>MSI Prestige Series</li>
              <li>Tablets and Pads</li>
              <li>Netbooks</li>
              <li>Infinity Gaming Notebooks</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-bold tracking-wide text-[#ffffff82]">
              Address
            </h3>
            <ul>
              <li>Address: 1234 Street Adress City Address, 1234</li>
              <li>
                Phones:{' '}
                <Link
                  to="tel:001234568"
                  className="text-color4 duration-200 hover:text-color2"
                >
                  (00) 1234 5678
                </Link>
              </li>
              <li>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</li>
              <li>Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 11:00 AM - 5:00 PM</li>
              <li>
                E-mail:{' '}
                <a
                  className="mt-1 text-xs font-normal text-color4 duration-200 hover:text-color2"
                  href="mailto:example@example.com"
                >
                  shop@email.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between border-t border-slate-400 pt-4">
          <div className="flex gap-3 ">
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
                  fill="#ffffff83"
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
                  fill="#ffffff83"
                />
              </svg>
            </Link>
          </div>
          <div className="flex gap-3 text-sm">
            <img src="/images/cards/paypal.png" alt="paypal" />
            <img src="/images/cards/visa.png" alt="visa" />
            <img src="/images/cards/maestro.png" alt="maestro" />
            <img src="/images/cards/discover.png" alt="discover" />
            <img
              src="/images/cards/american-express.png"
              alt="americanExpress"
            />
          </div>
          <p className="text-sm text-[#ffffff83]">
            Copyright © 2020 Shop Pty. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
