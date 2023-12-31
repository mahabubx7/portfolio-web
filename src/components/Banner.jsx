import styles from "./styles/banner.module.css";
import Image from "next/image";
import myImg from "@/assets/me_web.webp";
import angelLicon from "@/assets/angelist.svg";
import skypeIcon from "@/assets/skype-svgrepo-com.svg";
import Link from "next/link";

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.first_container}>
        <Image
          src={myImg}
          alt="profile"
          priority={true}
          className={styles.my_image}
          placeholder="blur"
        />
        <div
          className={styles.img_elements}
          style={{
            top: "1rem",
            left: "-1.5rem",
            animation: "spinSlow 15s infinite",
          }}
        >
          <Image
            alt="skill-icon"
            width={80}
            height={80}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            priority={true}
          />
        </div>

        <div
          className={styles.img_elements}
          style={{
            bottom: "-1rem",
            right: "-0.3rem",
            animation: "bumping 7s infinite",
          }}
        >
          <Image
            alt="skill-icon"
            width={80}
            height={80}
            priority={true}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
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
          <Image
            alt="skill-icon"
            width={80}
            height={80}
            priority={true}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg"
          />
        </div>

        <div
          className={styles.img_elements}
          style={{
            bottom: "0",
            left: "-0.3rem",
            animation: "bumping 5s infinite",
          }}
        >
          <Image
            alt="skill-icon"
            width={80}
            height={80}
            priority={true}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
          />
        </div>

        <div
          className={styles.img_elements}
          style={{
            bottom: "-1.5rem",
            left: "calc(15% + 20px)",
            animation: "bumpingSkew 5s infinite",
          }}
        >
          <Image
            alt="skill-icon"
            width={80}
            height={80}
            priority={true}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
          />
        </div>

        <div
          className={styles.img_elements}
          style={{
            bottom: "-1.25rem",
            right: "calc(18% + 30px)",
            animation: "bumping 5s infinite",
          }}
        >
          <Image
            alt="skill-icon"
            width={80}
            height={80}
            priority={true}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          />
        </div>

        <div
          className={styles.img_elements}
          style={{
            bottom: "calc(50% - 20px)",
            right: "-2rem",
            animation: "bumping 5s infinite",
          }}
        >
          <Image
            alt="skill-icon"
            width={80}
            height={80}
            priority={true}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          />
        </div>

        <div
          className={styles.img_elements}
          style={{
            bottom: "calc(50% - 20px)",
            left: "-2.75rem",
            animation: "bumping 5s infinite",
          }}
        >
          <Image
            alt="skill-icon"
            width={80}
            height={80}
            priority={true}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />
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
              priority={true}
              className={styles.icon_img}
            />
          </Link>

          <Link href="https://linkedin.com/in/mahabubx7" target="_blank">
            <Image
              className={styles.icon_img}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              width={28}
              height={28}
              priority={true}
              alt="icon-linkedin"
            />{" "}
          </Link>

          <Link href="https://wellfound.com/u/mahabubx7" target="_blank">
            <Image
              src={angelLicon}
              width={28}
              className={styles.icon_img}
              height={28}
              priority={true}
              alt="icon-angel-list"
            />{" "}
          </Link>

          <Link href="https://twitter.com/mahabub__7" target="_blank">
            <Image
              className={styles.icon_img}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
              width={28}
              height={28}
              priority={true}
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
        <h1 className={styles.h1_heading}>Full-Stack Developer</h1>
        <p style={{ display: "block", marginBottom: "1rem", color: "#afafaf" }}>
          <b>Tech-stack: </b>Node.js, React, Ruby on Rails, Postgres & more.
        </p>
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
          Hi, I&apos;m <b>Mahabub</b>✋. A passionate Full-Stack Developer based
          in 📌Bangladesh.
        </div>
        <div className={styles.btn_holder}>
          <Link
            target="_blank"
            className={styles.btn}
            href="https://drive.google.com/uc?export=download&id=1d1d3gs_iolWPLuEvAKg88YdWSXnx5_jw"
          >
            <span>get resume</span>
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
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
