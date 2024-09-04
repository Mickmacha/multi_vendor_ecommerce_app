import React, { useState } from 'react';
import { useAuth } from '../contexts/useAuth';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    type: 'customer' // Default to customer
  });
  const [error, setError] = useState<string | null>(null);

  // Handle Form Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  }

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await register(formData.fullName, formData.email, formData.password, formData.type as 'customer' | 'vendor');
      navigate('/dashboard'); // Redirect to dashboard after successful registration
    } catch (err: any) {
      setError(err.message || 'Registration failed');
    }
  }

  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24">
        <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* Image section (unchanged) */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
          {/* Form section */}
          <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
            <form onSubmit={handleSubmit}>
              {/* Full name input */}
              <div className="relative mb-6">
                <input
                  type="text"
                  className="peer block w-full rounded border-0 bg-transparent px-3 py-2 leading-6 text-white placeholder-transparent focus:border-primary focus:outline-none focus:ring-0"
                  id="fullName"
                  onChange={handleChange}
                  value={formData.fullName}
                  placeholder="Full name"
                  required
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
                  type="email"
                  className="peer block w-full rounded border border-gray-300 bg-transparent px-3 py-2 leading-6 text-white placeholder-transparent focus:border-primary focus:outline-none focus:ring-0"
                  id="email"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="Email address"
                  required
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
                  onChange={handleChange}
                  value={formData.password}
                  placeholder="Password"
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute left-3 top-2 text-gray-500 transition-transform duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:left-3 peer-focus:text-sm peer-focus:text-primary"
                >
                  Password
                </label>
              </div>
              {/* User type selection */}
              <div className="relative mb-6">
                <select
                  id="type"
                  onChange={handleChange}
                  value={formData.type}
                  className="peer block w-full rounded border border-gray-300 bg-transparent px-3 py-2 leading-6 text-white focus:border-primary focus:outline-none focus:ring-0"
                  required
                >
                  <option value="customer">Customer</option>
                  <option value="vendor">Vendor</option>
                </select>
                <label
                  htmlFor="type"
                  className="absolute left-3 -top-4 text-sm text-gray-500"
                >
                  Account Type
                </label>
              </div>
              {/* Error message */}
              {error && <div className="mb-4 text-red-500">{error}</div>}
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
              {/* Rest of the component remains unchanged */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;