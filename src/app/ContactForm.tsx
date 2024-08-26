import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ContactForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [helpYou, setHelpYou] = useState('');
  const [expectedBudget, setExpectedBudget] = useState<string[]>([]);
  const [products, setProducts] = useState<string[]>([]);
  const [contactByWsp, setContactByWsp] = useState<'Yes' | 'No'>('Yes');

  type BudgetOption = '1' | '2' | '3';
  type ProductOption = '1' | '2' | '3' | '4' | '5' | '6';

  const budgetOptions: Record<BudgetOption, string> = {
    '1': '$1k - $3k',
    '2': '$3k - $7k',
    '3': '$7k - $15k',
  };

  const productOptions: Record<ProductOption, string> = {
    '1': 'Brand identity',
    '2': 'Meta ads',
    '3': 'SMM & CMM',
    '4': 'SMM graphic design',
    '5': 'Video editing',
    '6': 'Website development',
  };

  const handleCheckboxChange = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formattedExpectedBudget = expectedBudget.map(value => budgetOptions[value as BudgetOption]).join(', ');
    const formattedProducts = products.map(value => productOptions[value as ProductOption]).join(', ');

    const dataToSend = {
      firstName,
      lastName,
      country,
      email,
      phone,
      helpYou,
      expectedBudget: formattedExpectedBudget,
      products: formattedProducts,
      contactByWsp: contactByWsp,
    };

    console.log('Datos a enviar a Brevo:', dataToSend);

    try {
      const response = await axios.post('/api/contact', dataToSend);
      console.log(response.data.message);

      // Show success alert
      Swal.fire({
        title: 'Success!',
        text: 'Your inquiry has been sent successfully.',
        icon: 'success',
        position: 'bottom-start',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      });

      // Reset form fields
      setFirstName('');
      setLastName('');
      setCountry('');
      setEmail('');
      setPhone('');
      setHelpYou('');
      setExpectedBudget([]);
      setProducts([]);
      setContactByWsp('Yes');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);

      // Show error alert
      Swal.fire({
        title: 'Error!',
        text: 'There was a problem sending your inquiry.',
        icon: 'error',
        position: 'bottom-start',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      });
    }
  };

  return (
    <div className="border-transparent shadow-dark rounded-3xl bg-white bg-opacity-5 backdrop-blur-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Checkbox for Products */}
        <div className="relative z-0 w-full mb-6 group">
          <p className="text-orange-600 text-sm font-semibold uppercase tracking-wide text-left mb-4">
            Select one or more products:
          </p>
          {Object.entries(productOptions).map(([key, label]) => (
            <div key={key} className="flex items-center mb-4">
              <input
                type="checkbox"
                id={`product-option-${key}`}
                value={key}
                checked={products.includes(key)}
                onChange={() => handleCheckboxChange(setProducts, key)}
                className="opacity-80 w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor={`product-option-${key}`}
                className="ms-2 text-sm font-medium text-white-900 dark:text-white-300"
              >
                {label}
              </label>
            </div>
          ))}
        </div>

        {/* First Name */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="firstName"
            id="floating_first_name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder=" "
            required
            className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer text-left"
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
        </div>

        {/* Last Name */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="lastName"
            id="floating_last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder=" "
            required
            className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer text-left"
          />
          <label
            htmlFor="floating_last_name"
            className="peer-focus:font-medium absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
        </div>

        {/* Country */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="country"
            id="floating_country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder=" "
            required
            className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer text-left"
          />
          <label
            htmlFor="floating_country"
            className="peer-focus:font-medium absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Country
          </label>
        </div>

        {/* Email */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            required
            className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer text-left"
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>

        {/* Phone */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="phone"
            id="floating_phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder=" "
            required
            className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer text-left"
          />
          <label
            htmlFor="floating_phone"
            className="peer-focus:font-medium absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number
          </label>
        </div>

        {/* Help You */}
        <div className="relative z-0 w-full mb-6 group">
          <textarea
            id="floating_help_you"
            value={helpYou}
            onChange={(e) => setHelpYou(e.target.value)}
            placeholder=" "
            required
            className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer text-left"
          />
          <label
            htmlFor="floating_help_you"
            className="peer-focus:font-medium absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            How can we help you?
          </label>
        </div>

        {/* Budget */}
        <div className="relative z-0 w-full mb-6 group">
          <p className="text-orange-600 text-sm font-semibold uppercase tracking-wide text-left mb-4">
            Expected Budget
          </p>
          {Object.entries(budgetOptions).map(([key, label]) => (
            <div key={key} className="flex items-center mb-4">
              <input
                type="checkbox"
                id={`budget-option-${key}`}
                value={key}
                checked={expectedBudget.includes(key)}
                onChange={() => handleCheckboxChange(setExpectedBudget, key)}
                className="opacity-80 w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor={`budget-option-${key}`}
                className="ms-2 text-sm font-medium text-white-900 dark:text-white-300"
              >
                {label}
              </label>
            </div>
          ))}
        </div>

        {/* Contact by WhatsApp */}
        <div className="relative z-0 w-full mb-6 group">
          <p className="text-orange-600 text-sm font-semibold uppercase tracking-wide text-left mb-4">
            Contact by WhatsApp
          </p>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="contact_by_wsp_yes"
              name="contactByWsp"
              value="Yes"
              checked={contactByWsp === 'Yes'}
              onChange={() => setContactByWsp('Yes')}
              className="opacity-80 w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="contact_by_wsp_yes"
              className="ms-2 text-sm font-medium text-white-900 dark:text-white-300"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="contact_by_wsp_no"
              name="contactByWsp"
              value="No"
              checked={contactByWsp === 'No'}
              onChange={() => setContactByWsp('No')}
              className="opacity-80 w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="contact_by_wsp_no"
              className="ms-2 text-sm font-medium text-white-900 dark:text-white-300"
            >
              No
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
