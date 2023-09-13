/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "./styles/banner.module.css";
import React from "react";
import Image from "next/image";
import myImg from "@/assets/me_web.png";
import angelLicon from "@/assets/angelist.svg";
import Link from "next/link";

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.first_container}>
        <Image src={myImg} alt="profile" className={styles.my_image} />
        <div
          className={styles.img_elements}
          style={{
            top: "1rem",
            left: "-1.5rem",
            animation: "spinSlow 15s infinite",
          }}
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        </div>

        <div
          className={styles.img_elements}
          style={{
            bottom: "-1rem",
            right: "-0.3rem",
            animation: "bumping 7s infinite",
          }}
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
        </div>

        <div
          className={styles.img_elements}
          style={{
            top: "0",
            right: "-0.3rem",
            transform: "skewY(-0.06turn)",
            animation: "bumpingSkew 5s infinite",
          }}
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" />
        </div>

        <div
          className={styles.img_elements}
          style={{
            bottom: "0",
            left: "-0.3rem",
            animation: "bumping 5s infinite",
          }}
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
        </div>

        <div
          className={styles.img_elements}
          style={{
            bottom: "-1.5rem",
            left: "calc(15% + 20px)",
            animation: "bumpingSkew 5s infinite",
          }}
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
        </div>

        <div
          className={styles.img_elements}
          style={{
            bottom: "-1.25rem",
            right: "calc(18% + 30px)",
            animation: "bumping 5s infinite",
          }}
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
        </div>

        <div
          className={styles.img_elements}
          style={{
            bottom: "calc(50% - 20px)",
            right: "-2rem",
            animation: "bumping 5s infinite",
          }}
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
        </div>

        <div
          className={styles.img_elements}
          style={{
            bottom: "calc(50% - 20px)",
            left: "-2.75rem",
            animation: "bumping 5s infinite",
          }}
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
        </div>
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
        </div>
        <h1 className={styles.h1_heading}>Software Engineer</h1>
        <i>
          <span className="deem">&gt;&gt;</span> Remote 🌏 :: 💼 Full-time{" "}
          <span className="deem">&lt;&lt;</span>
        </i>
        {/* <div className={styles.img_container}>
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
        </div> */}
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
