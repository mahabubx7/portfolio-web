/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
// import Logo from "@/assets/logo.png";
import Link from "next/link";
// import Github from "@/assets/github.png";
// import INsta from "@/assets/insta.png";
// import Fb from "@/assets/fb.png";
import styles from "./styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.nav_container}>
          <div className={styles.left_part}>
            <ul>
              <li>
                <Link href="#projects">Project</Link>
              </li>
              <li>
                <Link href="https://blog.mahabub.top" target="_blank">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={styles.right_part}>
            <Link href="https://github.com/mahabubx7" target="_blank">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="icon-github"
                width={28}
                height={28}
                className={styles.icon_img}
              />
            </Link>

            <Link href="https://linkedin.com/in/mahabubx7" target="_blank">
              <Image
                className={styles.icon_img}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                width={28}
                height={28}
                alt="icon-linkedin"
              />{" "}
            </Link>

            <Link href="https://twitter.com/mahabub__7" target="_blank">
              <Image
                className={styles.icon_img}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
                width={28}
                height={28}
                alt="icon-twitter"
              />{" "}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
