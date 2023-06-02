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
    const emaiTo = '9766bbb2659fd75614fbdd63f252d9f0';
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
    <form onSubmit={formik.handleSubmit}>
      <div className="flex">
        <div className="flex-col">
          <label htmlFor="name">
            Your Name <span>*</span>
          </label>
          <input
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
        <div className="flex-col">
          <label htmlFor="email">
            Your Email <span>*</span>
          </label>
          <input
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
        ) : null}
      </div>
      <div className="flex">
        <label htmlFor="phone">Your Phone Number </label>
        <input
          type="phone"
          id="phone"
          name="phone"
          placeholder="Your Phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="flex">
        <label htmlFor="message">
          What's on your mind? <span>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Just us a note and we'll get back to you as quickly as possible"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched.message && formik.errors.message ? (
        <div>{formik.errors.message}</div>
      ) : null}{' '}
      <button type="submit" disabled={formik.isSubmitting}>
        {formik.isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

export default ContactForm;
