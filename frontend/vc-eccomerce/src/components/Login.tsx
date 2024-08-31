import React from 'react';

function Login() {
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
              <form>
                <div className="relative mb-6">
                  <input
                    type="text"
                    className="peer block w-full rounded border border-gray-300 bg-transparent px-3 py-2.5 leading-tight outline-none transition duration-200 ease-linear focus:border-blue-500 focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    id="email"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 top-0 transform -translate-y-1/2 text-gray-500 transition-all duration-200 ease-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.85] dark:text-gray-400"
                  >
                    Email address
                  </label>
                </div>

                <div className="relative mb-6">
                  <input
                    type="password"
                    className="peer block w-full rounded border border-gray-300 bg-transparent px-3 py-2.5 leading-tight outline-none transition duration-200 ease-linear focus:border-blue-500 focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    id="password"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-3 top-0 transform -translate-y-1/2 text-gray-500 transition-all duration-200 ease-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.85] dark:text-gray-400"
                  >
                    Password
                  </label>
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

                <a
                  className="mb-3 flex w-full items-center justify-center rounded bg-[#3b5998] px-7 py-3 text-center text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-[#365492] focus:bg-[#365492] focus:outline-none focus:ring-2 focus:ring-[#3b5998] focus:ring-offset-2 active:bg-[#2d4373]"
                  href="#!"
                  role="button"
                >
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="h-4 w-4 fill-current"
                    >
                      <path
                        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                      />
                    </svg>
                  </span>
                  Continue with Facebook
                </a>
                <a
                  className="mb-3 flex w-full items-center justify-center rounded bg-[#55acee] px-7 py-3 text-center text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-[#3ea1ec] focus:bg-[#3ea1ec] focus:outline-none focus:ring-2 focus:ring-[#55acee] focus:ring-offset-2 active:bg-[#2795e9]"
                  href="#!"
                  role="button"
                >
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="h-4 w-4 fill-current"
                    >
                      <path
                        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                      />
                    </svg>
                  </span>
                  Continue with X
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
