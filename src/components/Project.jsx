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
}) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.img_container}>
          <Image width={960} height={640} src={imgUrl} alt={imgAlt} />
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
              <button className={styles.btn}> Details</button>
            </Link>
            <Link href={preview} target="_blank">
              <button className={styles.btn}> View </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
