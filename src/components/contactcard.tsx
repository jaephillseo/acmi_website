import React from 'react';

interface ContactCardProps {
  title: string;
  address: string;
  phone?: string;  // Optional property
  email?: string;  // Optional property
}

const ContactCard: React.FC<ContactCardProps> = ({ title, address, phone, email }) => (
  <div className='card card-bordered card-compact lg:card-normal bg-base-100 shadow-xl p-5 my-2.5 lg:my-0'>
    <div className='card-body'>
      <h2 className='card-title'>{title}</h2>
      <p>{address}</p>
      {phone && <p><strong>Phone:</strong> {phone}</p>}
      {email && <p><strong>Email:</strong> {email}</p>}
    </div>
  </div>
);

export default ContactCard;