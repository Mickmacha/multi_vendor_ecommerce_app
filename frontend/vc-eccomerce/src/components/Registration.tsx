import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();


function Registration() {
  let base_url = process.env.REACT_APP_API_URL;

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);

  // Handle Form Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  }
  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      const response = await axios.post(`${base_url}/register/customer`, formData);
      console.log(response);
    }catch(err: any){
      setError(err.response.data.message);
    }
  }

  return (
    <>
      {/* Main container for the registration form */}
      <section className="h-screen">
        <div className="container h-full px-6 py-24">
          {/* Flex container for the form and image */}
          <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* Image section */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>
            {/* Form section */}
            <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
              <form>
                {/* full name input */}
                <div className="relative mb-6">
                  <input
                    type="text"
                    className="peer block w-full rounded border-0 bg-transparent px-3 py-2 leading-6 text-white placeholder-transparent focus:border-primary focus:outline-none focus:ring-0"
                    id="fullName"
                    onChange={handleChange}
                    placeholder="Full name"  // Keep the placeholder but make it transparent initially
                  />
                  <label
                    htmlFor="fullName"
                    className="absolute left-3 top-2 text-gray-500 transition-transform duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:left-3 peer-focus:text-sm peer-focus:text-primary"
                  >
                    Full name
                  </label>
                  </div>
                {/* Email input */}
                <div className="relative mb-6">
                  <input
                    type="text"
                    className="peer block w-full rounded border border-gray-300 bg-transparent px-3 py-2 leading-6 text-white placeholder-transparent focus:border-primary focus:outline-none focus:ring-0"
                    id="email"
                    onChange={handleChange}
                    placeholder="Email address"  // Keep the placeholder but make it transparent initially
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 top-2 text-gray-500 transition-transform duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:left-3 peer-focus:text-sm peer-focus:text-primary"
                  >
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div className="relative mb-6">
                  <input
                    type="password"
                    className="peer block w-full rounded border-0 bg-transparent px-3 py-2 leading-6 outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary placeholder-opacity-0 dark:text-white dark:placeholder:text-neutral-300 dark:peer-focus:text-primary"
                    id="password"
                    onChange = {handleChange}
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-3 top-2 text-gray-500 transition-transform duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:left-3 peer-focus:text-sm peer-focus:text-primary"
                  >
                    Password
                  </label>
                </div>
                {/* Remember me checkbox and terms link */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      className="h-4 w-4 rounded border-secondary-500 text-primary focus:ring-primary dark:border-neutral-400 dark:bg-neutral-700"
                      type="checkbox"
                      id="rememberMe"
                    />
                    <label
                      className="ml-2 text-sm text-neutral-600 dark:text-neutral-400"
                      htmlFor="rememberMe"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#!"
                    className="text-sm text-primary dark:text-primary-400"
                  >
                    Terms and conditions
                  </a>
                </div>
                {/* Register button */}
                <button
                  type="submit"
                  className="w-full rounded bg-primary px-7 py-3 text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:outline-none focus:bg-primary-accent-300 active:bg-primary-600 dark:shadow-black/30 dark:hover:shadow-lg dark:focus:shadow-lg"
                >
                  Register
                </button>
                {/* Login link */}
                <p className="mt-4 text-center">
                  Already have an account?{' '}
                  <a href="/login" className="text-primary">
                    Login
                  </a>
                </p>
                {/* Divider */}
                <div className="my-4 flex items-center before:flex-1 before:border-t before:border-neutral-300 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                    OR
                  </p>
                </div>
                {/* Social login buttons */}
                <a
                  className="mb-3 flex w-full items-center justify-center rounded bg-[#3b5998] px-7 py-3 text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-[#2d4373] focus:outline-none focus:bg-[#2d4373] active:bg-[#2d4373] dark:shadow-black/30 dark:hover:shadow-lg dark:focus:shadow-lg"
                  href="#!"
                  role="button"
                >
                  {/* Facebook icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="mr-2 h-4 w-4 fill-current"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                  Continue with Facebook
                </a>
                <a
                  className="mb-3 flex w-full items-center justify-center rounded bg-[#1DA1F2] px-7 py-3 text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-[#0d8bce] focus:outline-none focus:bg-[#0d8bce] active:bg-[#0d8bce] dark:shadow-black/30 dark:hover:shadow-lg dark:focus:shadow-lg"
                  href="#!"
                  role="button"
                >
                  {/* X icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="mr-2 h-4 w-4 fill-current"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                  Continue with X
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Registration;
