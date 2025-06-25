import React from 'react';

function ContactCard({ user }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-purple-100 hover:shadow-lg transform transition-transform hover:scale-105">
      <h2 className="text-xl font-bold text-purple-800 mb-2">{user.name}</h2>
      <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
      <p className="text-gray-700"><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
}

export default ContactCard;