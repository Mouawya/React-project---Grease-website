import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { handleSubmit, register, formState, reset } = useForm();
  const form = useRef();
  const sendEmail = () => {
    emailjs
      .sendForm(
        "gmail",
        "template_n2yzlap",
        form.current,
        "user_UlHIRsXXartx7XUiTMCFe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
    setIsSubmitted(true);
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit(sendEmail)} ref={form}>
        <label>First Name</label>
        <input
          type="text"
          placeholder="Enter your first name..."
          {...register("firstName", {
            required: "please insert your first name!",
          })}
        />
        {formState.errors.firstName && (
          <p>{formState.errors.firstName.message}</p>
        )}

        <label>Last Name</label>
        <input
          type="text"
          placeholder="Enter your last name..."
          {...register("lastName", {
            required: "please insert your last name!",
          })}
        />
        {formState.errors.lastName && (
          <p>{formState.errors.lastName.message}</p>
        )}

        <label>E-mail</label>
        <input
          type="text"
          placeholder="Enter your email address..."
          {...register("email", {
            required: "please insert your email address!",
          })}
        />
        {formState.errors.email && <p>{formState.errors.email.message}</p>}

        <label>Message</label>
        <textarea
          placeholder="Type your message..."
          style={{ height: "150px" }}
          {...register("message", {
            required: "please type something to send!",
          })}
        />
        {formState.errors.message && <p>{formState.errors.message.message}</p>}

        <input type="submit" value="send" className="btn-send" />
      </form>

      {isSubmitted === true && <p>We have received your message!</p>}
    </div>
  );
};

export default ContactForm;
