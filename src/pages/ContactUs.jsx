import React from 'react';
import ContactForm from '../components/forms/ContactForm';
import { Link } from 'react-router-dom';

function ContactUs() {
  return (
    <div className="container mx-auto px-6 sm:px-3">
      <h2 className="my-4 text-2xl font-bold">Contact Us</h2>
      <p className="text-sm font-normal sm:mb-2 sm:text-xs">
        We love hearing from you, our Shop customers.
      </p>
      <p className="text-sm font-normal sm:text-xs">
        Please contact us and we will make sure to get back to you as soon as we
        possibly can.
      </p>
      <main className="flex gap-3 sm:flex-col">
        <ContactForm />
        <section
          className={` mt-2 h-fit rounded bg-color1 px-10 pb-4 pt-3  sm:mr-0  lg:mt-10 lg:px-5`}
        >
          <div className="mt-2 pb-2 pt-2">
            <div className="flex">
              <div className="mr-2">
                <img src="/icons/locationBlack.svg" alt="location" />
              </div>
              <div>
                <p className="mt-1 lg:text-sm">Address:</p>
                <p className="mt-1 text-xs font-normal lg:text-xxs">
                  1234 Street Adress, City Address, 1234
                </p>
              </div>
            </div>
          </div>
          <div className="mt-2 pb-2 pt-2">
            <div className="mr-2 flex">
              <div className="mr-2 ">
                <img src="/icons/phone.svg" alt="phone" />
              </div>
              <div>
                <p className="mt-1 lg:text-sm">Phone:</p>
                <Link
                  to="tel:0012345678"
                  className="hover:color2 mt-1 text-xs font-normal duration-200 lg:text-xxs"
                >
                  (00) 1234 5678
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-2 flex ">
            <div className="mr-2">
              <img src="/icons/timeBlack.svg" alt="time" />
            </div>
            <div>
              <p className="lg:text-sm">We are open:</p>
              <p className="text-xs font-normal lg:text-xxs">
                Monday - Thursday: 9:00 AM - 5:30 PM
              </p>
              <p className="text-xs font-normal lg:text-xxs">
                Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-xs font-normal lg:text-xxs">
                Saturday: 11:00 AM - 5:00 PM
              </p>
            </div>
          </div>

          <div className="mt-2 pb-2 pt-2">
            <div className="mr-2 flex">
              <div className="mr-2 ">
                <img src="/icons/mail.svg" alt="email" />
              </div>
              <div>
                <p className="mt-1 lg:text-sm">E-mail:</p>
                <a
                  className="hover:color2 mt-1 text-xs font-normal text-color3 duration-200 lg:text-xxs"
                  href="mailto:example@example.com"
                >
                  shop@email.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactUs;
