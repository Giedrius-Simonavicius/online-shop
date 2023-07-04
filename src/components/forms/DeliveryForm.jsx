import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useShoppingCartCtx } from '../../context/ShoppingCartContext';
import { countryList } from '../../data/data';
import { toast } from 'react-hot-toast';

function DeliveryForm() {
  const navigate = useNavigate();
  const { setShippingInfo, shippingInfo, setDeliveryFee } =
    useShoppingCartCtx();
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      lastName: '',
      streetAddress: '',
      city: '',
      postalCode: '',
      country: '',
      phoneNo: '',
      deliveryMethod: 'standard',
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      const isFormEmpty = Object.values(values).some((value) => !value.trim());

      if (isFormEmpty) {
        toast.error('Please fill in all fields');
      } else {
        saveShippingInfo(values, setSubmitting);
        resetForm();
        navigate('/cart/review');
      }
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = 'Email is required';
      }
      if (!values.name) {
        errors.name = 'Name is required';
      }
      if (!values.lastName) {
        errors.lastName = 'Last name is required';
      }
      if (!values.streetAddress) {
        errors.streetAddress = 'Street address is required';
      }
      if (!values.city) {
        errors.city = 'City is required';
      }
      if (!values.postalCode) {
        errors.postalCode = 'Post code is required';
      }
      if (!values.country) {
        errors.country = 'Country is required';
      }
      if (!values.phoneNo) {
        errors.phoneNo = 'Phone number is required';
      }
      if (!values.deliveryMethod) {
        errors.deliveryMethod = 'Delivery method is required';
      }

      return errors;
    },
  });

  function saveShippingInfo(ShippingInfoValuesObj) {
    setShippingInfo({
      email: ShippingInfoValuesObj.email,
      name: ShippingInfoValuesObj.name,
      lastName: ShippingInfoValuesObj.lastName,
      city: ShippingInfoValuesObj.city,
      streetAddress: ShippingInfoValuesObj.streetAddress,
      postalCode: ShippingInfoValuesObj.postalCode,
      country: ShippingInfoValuesObj.country,
      phoneNo: ShippingInfoValuesObj.phoneNo,
      deliveryMethod: ShippingInfoValuesObj.deliveryMethod,
    });
    console.log('newShippingInfo ===', shippingInfo);
  }
  const handleDeliveryMethodChange = (event) => {
    const { value } = event.target;
    setDeliveryFee(value === 'standard' ? 0 : 21);
    formik.handleChange(event);
  };
  return (
    <div className="mt-10 w-[66%] pt-3 sm:w-full">
      <h2 className=" border-b pb-4">Shipping Address</h2>
      <form
        className="my-7 w-3/4 text-sm md:w-full"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <div>
            <label htmlFor="email">
              Email Address <span className="text-color8">*</span>
            </label>
          </div>
          <div>
            <input
              className=" mt-2 w-full  rounded border-2 py-2 pl-4 font-normal placeholder:font-light  sm:placeholder:text-xs"
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="mt-1 text-xs text-color8">
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="name">
              First Name <span className="text-color8">*</span>
            </label>
          </div>
          <div>
            <input
              className=" mt-2 w-full  rounded border-2 py-2 pl-4 font-normal placeholder:font-light  sm:placeholder:text-xs"
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
            <div className="mt-1 text-xs text-color8">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="lastName">
              Last Name <span className="text-color8">*</span>
            </label>
          </div>
          <div>
            <input
              className=" mt-2 w-full  rounded border-2 py-2 pl-4 font-normal placeholder:font-light  sm:placeholder:text-xs"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Your Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="mt-1 text-xs text-color8">
              {formik.errors.lastName}
            </div>
          ) : null}
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="streetAddress">
              Street address and house number{' '}
              <span className="text-color8">*</span>
            </label>
          </div>
          <div>
            <input
              className=" mt-2 w-full  rounded border-2 py-2 pl-4 font-normal placeholder:font-light  sm:placeholder:text-xs"
              type="text"
              id="streetAddress"
              name="streetAddress"
              placeholder="Street Address"
              value={formik.values.streetAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.streetAddress && formik.errors.streetAddress ? (
            <div className="mt-1 text-xs text-color8">
              {formik.errors.streetAddress}
            </div>
          ) : null}
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="city">
              City <span className="text-color8">*</span>
            </label>
          </div>
          <div>
            <input
              className=" mt-2 w-full  rounded border-2 py-2 pl-4 font-normal placeholder:font-light  sm:placeholder:text-xs"
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.city && formik.errors.city ? (
            <div className="mt-1 text-xs text-color8">{formik.errors.city}</div>
          ) : null}
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="postalCode">
              Zip/Postal Code <span className="text-color8">*</span>
            </label>
          </div>
          <div>
            <input
              className=" mt-2 w-full  rounded border-2 py-2 pl-4 font-normal placeholder:font-light  sm:placeholder:text-xs"
              type="text"
              id="postalCode"
              name="postalCode"
              placeholder="Zip/Postal Code"
              value={formik.values.postalCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.postalCode && formik.errors.postalCode ? (
            <div className="mt-1 text-xs text-color8">
              {formik.errors.postalCode}
            </div>
          ) : null}
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="country">
              Country <span className="text-color8">*</span>
            </label>
          </div>
          <div>
            <select
              className="mt-2 w-full rounded border-2 py-2 pl-4 pr-8 font-normal sm:text-xs"
              type="text"
              id="country"
              name="country"
              placeholder="Country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" disabled>
                Select Country
              </option>
              {countryList.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          {formik.touched.country && formik.errors.country ? (
            <div className="mt-1 text-xs text-color8">
              {formik.errors.country}
            </div>
          ) : null}
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="phoneNo">
              Phone number <span className="text-color8">*</span>
            </label>
          </div>
          <div>
            <input
              className="mt-2 w-full rounded border-2 py-2 pl-4 font-normal placeholder:font-light sm:placeholder:text-xs"
              type="text"
              id="phoneNo"
              name="phoneNo"
              placeholder="Phone number"
              value={formik.values.phoneNo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.phoneNo && formik.errors.phoneNo ? (
            <div className="mt-1 text-xs text-color8">
              {formik.errors.phoneNo}
            </div>
          ) : null}
        </div>

        <div className="mt-4">
          <div>
            <label>
              Delivery Method <span className="text-color8">*</span>
            </label>
          </div>
          <div className="mt-4 flex flex-col sm:text-xs">
            <label className="mb-2">
              <input
                className="mr-2"
                type="radio"
                name="deliveryMethod"
                value="standard"
                checked={formik.values.deliveryMethod === 'standard'}
                onChange={handleDeliveryMethodChange}
              />
              (Free) Pickup from store
            </label>
            <label>
              <input
                className="mr-2"
                type="radio"
                name="deliveryMethod"
                value="express"
                checked={formik.values.deliveryMethod === 'express'}
                onChange={handleDeliveryMethodChange}
              />
              $21.00 Price may vary depending on the item/destination. Shop
              Staff will contact you.
            </label>
          </div>
          {formik.touched.deliveryMethod && formik.errors.deliveryMethod ? (
            <div className="mt-1 text-xs text-color8">
              {formik.errors.deliveryMethod}
            </div>
          ) : null}
        </div>

        <button
          className="mt-4 rounded-full border-2 border-color3 bg-color3
             px-12 py-2 font-normal text-white duration-200 hover:border-2 hover:bg-color1 hover:text-color3 sm:min-w-full sm:px-2 sm:text-xs"
          type="submit"
        >
          Proceed to Review & Payment
        </button>
      </form>{' '}
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="mt-4 rounded-full border-2
             border-color3 bg-color3 px-8 font-normal text-white duration-200 hover:border-2 hover:bg-color1 hover:text-color3 sm:mt-1 sm:min-w-full sm:py-1 sm:text-xs"
      >
        Go back
      </button>
    </div>
  );
}

export default DeliveryForm;
