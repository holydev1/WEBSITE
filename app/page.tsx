import Link from 'next/link';
import Illustration from './illustration';
import { guilditeSummary } from './projects/project-content';
// A CSS Module exposes its scoped classes as properties, such as styles.intro.
import styles from './home.module.css';

// Next.js renders the default export of app/page.tsx at the home URL (/).
export default function HomePage() {
  // The fragment (<>...</>) groups siblings without adding an HTML wrapper.
  return (
    <>
      {/* JSX uses className for CSS classes. aria-labelledby names this section from its heading. */}
      <section className={styles.intro} aria-labelledby="intro-heading">
        <h1 id="intro-heading" className="illustrated-heading">
          <Illustration name="home" />
          <span>Prince Devine Addey</span>
        </h1>
        <div className={styles.introCopy}>
          <p>I’m a computer science student at Brock University. I’m interested in software development and IT support, and I like working through problems from the first report to the final check.</p>
          <div className={styles.links}>
            <Link href="/projects">Projects</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </section>

      <section className={styles.featured} aria-labelledby="featured-heading">
        <div className={styles.featuredCopy}>
          <h2 id="featured-heading" className="illustrated-heading">
            <Illustration name="guildite" />
            <span>Featured Project</span>
          </h2>
          <h3>Guildite</h3>
          <p>{guilditeSummary}</p>
          <div className={styles.links}>
            <Link href="/projects#guildite-marketplace">Read my Guildite write-up</Link>
          </div>
        </div>
        <div className={`${styles.projectPreview} pixel-frame`}>
          <p><strong>Guest marketplace access</strong></p>
          <p>I worked on letting guests browse products and keeping account actions behind sign-in.</p>
        </div>
      </section>

      <section className={styles.coop} aria-labelledby="coop-experience">
        <h2 id="coop-experience" className="illustrated-heading">
          <Illustration name="skills" />
          <span>Co-op experience</span>
        </h2>
        <p>At the Population Health Research Institute, I imaged and deployed Windows laptops, walked users through setup, and troubleshot Microsoft 365 issues in Teams and Outlook. I also supported users remotely through Microsoft Remote Help and Configuration Manager.</p>
        <div className={styles.links}>
          <Link href="/projects#security-awareness-dashboard">See my co-op dashboard project</Link>
        </div>
      </section>

      {/* The CSS grid controls whether the two sections sit side by side or stack. */}
      <div className={styles.destinations}>
        <section aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="illustrated-heading">
            <Illustration name="skills" />
            <span>Skills</span>
          </h2>
          <p>How I’ve used software development, infrastructure, IT support, and analytics.</p>
          <div className={styles.links}>
            <Link href="/skills">Explore Skills</Link>
          </div>
        </section>
        <section aria-labelledby="life-heading">
          <h2 id="life-heading" className="illustrated-heading">
            <Illustration name="life" />
            <span>Life</span>
          </h2>
          <p>What I do outside school and tech.</p>
          <div className={styles.links}>
            <Link href="/life">Explore Life</Link>
          </div>
        </section>
      </div>
    </>
  );
}
