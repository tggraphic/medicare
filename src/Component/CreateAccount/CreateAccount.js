import React from 'react';
import image from ".././../Resources/Images/image 20.png"

function CreateAccount() {
  // Replace this with the actual image URL you want to use
  const imageUrl = 'https://via.placeholder.com/800x800';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl flex">
        <form className="w-1/2 pr-8 animate__animated animate__fadeIn animate__faster">
          <h2 className="text-2xl font-semibold mb-4">Create Account</h2>
          <p className="mb-4 text-gray-600">Fill in the form below:</p>
          {/* ... Account form fields here ... */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-semibold mb-2">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600"
                required
              />
              <span className="ml-2 text-gray-700 text-sm font-semibold">
                I agree to the <a href="#" className="text-indigo-600">terms and conditions</a>.
              </span>
            </label>
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Account
            </button>
          </div>
        </form>
        <div className="w-1/2 bg-gray-300 relative">
          <img
            src={imageUrl}
            alt="Profile"
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
