/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "./styles/banner.module.css";
import React from "react";
import Image from "next/image";
import myImg from "@/assets/me_web.png";
import Link from "next/link";

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.first_container}>
        <Image src={myImg} alt="profile" className={styles.my_image} />
      </div>
      <div className={styles.second_container}>
        <div className={styles.social_links}>
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
        <h1 className={styles.h1_heading}>Software Developer</h1>
        <i>&gt;&gt; Remote 🌏 :: 💼 Full-time &lt;&lt;</i>
        <div className={styles.img_container}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
        </div>
        <div className={styles.txt_container}>
          A passionate full-stack web-developer from Bangladesh, who loves
          Remote/W.F.H lifestyle and making solutions by code. Looking for a
          full-time (remote) or freelance contract.
        </div>
        <div>
          <Link
            target="_blank"
            className={styles.btn}
            href="https://docs.google.com/document/d/1RwQf6YPAwbUZITOUy-LbyOMXTo6btFslvfI8iLXLnU8/edit?usp=sharing"
          >
            get resume
          </Link>
        </div>
      </div>
    </div>
  );
}
