import React, { useState } from 'react';
import { useAuth } from '../contexts/useAuth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    type: 'customer' // Default to customer
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password, formData.type as 'customer' | 'vendor');
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } catch (err: any) {
      setError(err.message || 'Login failed');
      console.error('Login failed:', err);
    }
  };

  return (
    <div>
      <section className="h-screen">
        <div className="container h-full px-6 py-24">
          <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>

            <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
              <form onSubmit={handleSubmit}>
                <div className="relative mb-6">
                  <input
                    type="email"
                    className="peer block w-full rounded border border-gray-300 bg-transparent px-3 py-2.5 leading-tight outline-none transition duration-200 ease-linear focus:border-blue-500 focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    required
                  />
            
                </div>

                <div className="relative mb-6">
                  <input
                    type="password"
                    className="peer block w-full rounded border border-gray-300 bg-transparent px-3 py-2.5 leading-tight outline-none transition duration-200 ease-linear focus:border-blue-500 focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />

                </div >
                <p className='flex text-gray-500 font-semibold'> Choose Account Type
                  </p>
                <div className="relative mb-6">
                  <select
                    id="type"
                    onChange={handleChange}
                    value={formData.type}
                   
                    className="peer block w-full rounded border border-gray-300 bg-transparent px-3 py-2.5 leading-tight outline-none transition duration-200 ease-linear focus:border-blue-500 focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    required
                  >
                    <option value="customer">Customer</option>
                    <option value="vendor">Vendor</option>
                  </select>

                </div>

                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                      type="checkbox"
                      id="rememberMe"
                    />
                    <label
                      className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
                      htmlFor="rememberMe"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#!"
                    className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Forgot password?
                  </a>
                </div>

                {error && <div className="mb-4 text-red-500">{error}</div>}

                <button
                  type="submit"
                  className="inline-block w-full rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-800"
                >
                  Sign in
                </button>

                <div className="my-4 flex items-center">
                  <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
                  <p className="mx-4 mb-0 text-center font-semibold text-gray-500 dark:text-gray-200">
                    OR
                  </p>
                  <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
                </div>

                {/* Facebook and X buttons remain unchanged */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;