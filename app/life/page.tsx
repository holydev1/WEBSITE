import type { Metadata } from 'next';
import PreviewPage from '../preview-page';
import styles from './life.module.css';

export const metadata: Metadata = { title: 'Life' };

// app/life/page.tsx maps to /life and supplies its own props to the shared preview.
export default function LifePage() {
  return (
    <>
      <PreviewPage
        title="Life"
        illustration="life"
        description="Outside school and tech, I train for powerlifting, play Call of Duty: Mobile, and listen to jazz and R&B."
      />
      <section className={styles.lifeSection} aria-labelledby="powerlifting-heading">
        <h2 id="powerlifting-heading">Powerlifting</h2>
        <p>I enjoy lifting heavy and spending time in the gym. Powerlifting gives me something to work towards outside class.</p>
      </section>
      <section className={styles.lifeSection} aria-labelledby="gaming-heading">
        <h2 id="gaming-heading">Gaming</h2>
        <p>I’ve played Call of Duty: Mobile for years. Even after I got a console, it stayed the game I come back to.</p>
      </section>
      <section className={styles.lifeSection} aria-labelledby="music-heading">
        <h2 id="music-heading">Music</h2>
        <p>Jazz and R&B are my favourite genres.</p>
      </section>
    </>
  );
}
