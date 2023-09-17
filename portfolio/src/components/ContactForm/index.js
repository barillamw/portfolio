import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import { Button, ButtonType } from '../Button'

import * as classes from './style.module.css';

export function ContactForm() {
  const [state, handleSubmit] = useForm("mvojqgzb");
  if (state.succeeded) {
      return <p>Thank you for your email!</p>;
  }
  return (
    <div className = {classes.div_email} >
      <form onSubmit={handleSubmit} className={classes.Form}>
      <label htmlFor="firstName">
        First name
      </label>
      <input
        id="firstName"
        type="text" 
        name="firstName"
      />

      <div className={classes.break_flex_horizontal} />
      <label htmlFor="lastName">
        Last Name
      </label>
      <input
        id="lastName"
        type="Text" 
        name="lastName"
      />

      <div className={classes.break_flex} />
      <label htmlFor="email">
        Your Email
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />

      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <div className={classes.break_flex} />
    <label htmlFor="message">
        Message
      </label>
      <div className={classes.break_flex} />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <div className={classes.break_flex} />
      <button type="submit"  className={classes.Button} disabled={state.submitting}>
        Submit
      </button>
      
    </form>
    </div>
  );
}