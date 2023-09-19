import React from "react";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Link from "next/link";

export default function page() {
  const currentYear = new Date().getFullYear();
  return (
    <main>
      <Navbar />
      <div className="container">
        <Banner />
        <h2 className={styles.title}> My Works</h2>
        <Projects />

        <h2 className={styles.title}> Contact Me</h2>
        <Contact />
      </div>

      <footer className={styles.footer}>
        <div className="container">
          <p>
            {" "}
            {currentYear === 2023 ? "© 2023;" : `© 2023 - ${currentYear}`}
          </p>
          <p>
            All rights reserved & copyrighted by{" "}
            <Link target="_blank" href="https://github.com/mahabubx7">
              @mahabubx7
            </Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
