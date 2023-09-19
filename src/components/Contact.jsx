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
          style={{
            display: "inline-flex",
            gap: "0.75rem",
            textTransform: "uppercase",
            padding: "0.8rem 2rem",
          }}
        >
          <span>send</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </span>
        </button>
      </form>
    </section>
  );
}
