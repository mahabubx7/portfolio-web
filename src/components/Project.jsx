import styles from "./styles/project.module.css";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Project({ imgUrl, imgAlt, heading, text }) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.img_container}>
          <Image src={imgUrl} alt={imgAlt} />
        </div>
        <div className={styles.text_container}>
          <h2> {heading}</h2>
          <p>{text}</p>
          <p className={styles.action_btns}>
            <Link href={"https://github.com/mahabubx7"}>
              <button className={styles.btn}> Source Code</button>
            </Link>
            <Link href={"https://mahabubx7.github.io/portfolio"}>
              <button className={styles.btn}> View </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
