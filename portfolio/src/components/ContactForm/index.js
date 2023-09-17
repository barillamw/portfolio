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
      <label htmlFor="email">
        Email Address
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