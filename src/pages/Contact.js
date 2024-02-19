import React from "react";

const Contact = () => {
  return (
    <section className='content'>
      <h1>Contact Us</h1>
      <p>
        Have questions, feedback, or just want to say hello? We’d love to hear
        from you! Feel free to reach out using the form below or drop us an
        email at jeff@cnctoolingsolutions.com. Our team is here to assist you.
      </p>
      <form action='' className='contact__form'>
        <input type='text' name='' id='' placeholder='Name' />
        <input type='text' name='' id='' placeholder='Email Address' />
        <input type='text' name='' id='' placeholder='Phone Number' />
        <input
          type='textarea'
          name=''
          id=''
          placeholder='Questions or Comments'
        />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default Contact;
