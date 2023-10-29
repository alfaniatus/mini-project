import React, { useState } from 'react';

const Contact= () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Data yang tersimpan:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <div className="container mt-50">
      <h2 className='text-center'>Hubungi Kami Disini</h2>
      <div className="row">
        <div className="col-md-4 order-md-2">
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="firstName">First Name</label>
              <input type="text" className="form-control" id="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className="form-control" id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="4" value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-dark">Submit</button>
          </form>
        </div>
        <div className="col-md-5 order-md-1">
          <img src='https://img.freepik.com/free-vector/get-touch-concept-illustration_114360-6504.jpg?w=740&t=st=1696781406~exp=1696782006~hmac=9e22d8e877db86691a1b985a3e6aee4db58d888e337c08a6fb04ee3ddcaf4be6' alt='contact' style={{ width: '450px', height: 'auto', display: 'flex', marginLeft: '10%' }} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
