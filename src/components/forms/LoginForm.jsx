import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

function LoginForm({ onUserLogin }) {
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

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        await onUserLogin(values);
      } catch (error) {
      } finally {
        setSubmitting(false);
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
          className="mt-2 w-full rounded border-2 border-color6 py-4 pl-4 font-normal placeholder:font-light"
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
          className="mt-2 w-full rounded border-2 border-color6 py-4 pl-4 font-normal placeholder:font-light"
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
        className={`mt-6 rounded-full duration-200 hover:bg-color4 sm:w-full ${
          formik.isSubmitting ? 'bg-[#666] hover:bg-[#666]' : 'bg-color3'
        } px-12 py-2 font-normal text-white`}
        type="submit"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? 'Submitting...' : 'Log in'}
      </button>
    </form>
  );
}

LoginForm.propTypes = {
  onUserLogin: PropTypes.func,
};
export default LoginForm;
