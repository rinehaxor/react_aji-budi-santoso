import React, { useState } from 'react';

export default function () {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`First name : ${firstName}, Last name :${lastName}, Email : ${email}, Message :${message}`);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <>
      <contact>
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <h1 className="mb-4">Contact Us</h1>
              <p className="fs-4">Anda datap menghubungi kamu dengan mengisi formulir disamping semoga membatu.</p>
            </div>
            <div className="col">
              <form id="contact_form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="name">First Name</label>
                      <input type="text" className="form-control" id="firstName" onChange={handleFirstNameChange} value={firstName} placeholder="Enter your name" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="name">Last Name</label>
                      <input type="text" className="form-control" id="lastName" onChange={handleLastNameChange} value={lastName} placeholder="Enter your name" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" rows={5} value={message} onChange={handleMessageChange} defaultValue={''} />
                </div>
                <button type="submit" onclick="submitForm()" className="btn btn-primary mt-4 mb-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </contact>
    </>
  );
}
