"use client";

import { useForm, ValidationError } from "@formspree/react";
import styles from "./styles/contact.module.css";
import Link from "next/link";

export default function Contact() {
  const [state, handleSubmit] = useForm("xzblvdzl");

  if (state.succeeded) {
    return (
      <p className={styles.sent_success}>Thanks, Mail sent successfully!</p>
    );
  }

  return (
    <section id="contact" className={styles.contact_area}>
      <div className="container">
        <aside className={styles.contact_info}>
          <h3>How to reach me.</h3>
          <ul>
            <li>
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
                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                />
              </svg>
              <Link href="mailto:mahabubx7@gmail.com">mahabubx7@gmail.com</Link>
            </li>
            <li>
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
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>

              <Link href="https://wa.me/8801311052448">
                WhatsApp <span className="deem-sm">(+880-1311-052-448)</span>
              </Link>
            </li>
            <li>
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
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <address>
                Jashore, 7450 <br />
                Khulna, Bangladesh
              </address>
            </li>
          </ul>
        </aside>

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
      </div>
    </section>
  );
}
