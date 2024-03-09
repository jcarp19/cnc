import React from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faComment,
  faPhoneFlip,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(e.target);

    emailjs.sendForm(
      "service_fa0q28b",
      "template_trntik9",
      // e.target,
      form.current,
      "oM1yzTDkzEL3QkFBe"
    );
    // return redirect("/thank-you");
    console.log("form submitted");
    navigate("/thank-you");
  };

  return (
    <section className='contact'>
      <h1>Get In Touch</h1>
      <p>
        Have questions, feedback, or just want to say hello? We’d love to hear
        from you! Feel free to reach out using the form below or drop us an
        email at{" "}
        <a className='a-link' href='mailto:jeff@cnctoolingsolutions.com'>
          jeff@cnctoolingsolutions.com
        </a>
        . Our team is here to assist you.
      </p>
      <form onSubmit={sendEmail} className='form' ref={form}>
        <div className='form__group'>
          <div className='form__icon'>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <input
            id='name'
            name='form_name'
            type='text'
            className='form__input'
            placeholder='Full Name'
            required
          />
          <label htmlFor='name' className='form__label'>
            Full Name
          </label>
        </div>
        <div className='form__group'>
          <div className='form__icon'>
            <FontAwesomeIcon icon={faAt} />
          </div>
          <input
            id='email'
            name='form_email'
            type='email'
            className='form__input'
            placeholder='Email Address'
            required
          />
          <label htmlFor='email' className='form__label'>
            Email Address
          </label>
        </div>
        <div className='form__group'>
          <div className='form__icon'>
            <FontAwesomeIcon icon={faPhoneFlip} />
          </div>
          <input
            id='phone'
            name='form_phone'
            type='phone'
            className='form__input'
            placeholder='Phone Number'
          />
          <label htmlFor='phone' className='form__label'>
            Phone Number
          </label>
        </div>
        <div className='form__group'>
          <div className='form__icon'>
            <FontAwesomeIcon icon={faComment} />
          </div>
          <input
            id='comments'
            name='form_comments'
            type='textarea'
            className='form__input'
            placeholder='Comments'
          />
          <label htmlFor='comments' className='form__label'>
            Comments
          </label>
        </div>
        <div className='form__group'>
          <button className='button__btn'>Submit</button>
        </div>
      </form>
      <section className='contact__contacts'>
        <h2>Michigan</h2>
        <div className='rep'>
          <h3>Jeff Schmidt</h3>
          <p>
            Manufacturer’s Representative
            <br />
            <span className='bold'>Cell</span>:{" "}
            <a href='tel:2488905625' className='link'>
              248-890-5625
            </a>
            <br />
            <span className='bold'>Email</span>:{" "}
            <a href='mailto:Jeff@cnctoolingsolutions.com' className='link'>
              Jeff@Ccnctoolingsolutions.com
            </a>
          </p>
        </div>
        <h2>Ohio</h2>
        <div className='rep'>
          <h3>Mike Klenotic</h3>
          <p>
            Manufacturer’s Representative
            <br />
            <span className='bold'>Cell</span>:{" "}
            <a href='tel:4405543680' className='link'>
              440-554-3680
            </a>
            <br />
            <span className='bold'>Email</span>:{" "}
            <a href='mailto:Mike.klenotic@gmail.com' className='link'>
              Mike.klenotic@gmail.com
            </a>
          </p>
        </div>
      </section>
    </section>
  );
};

export default Contact;
