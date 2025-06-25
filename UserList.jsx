import React from 'react';
import ContactCard from './ContactCard';

function UserList({ users }) {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {users.map((user, index) => (
        <ContactCard key={index} user={user} />
      ))}
    </div>
  );
}

export default UserList;