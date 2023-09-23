import styles from "./styles/about.module.css";

export default function About() {
  return (
    <div className={styles.container} id="about">
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
            <summary>
              <small>
                <b className="fw-500">English</b>
                <span className="deem-sm"> (Fluent)</span>
              </small>
            </summary>
            <summary>
              <small>
                <b className="fw-500">Bangla/Bengali</b>
                <span className="deem-sm"> (Native)</span>
              </small>
            </summary>
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
            <summary>
              <small>
                <b className="fw-500">Git, GitHub, Code Review</b>
              </small>
            </summary>
            <summary>
              <small>
                <b className="fw-500">Linux</b>
                <span className="deem-xm"> (Ubuntu)</span>
              </small>
              <small>
                <b className="fw-500">, Docker</b>
              </small>
            </summary>
            <summary>
              <small>
                <b className="fw-500">RESTful APIs</b>
                <span className="deem-xm fw-500"> (JSON)</span>
              </small>
              <small>
                <b className="fw-500">, GraphQL</b>
                <span className="deem-xm fw-500"> (Apollo)</span>, etc.
              </small>
            </summary>
          </p>
        </aside>

        <aside className={styles.card}>
          <h3>Others</h3>
          <p>
            <b>Soft-Skills: </b> Pair-Programming, Communication, Team-work.
          </p>
          <p>
            <b>Experience: </b>
            <summary>
              <small>
                <b>Full Stack Web Developer</b> <br /> Self-Employed | Freelance
              </small>
              <span className="deem-xm"> (Dec 2021 - Present)</span>
            </summary>
            <summary>
              <small>
                <b>Web Developer</b> <br />
                Fiverr | Freelance
              </small>
              <span className="deem-xm"> (May 2018 - Aug 2018)</span>
            </summary>
          </p>
          <p>
            <b>Education: </b>
            <summary>
              <small>
                <b>Remote Full-Stack Web Development</b> <br /> Microverse
                <span className="deem-xm"> (Feb 2023 - Sep 2023)</span>
              </small>
            </summary>
            <summary>
              <small>
                <b>Computer Science and Engineering (C.S.E)</b> <br />
                Green University of BD
              </small>
              <span className="deem-xm"> (May 2021 - Present)</span>
            </summary>
          </p>
        </aside>
      </div>
    </div>
  );
}
