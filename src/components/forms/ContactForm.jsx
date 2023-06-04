import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      phone: '',
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      sendEmail(values, setSubmitting);
      resetForm();
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Name is required';
      }

      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Invalid email format';
      }

      if (!values.message) {
        errors.message = 'Message is required';
      }

      return errors;
    },
  });

  function sendEmail(emailValuesObj, setSubmitting) {
    const emaiTo = 'giedrius.simonavicius123@gmail.com';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios
      .post(`https://formsubmit.co/ajax/${emaiTo}`, {
        formTitle: 'FormSubmit form my form',
        ...emailValuesObj,
      })
      .then((response) => {
        console.log('response.data ===', response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setSubmitting(false));
  }

  return (
    <form
      className="my-10 mr-6 min-w-[55vw] text-sm"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex w-full gap-4">
        <div className="w-1/2">
          <div>
            <label htmlFor="name">
              Your Name <span className="text-color8">*</span>
            </label>
          </div>
          <div>
            <input
              className="mt-2 w-full rounded border-2 py-4 pl-4 font-normal placeholder:font-light"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="w-1/2">
          <div>
            <label htmlFor="email">
              Your Email <span className="text-color8">*</span>
            </label>
          </div>
          <div>
            <input
              className="mt-2 w-full rounded border-2 py-4 pl-4 font-normal placeholder:font-light"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}{' '}
        </div>
      </div>
      <div className="my-6 ">
        <div>
          <label htmlFor="phone">Your Phone Number </label>
        </div>
        <div>
          <input
            className="mt-2 w-1/2 rounded border-2 py-4 pl-4 font-normal placeholder:font-light"
            type="phone"
            id="phone"
            name="phone"
            placeholder="Your Phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </div>
      <div className="mb-2 ">
        <div>
          <label htmlFor="message">
            What's on your mind? <span className="text-color8">*</span>
          </label>
        </div>
        <div>
          <textarea
            cols="30"
            rows="10"
            className="mt-2 w-full resize-none rounded border-2 pl-4 pt-4 font-normal  placeholder:font-light"
            id="message"
            name="message"
            placeholder="Just us a note and we'll get back to you as quickly as possible"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </div>
      {formik.touched.message && formik.errors.message ? (
        <div>{formik.errors.message}</div>
      ) : null}{' '}
      <button
        className={`rounded-full ${
          formik.isSubmitting ? 'bg-[#666]' : 'bg-color3'
        } px-12  py-2 font-normal text-white`}
        type="submit"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

export default ContactForm;
