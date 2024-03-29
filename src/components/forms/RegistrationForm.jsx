import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function RegistrationForm({ onUserRegistration }) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Minimum 6 symbols required'),
    }),

    onSubmit: (values, { resetForm, setSubmitting }) => {
      onUserRegistration(values, setSubmitting, resetForm);
      if (!formik.isSubmitting) {
        navigate(-1);
      }
    },
  });

  return (
    <form className="container mx-auto mt-4" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="email">
          Email <span className="text-color8">*</span>
        </label>
        <input
          className={`${
            formik.touched.email && formik.errors.email
              ? 'border-color8 focus-visible:outline-color8'
              : ''
          } mt-2 w-full rounded border-2 border-color6 py-4 pl-4 font-normal placeholder:font-light`}
          id="email"
          type="text"
          name="email"
          placeholder="Your email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="mt-1 text-xs text-color8">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="mt-6 flex flex-col">
        <label htmlFor="password">
          Password <span className="text-color8">*</span>
        </label>
        <input
          className={`${
            formik.touched.password && formik.errors.password
              ? 'border-color8 focus-visible:outline-color8'
              : ''
          } mt-2 w-full rounded border-2 border-color6 py-4 pl-4 font-normal placeholder:font-light`}
          id="password"
          type="password"
          name="password"
          placeholder="Your password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="mt-1 text-xs text-color8">
            {formik.errors.password}
          </div>
        ) : null}
      </div>
      <button
        className={`mt-6 rounded-full duration-200 hover:bg-color4 ${
          formik.isSubmitting ? 'bg-[#666] hover:bg-[#666]' : 'bg-color3'
        } px-12 py-2 font-normal text-white sm:w-full`}
        type="submit"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? 'Submitting...' : 'Register'}
      </button>
    </form>
  );
}

RegistrationForm.propTypes = {
  onUserRegistration: PropTypes.func,
};
export default RegistrationForm;
