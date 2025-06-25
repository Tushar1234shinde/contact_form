import React, { useState } from 'react';

function ContactForm({ addUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-xl border border-purple-200 transition-transform transform hover:scale-105">
      <div className="mb-4">
        <label className="block text-sm font-semibold text-purple-700 mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-purple-700 mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-purple-700 mb-1">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
        />
      </div>
      <button type="submit" className="bg-purple-600 text-white px-5 py-2 rounded shadow hover:bg-purple-700 transition-colors">
        ➕ Add Contact
      </button>
    </form>
  );
}

export default ContactForm;