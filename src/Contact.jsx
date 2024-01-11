import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {ToastContainer, toast} from 'react-toastify'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ip4y23r', 'template_07zwr0k', form.current, 'DrdaG-7ZYfFdU_KJt')
      .then((result) => {
          console.log(result.text);
         
      }, (error) => {
          console.log(error.text);
      });
  };
  // let handleChange=()=>{
  //   toast.success("Message is submitted !! Thankyou ")
  // }
  const notify = () => toast.success("Message sent Successfully");


  return (
    <div className='contact'>
        <h1>Contact Me</h1>
    <form ref={form} onSubmit={sendEmail} style={{textAlign:"center"}}>
   
      <label>Name : </label>
      <input type="text" name="from_name" /><br></br><br></br>
      <label>Email : </label>
      <input type="email" name="from_name" /><br></br><br></br>
      <label>Message : </label>
      <textarea name="message" /><br></br><br></br>
     
      <button className='con' onClick={notify}> Submit  </button>
     <ToastContainer/>
    </form>
    </div>
  );
};

export default Contact;