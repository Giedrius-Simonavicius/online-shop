import React from 'react';
import { useFormik } from 'formik';

function DeliveryForm() {
  const countryList = [
    'Afghanistan',
    'Aland Islands',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bonaire, Sint Eustatius and Saba',
    'Bosnia and Herzegovina',
    'Botswana',
    'Bouvet Island',
    'Brazil',
    'British Indian Ocean Territory',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands',
    'Colombia',
    'Comoros',
    'Congo',
    'Congo, Democratic Republic of the Congo',
    'Cook Islands',
    'Costa Rica',
    "Cote D'Ivoire",
    'Croatia',
    'Cuba',
    'Curacao',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands (Malvinas)',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Territories',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Heard Island and McDonald Islands',
    'Holy See (Vatican City State)',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran, Islamic Republic of',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    "Korea, Democratic People's Republic of",
    'Korea, Republic of',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    "Lao People's Democratic Republic",
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libyan Arab Jamahiriya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    'Macedonia, the Former Yugoslav Republic of',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia, Federated States of',
    'Moldova, Republic of',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'Netherlands Antilles',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestinian Territory, Occupied',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcairn',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Reunion',
    'Romania',
    'Russian Federation',
    'Rwanda',
    'Saint Barthelemy',
    'Saint Helena',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin',
    'Saint Pierre and Miquelon',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'St Martin',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Georgia and the South Sandwich Islands',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Svalbard and Jan Mayen',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syrian Arab Republic',
    'Taiwan, Province of China',
    'Tajikistan',
    'Tanzania, United Republic of',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'United States Minor Outlying Islands',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela',
    'Viet Nam',
    'Virgin Islands, British',
    'Virgin Islands, U.s.',
    'Wallis and Futuna',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ];
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
      deliveryMethod: '',
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      saveShippingInfo(values, setSubmitting);
      resetForm();
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
    const newShippingInfo = {
      email: ShippingInfoValuesObj.email,
      name: ShippingInfoValuesObj.name,
      lastName: ShippingInfoValuesObj.lastName,
      city: ShippingInfoValuesObj.city,
      postalCode: ShippingInfoValuesObj.postalCode,
      country: ShippingInfoValuesObj.country,
      phoneNo: ShippingInfoValuesObj.phoneNo,
      deliveryMethod: ShippingInfoValuesObj.deliveryMethod,
    };
    console.log('newShippingInfo ===', newShippingInfo);
  }
  return (
    <div className="w-[66%]">
      <h2 className="mt-10 border-b pb-4">Shipping Address</h2>
      <form className="my-7 w-3/4 text-sm" onSubmit={formik.handleSubmit}>
        <div>
          <div>
            <label htmlFor="email">
              Email Address <span className="text-color8">*</span>
            </label>
          </div>
          <div>
            <input
              className=" mt-2 w-full rounded border-2 py-2 pl-4 font-normal  placeholder:font-light"
              type="text"
              id="email"
              name="email"
              placeholder="Your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
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
              className=" mt-2 w-full rounded border-2 py-2 pl-4 font-normal  placeholder:font-light"
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

        <div className="mt-4">
          <div>
            <label htmlFor="lastName">
              Last Name <span className="text-color8">*</span>
            </label>
          </div>
          <div>
            <input
              className=" mt-2 w-full rounded border-2 py-2 pl-4 font-normal  placeholder:font-light"
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
            <div>{formik.errors.lastName}</div>
          ) : null}
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="streetAddress">
              Street Address <span className="text-color8">*</span>
            </label>
          </div>
          <div>
            <input
              className=" mt-2 w-full rounded border-2 py-2 pl-4 font-normal  placeholder:font-light"
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
            <div>{formik.errors.streetAddress}</div>
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
              className=" mt-2 w-full rounded border-2 py-2 pl-4 font-normal  placeholder:font-light"
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
            <div>{formik.errors.city}</div>
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
              className=" mt-2 w-full rounded border-2 py-2 pl-4 font-normal  placeholder:font-light"
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
            <div>{formik.errors.postalCode}</div>
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
              className="mt-2 w-full rounded border-2 py-2 pl-4 pr-8 font-normal"
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
            <div>{formik.errors.country}</div>
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
              className=" mt-2 w-full rounded border-2 py-2 pl-4 font-normal placeholder:font-light"
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
            <div>{formik.errors.phoneNo}</div>
          ) : null}
        </div>

        <div className="mt-6 border-t pt-3">
          <div className="items-center">
            <h3 className="mb-2 font-bold">Standard Rate</h3>
            <div className="flex items-center justify-between">
              <div>
                <input
                  className="mr-2 mt-2"
                  type="radio"
                  id="standardRate"
                  name="deliveryMethod"
                  value="standardRate"
                  checked={formik.values.deliveryMethod === 'standardRate'}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <label htmlFor="standardRate" className="flex items-center">
                Price may vary depending on the item/destination. Shop Staff
                will contact you.
              </label>
              <span className="ml-auto font-bold">$21.00</span>
            </div>
          </div>

          <div className="mt-4 items-center">
            <h3 className="mb-2 font-bold">Pickup from store</h3>
            <div className="flex items-center justify-between">
              <div>
                <input
                  className="mr-2 mt-2"
                  type="radio"
                  id="pickupFromStore"
                  name="deliveryMethod"
                  value="pickupFromStore"
                  checked={formik.values.deliveryMethod === 'pickupFromStore'}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <label htmlFor="pickupFromStore" className="flex items-center">
                1234 Street Address City Address, 1234
              </label>
              <span className="ml-auto font-bold">$0.00</span>
            </div>
          </div>
          {formik.touched.deliveryMethod && formik.errors.deliveryMethod ? (
            <div>{formik.errors.deliveryMethod}</div>
          ) : null}
        </div>

        <button
          className="mt-4 rounded-full 
           border-2 border-color3 bg-color3 px-12 py-2 font-normal text-white duration-200 hover:border-2 hover:bg-color1 hover:text-color3"
          type="submit"
        >
          Proceed to payment
        </button>
      </form>
    </div>
  );
}

export default DeliveryForm;
