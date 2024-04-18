'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // Adjust the import path based on your project structure

const ManageSponsorPage: React.FC = () => {
  // State for storing advertisement input
  const [advertisement, setAdvertisement] = useState('');

  // State for storing selected sponsor contact
  const [selectedContact, setSelectedContact] = useState('');

  // State for storing quotes from sponsors
  const [sponsorReplies, setSponsorReplies] = useState<{ sponsor: string; status: string; message: string }[]>([]);

  // Dummy data for contacts
  const contacts = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
    { id: '3', name: 'Alice Johnson', email: 'alice@example.com' },
  ];

  // Function to handle sending advertisement
  const sendAdvertisement = () => {
    // Simulate a delay of 15 seconds before generating the sponsor's response
    setTimeout(() => {
      // Dummy logic to generate sponsor's response
      const status = Math.random() < 0.5 ? 'Accepted' : 'Rejected'; // Randomly generate accepted or rejected status
      const sponsorName = contacts.find(contact => contact.email === selectedContact)?.name || 'Unknown Sponsor';
      const message = `${sponsorName} ${status} the advertisement "${advertisement}"`;
      // Update sponsorReplies with sponsor's response
      setSponsorReplies([...sponsorReplies, { sponsor: sponsorName, status, message }]);
      // Clear advertisement input
      setAdvertisement('');
    }, 15000); // 15 seconds delay
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Manage Sponsor</h1>

      {/* Advertisement input */}
      <div className="mb-4">
        <label htmlFor="advertisement" className="block text-gray-700">Enter Advertisement:</label>
        <textarea id="advertisement" className="w-full h-20 border border-gray-300 rounded p-2" value={advertisement} onChange={(e) => setAdvertisement(e.target.value)} />
      </div>

      {/* Contact list (dummy) */}
      <div className="mb-4">
        <label htmlFor="contact" className="block text-gray-700">Select Contact:</label>
        <select id="contact" className="w-full border border-gray-300 rounded p-2" value={selectedContact} onChange={(e) => setSelectedContact(e.target.value)}>
          <option value="">Select Contact</option>
          {contacts.map((contact) => (
            <option key={contact.id} value={contact.email}>{contact.name}</option>
          ))}
        </select>
      </div>

      {/* Button to send advertisement */}
      <Button onClick={sendAdvertisement} className="button hidden sm:flex">Send Advertisement</Button>

      {/* Sponsor replies */}
      <div>
        <h2 className="text-xl font-bold mb-2">Sponsor Replies:</h2>
        <ul>
          {sponsorReplies.map((reply, index) => (
            <li key={index} className="mb-2">
              <strong>Status:</strong> {reply.status} - <strong>{reply.sponsor}:</strong> {reply.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageSponsorPage;
