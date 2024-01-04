import styles from "./styles/project.module.css";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Project({
  imgUrl,
  imgAlt,
  heading,
  text,
  preview,
  details,
  tags,
  optimize,
}) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.img_container}>
          <Image
            width={960}
            height={640}
            src={imgUrl}
            alt={imgAlt}
            unoptimized={optimize ? true : undefined}
          />
        </div>
        <div className={styles.text_container}>
          <h2 className={styles.project_title}> {heading}</h2>
          <p>{text}</p>
          <ul className={styles.tags}>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          <p className={styles.action_btns}>
            <Link href={details} target="_blank">
              <button className={styles.btn}>
                <span>Details</span>
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
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </button>
            </Link>
            <Link href={preview} target="_blank">
              <button className={styles.btn}>
                <span>Preview</span>
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
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
