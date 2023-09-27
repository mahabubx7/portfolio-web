import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/navbar.module.css";
import angelLicon from "@/assets/angelist.svg";
import skypeIcon from "@/assets/skype-svgrepo-com.svg";

export default function Navbar() {
  return (
    <>
      <button type="button" id="hamb">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <nav className={styles.navbar}>
        <div className="container">
          <div className={styles.nav_container}>
            <div className={styles.left_part}>
              <ul>
                <li>
                  <Link href="#top" className="text-2xl mr-5 logo_text">
                    Mahabub<span className="logo_dot text-3xl">.</span>
                  </Link>
                </li>
                <li>
                  <Link href="#projects">Portfolio</Link>
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

              <Link href="https://wellfound.com/u/mahabubx7" target="_blank">
                <Image
                  src={angelLicon}
                  width={28}
                  className={styles.icon_img}
                  height={28}
                  alt="icon-angel-list"
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

              <Link
                href="https://join.skype.com/invite/qt7xglGbLLbh"
                target="_blank"
              >
                <Image
                  className={styles.icon_img}
                  src={skypeIcon}
                  width={28}
                  height={28}
                  alt="icon-skype"
                />{" "}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
