import React from "react";

const Contact = () => {
  return (
    <section className='content'>
      <h1>Get In Touch</h1>
      <p>
        Have questions, feedback, or just want to say hello? We’d love to hear
        from you! Feel free to reach out using the form below or drop us an
        email at jeff@cnctoolingsolutions.com. Our team is here to assist you.
      </p>
      <form action='#' class='form'>
        <div class='form__group'>
          <input
            id='name'
            type='text'
            class='form__input'
            placeholder='Full Name'
            required
          />
          <label for='name' class='form__label'>
            Full Name
          </label>
        </div>
        <div class='form__group'>
          <input
            id='email'
            type='email'
            class='form__input'
            placeholder='Email Address'
            required
          />
          <label for='email' class='form__label'>
            Email Address
          </label>
        </div>
        <div class='form__group'>
          <button className='button__btn'>Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
