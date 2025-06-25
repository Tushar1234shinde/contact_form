import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-800 animate-fade-in">Contact Cards Mini Project</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        <ContactForm addUser={addUser} />
        <UserList users={users} />
      </div>
    </div>
  );
}

export default App;