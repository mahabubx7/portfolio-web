import styles from "./styles/about.module.css";

export default function About() {
  return (
    <div className={styles.container} id="about">
      <div className={styles.about_summary}>
        <div className={styles.summary_card}>
          <h3>1+</h3>
          <p>Years of experience in Remote/W.F.H.</p>
        </div>

        <div className={styles.summary_card}>
          <h3>12+</h3>
          <p>projects has been completed.</p>
        </div>

        <div className={styles.summary_card}>
          <h3>300+</h3>
          <p>Hours spent doing Pair-Programming.</p>
        </div>

        <div className={styles.summary_card}>
          <h3>15+</h3>
          <p>Happy clients during Freelance or contract</p>
        </div>
      </div>
      <div className={styles.about_info}>
        <aside className={styles.card}>
          <h3>Myself</h3>
          <p>
            <b>Name: </b> Md. Mahabub Alam.
          </p>
          <p>
            <b>Country: </b> Bangladesh.<span className="deem-sm"> (🇧🇩)</span>
          </p>
          <p>
            <b>Nationality: </b> Bangladeshi.
          </p>
          <p>
            <b>Gender: </b> Male.<span className="deem-sm"> (He/Him)</span>
          </p>
          <p>
            <b>Marital Status: </b> Unmarried.
          </p>
          <p>
            <b>Age: </b> 24<span className="deem-sm"> (DoB: June 03)</span>
          </p>
          <p>
            <b>Blood Group: </b> A (+ve).
          </p>
          <p>
            <b>Height: </b> 5&apos;<span className="deem-xm"> (feet)</span>{" "}
            7.5&quot;<span className="deem-xm"> (inches)</span>
          </p>
          <p>
            <b>Languages: </b>
            <span>
              <small>
                <b className="fw-500">English</b>
                <span className="deem-sm"> (Fluent)</span>
              </small>
            </span>
            <span>
              <small>
                <b className="fw-500">Bangla/Bengali</b>
                <span className="deem-sm"> (Native)</span>
              </small>
            </span>
          </p>
        </aside>

        <aside className={styles.card}>
          <h3>Core Skills</h3>
          <p>
            <b>Pr. Languages: </b> JS/TS, Ruby, Python & Java/C.
          </p>
          <p>
            <b>Front-End: </b> HTML/CSS/SCSS, TailwindCSS, React{""}
            <span className="deem-xm"> (Redux/RTK & Query)</span>, Next.js
            <span className="deem-xm"> (v13)</span>, Vite & Webpack.
          </p>
          <p>
            <b>Back-End: </b> Node.js/Express.js, Ruby on Rails{""}
            <span className="deem-xm"> (v7)</span>, Nest.js.
          </p>
          <p>
            <b>Databases: </b> SQL/PSQL, PostgreSQL, MongoDB, Neo4j.
          </p>
          <p>
            <b>Tools & more: </b>
            <span>
              <small>
                <b className="fw-500">Git, GitHub, Code Review</b>
              </small>
            </span>
            <span>
              <small>
                <b className="fw-500">Linux</b>
                <span className="deem-xm"> (Ubuntu)</span>
              </small>
              <small>
                <b className="fw-500">, Docker</b>
              </small>
            </span>
            <span>
              <small>
                <b className="fw-500">RESTful APIs</b>
                <span className="deem-xm fw-500"> (JSON)</span>
              </small>
              <small>
                <b className="fw-500">, GraphQL</b>
                <span className="deem-xm fw-500"> (Apollo)</span>, etc.
              </small>
            </span>
          </p>
        </aside>

        <aside className={styles.card}>
          <h3>Others</h3>
          <p>
            <b>Soft-Skills: </b> Pair-Programming, Communication, Team-work.
          </p>
          <p>
            <b>Experience: </b>
            <span>
              <small>
                <b>Full Stack Web Developer</b> <br /> Self-Employed | Freelance
              </small>
              <span className="deem-xm"> (Dec 2021 - Present)</span>
            </span>
            <span>
              <small>
                <b>Web Developer</b> <br />
                Fiverr | Freelance
              </small>
              <span className="deem-xm"> (May 2018 - Aug 2018)</span>
            </span>
          </p>
          <p>
            <b>Education: </b>
            <span>
              <small>
                <b>Remote Full-Stack Web Development</b> <br /> Microverse
                <span className="deem-xm"> (Feb 2023 - Sep 2023)</span>
              </small>
            </span>
            <span>
              <small>
                <b>Computer Science and Engineering (C.S.E)</b> <br />
                Green University of BD
              </small>
              <span className="deem-xm"> (May 2021 - Present)</span>
            </span>
          </p>
        </aside>
      </div>
    </div>
  );
}
