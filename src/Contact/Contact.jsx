import React from 'react'
import Navbar from '../navbar/Navbar'
import { send } from 'emailjs-com'
import { useState } from 'react'

const Contact = () => {
  const [toSend, setToSend] = useState({
    fname: '',
    message: '',
    send: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'shlok',
      'template_kzm4zmn',
      toSend,
      'inUpslVBetCXtEXx_c'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <>
    <div className="contact">
        <Navbar/>
        <h1></h1>
        <form onSubmit={onSubmit}>
            <input
              type='text'
              name='fname'
              placeholder='Enter your name'
              value={toSend.fname}
              onChange={handleChange}
            />
            
            <input
              type='text'
              name='message'
              placeholder='Your message'
              value={toSend.message}
              onChange={handleChange}
            />
            <input
              type='text'
              name='send'
              placeholder='Enter your email ID'
              value={toSend.send}
              onChange={handleChange}
            />
           <button type='submit'>Submit</button>
        </form>
    </div>
</>
  )
}

export default Contact