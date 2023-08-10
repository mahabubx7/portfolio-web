import styles from "./styles/contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact_area}>
      <h2 className={styles.heading}>Get in touch</h2>

      <form className={styles.form}>
        <input
          name="name"
          placeholder="Your name"
          required
          autocomplete={false}
        />
        <input
          name="email"
          placeholder="Your email-address"
          required
          autocomplete={false}
        />
        <textarea
          name="message"
          placeholder="Write your message ..."
          required
          autocomplete={false}
        ></textarea>

        <button type="submit" className={styles.form_submit}>
          send
        </button>
      </form>
    </section>
  );
}
