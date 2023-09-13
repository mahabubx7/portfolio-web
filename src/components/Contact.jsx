"use client";

import { useForm, ValidationError } from "@formspree/react";
import styles from "./styles/contact.module.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("xzblvdzl");

  if (state.succeeded) {
    return (
      <p className={styles.sent_success}>Thanks, Mail sent successfully!</p>
    );
  }

  return (
    <section id="contact" className={styles.contact_area}>
      <h2 className={styles.heading}>Get in touch</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your name"
          required
          autocomplete={false}
        />
        <input
          name="email"
          type="email"
          placeholder="Your email-address"
          required
          autocomplete={false}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          name="message"
          placeholder="Write your message ..."
          required
          autocomplete={false}
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          className={styles.form_submit}
          disabled={state.submitting}
        >
          send
        </button>
      </form>
    </section>
  );
}
