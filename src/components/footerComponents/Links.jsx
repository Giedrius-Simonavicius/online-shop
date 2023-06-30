import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useGeneralCtx } from '../../context/GeneralProvider';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function Links() {
  const { setSearchResults, mdScreen } = useGeneralCtx();
  const [activePanel, setActivePanel] = useState(null);

  const handleDisclosureChange = (panelId) => {
    setActivePanel((prevPanel) => (prevPanel === panelId ? null : panelId));
  };
  const informationLinks = [
    { label: 'About Us', to: '/about-us' },
    { label: 'About Zip', to: '#' },
    { label: 'Privacy Policy', to: '#' },
    { label: 'Search', to: '#' },
    { label: 'Terms', to: '/terms-conditions' },
    { label: 'Orders and Returns', to: '#' },
    { label: 'Contact us', to: '/contact-us' },
    { label: 'Advanced Search', to: '#' },
    { label: 'Newsletter Subscription', to: '#' },
  ];

  const pcPartsLinks = [
    { label: 'CPUS', to: '#' },
    { label: 'Add On Cards', to: '#' },
    { label: 'Hard Drives (Internal)', to: '#' },
    { label: 'Graphic Cards', to: '#' },
    { label: 'Keyboards / Mice', to: '#' },
    { label: 'Cases / Power Supplies / Cooling', to: '#' },
    { label: 'RAM (Memory)', to: '#' },
    { label: 'Software', to: '#' },
    { label: 'Speakers / Headsets', to: '#' },
    { label: 'Motherboards', to: '#' },
  ];

  const desktopPcLinks = [
    { label: 'Custom PCs', to: '/all-products/custom-pcs' },
    { label: 'Servers', to: '#' },
    { label: 'MSI All-In-One PCs', to: '#' },
    { label: 'HP/Compaq PCs', to: '#' },
    { label: 'ASUS PCs', to: '#' },
    { label: 'Tecs PCs', to: '#' },
  ];

  const laptopLinks = [
    { label: 'Evryday Use Notebooks', to: '#' },
    { label: 'MSI Workstation Series', to: '#' },
    { label: 'MSI Prestige Series', to: '#' },
    { label: 'Tablets and Pads', to: '#' },
    { label: 'Netbooks', to: '#' },
    { label: 'Infinity Gaming Notebooks', to: '#' },
  ];

  const addressInfo = {
    address: '1234 Street Adress City Address, 1234',
    phones: [
      {
        label: 'Phones:',
        number: '(00) 1234 5678',
        link: 'tel:001234568',
      },
    ],
    openingHours: [
      'Monday-Thursday: 9:00 AM - 5:30 PM',
      'Friday: 9:00 AM - 6:00 PM',
      'Saturday: 11:00 AM - 5:00 PM',
    ],
    email: {
      label: 'E-mail:',
      address: 'example@email.com',
      link: 'mailto:example@example.com',
    },
  };

  return mdScreen ? (
    <div className="flex flex-col justify-between text-xs">
      <div className="my-3 border-b">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className="flex w-full items-center text-left"
                onClick={() => handleDisclosureChange('information')}
              >
                <h3 className="mb-3 font-bold tracking-wide text-white">
                  Information
                </h3>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } mb-auto ml-auto w-4 transition-transform duration-200`}
                />
              </Disclosure.Button>
              <Transition
                show={activePanel === 'information'}
                enter="transition duration-300 transform origin-top"
                enterFrom="opacity-0 scale-y-0"
                enterTo="opacity-100 scale-y-100"
                leave="transition duration-300 transform origin-top"
                leaveFrom="opacity-100 scale-y-100"
                leaveTo="opacity-0 scale-y-0"
              >
                <Disclosure.Panel>
                  <ul className="mb-4 ml-3 opacity-75">
                    {informationLinks.map((link, index) => (
                      <li key={index}>
                        <NavLink
                          className="duration-200 hover:text-color4"
                          to={link.to}
                        >
                          {link.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
      <div className="my-3 border-b">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className="flex w-full items-center text-left"
                onClick={() => handleDisclosureChange('pcParts')}
              >
                <h3 className="mb-3 font-bold tracking-wide text-white">
                  PC Parts
                </h3>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } mb-auto ml-auto w-4 transition-transform duration-200`}
                />
              </Disclosure.Button>
              <Transition
                show={activePanel === 'pcParts'}
                enter="transition duration-300 transform origin-top"
                enterFrom="opacity-0 scale-y-0"
                enterTo="opacity-100 scale-y-100"
                leave="transition duration-300 transform origin-top"
                leaveFrom="opacity-100 scale-y-100"
                leaveTo="opacity-0 scale-y-0"
              >
                <Disclosure.Panel>
                  <ul className="mb-4 ml-3 opacity-75">
                    {pcPartsLinks.map((link, index) => (
                      <li key={index}>{link.label}</li>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
      <div className="my-3 border-b">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                onClick={() => handleDisclosureChange('desktopPcs')}
                className="flex w-full items-center text-left"
              >
                <h3 className="mb-3 font-bold tracking-wide text-white">
                  Desktop PCs
                </h3>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } mb-auto ml-auto w-4 transition-transform duration-200`}
                />
              </Disclosure.Button>
              <Transition
                show={activePanel === 'desktopPcs'}
                enter="transition duration-300 transform origin-top"
                enterFrom="opacity-0 scale-y-0"
                enterTo="opacity-100 scale-y-100"
                leave="transition duration-300 transform origin-top"
                leaveFrom="opacity-100 scale-y-100"
                leaveTo="opacity-0 scale-y-0"
              >
                <Disclosure.Panel>
                  <ul className="mb-4 ml-3 opacity-75">
                    {desktopPcLinks.map((link, index) => (
                      <li
                        className="duration-200 hover:text-color4"
                        key={index}
                      >
                        <NavLink
                          onClick={() => setSearchResults([])}
                          to={link.to}
                        >
                          {link.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
      <div className="my-3 border-b">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                onClick={() => handleDisclosureChange('laptops')}
                className="flex w-full items-center text-left"
              >
                <h3 className="mb-3 font-bold tracking-wide text-white">
                  Laptops
                </h3>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } mb-auto ml-auto w-4 transition-transform duration-200`}
                />
              </Disclosure.Button>
              <Transition
                show={activePanel === 'laptops'}
                enter="transition duration-300 transform origin-top"
                enterFrom="opacity-0 scale-y-0"
                enterTo="opacity-100 scale-y-100"
                leave="transition duration-300 transform origin-top"
                leaveFrom="opacity-100 scale-y-100"
                leaveTo="opacity-0 scale-y-0"
              >
                <Disclosure.Panel>
                  <ul className="mb-4 ml-3 opacity-75">
                    {laptopLinks.map((link, index) => (
                      <li key={index}>{link.label}</li>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
      <div className="my-3 border-b">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                onClick={() => handleDisclosureChange('address')}
                className="flex w-full items-center text-left"
              >
                <h3 className="mb-3 font-bold tracking-wide text-white">
                  Address
                </h3>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } mb-auto ml-auto w-4 transition-transform duration-200`}
                />
              </Disclosure.Button>
              <Transition
                show={activePanel === 'address'}
                enter="transition duration-300 transform origin-top"
                enterFrom="opacity-0 scale-y-0"
                enterTo="opacity-100 scale-y-100"
                leave="transition duration-300 transform origin-top"
                leaveFrom="opacity-100 scale-y-100"
                leaveTo="opacity-0 scale-y-0"
              >
                <Disclosure.Panel>
                  <ul className="mb-4 ml-3 opacity-75">
                    <li>{`Address: ${addressInfo.address}`}</li>
                    {addressInfo.phones.map((phone, index) => (
                      <li key={index}>
                        {`${phone.label} `}
                        <Link
                          to={phone.link}
                          className="text-color4 duration-200 hover:text-color2"
                        >
                          {phone.number}
                        </Link>
                      </li>
                    ))}
                    {addressInfo.openingHours.map((hours, index) => (
                      <li key={index}>{hours}</li>
                    ))}
                    <li>
                      {`${addressInfo.email.label} `}
                      <a
                        className="mt-1 text-xs font-normal text-color4 duration-200 hover:text-color2"
                        href={addressInfo.email.link}
                      >
                        {addressInfo.email.address}
                      </a>
                    </li>
                  </ul>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  ) : (
    <div className="flex justify-between text-xs lg:text-xxs">
      <div className="my-3">
        <h3 className="mb-3 font-bold tracking-wide text-[#ffffff82]">
          Information
        </h3>
        <ul>
          {informationLinks.map((link, index) => (
            <li key={index}>
              <NavLink className="duration-200 hover:text-color4" to={link.to}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="my-3">
        <h3 className="mb-3 font-bold tracking-wide text-[#ffffff82]">
          PC Parts
        </h3>

        <ul>
          {pcPartsLinks.map((link, index) => (
            <li key={index}>{link.label}</li>
          ))}
        </ul>
      </div>
      <div className="my-3">
        <NavLink
          onClick={() => setSearchResults([])}
          className="mb-3 font-bold tracking-wide text-[#ffffff82]"
        >
          Desktop PCs
        </NavLink>
        <ul className="mt-3">
          {desktopPcLinks.map((link, index) => (
            <li className="duration-200 hover:text-color4" key={index}>
              <NavLink onClick={() => setSearchResults([])} to={link.to}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="my-3">
        <NavLink
          onClick={() => setSearchResults([])}
          className="mb-3 font-bold tracking-wide text-[#ffffff82]"
        >
          Laptops
        </NavLink>
        <ul className="mt-3">
          {laptopLinks.map((link, index) => (
            <li key={index}>{link.label}</li>
          ))}
        </ul>
      </div>
      <div className="my-3">
        <h3 className="mb-3 font-bold tracking-wide text-[#ffffff82]">
          Address
        </h3>
        <ul>
          <li>{`Address: ${addressInfo.address}`}</li>
          {addressInfo.phones.map((phone, index) => (
            <li key={index}>
              {`${phone.label} `}
              <Link
                to={phone.link}
                className="text-color4 duration-200 hover:text-color2"
              >
                {phone.number}
              </Link>
            </li>
          ))}
          {addressInfo.openingHours.map((hours, index) => (
            <li key={index}>{hours}</li>
          ))}
          <li>
            {`${addressInfo.email.label} `}
            <a
              className="mt-1 text-xs font-normal text-color4 duration-200 hover:text-color2"
              href={addressInfo.email.link}
            >
              {addressInfo.email.address}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Links;
