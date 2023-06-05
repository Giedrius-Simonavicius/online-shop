import React from 'react';
import ContactForm from '../components/forms/COntactForm';
import Services from '../components/homePageProducts/Services';
import { Link } from 'react-router-dom';

function ContactUs() {
  return (
    <div className="container mx-auto">
      <h2 className="my-4 text-2xl">Contact Us</h2>
      <p className="text-sm font-normal">
        We love hearing from you, our Shop customers.
      </p>
      <p className="text-sm font-normal">
        Please contact us and we will make sure to get back to you as soon as we
        possibly can.
      </p>
      <main className="flex ">
        <ContactForm />
        <section
          className={` ml-[6rem] mt-2 h-fit rounded bg-color1 px-10 pb-4 pt-3`}
        >
          <div className="mt-2 pb-2 pt-2">
            <div className="flex">
              <div className="mr-2">
                <img
                  src="../../../public/icons/locationBlack.svg"
                  alt="location"
                />
              </div>
              <div>
                <p className="mt-1">Address:</p>
                <p className="mt-1 text-xs font-normal">
                  1234 Street Adress, City Address, 1234
                </p>
              </div>
            </div>
          </div>
          <div className="mt-2 pb-2 pt-2">
            <div className="mr-2 flex">
              <div className="mr-2">
                <img src="../../../public/icons/phone.svg" alt="phone" />
              </div>
              <div>
                <p className="mt-1">Phone:</p>
                <Link
                  to="tel:0012345678"
                  className="hover:color2 mt-1 text-xs font-normal duration-200"
                >
                  (00) 1234 5678
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-2 flex ">
            <div className="mr-2">
              <img src="../../../public/icons/timeBlack.svg" alt="time" />
            </div>
            <div>
              <p>We are open:</p>
              <p className="text-xs font-normal">
                Monday - Thursday: 9:00 AM - 5:30 PM
              </p>
              <p className="text-xs font-normal">Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-xs font-normal">
                Saturday: 11:00 AM - 5:00 PM
              </p>
            </div>
          </div>

          <div className="mt-2 pb-2 pt-2">
            <div className="mr-2 flex">
              <div className="mr-2">
                <img src="../../../public/icons/mail.svg" alt="email" />
              </div>
              <div>
                <p className="mt-1">E-mail:</p>
                <a
                  className="hover:color2 mt-1 text-xs font-normal text-color3 duration-200"
                  href="mailto:example@example.com"
                >
                  shop@email.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Services />
    </div>
  );
}

export default ContactUs;
