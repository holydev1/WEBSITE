import type { Metadata } from 'next';
import PreviewPage from '../preview-page';
import styles from './contact.module.css';

export const metadata: Metadata = { title: 'Contact' };

// app/contact/page.tsx maps to /contact. The shared component handles the markup.
export default function ContactPage() {
  return (
    <>
      <PreviewPage
        title="Contact"
        illustration="contact"
        description="You can reach me by email or find me on GitHub and LinkedIn."
        compact
      />
      <ul className={styles.links} aria-label="Contact links" role="list">
        <li><a href="mailto:divineaddey@gmail.com">Email me</a></li>
        <li><a href="https://github.com/holydev1">My GitHub profile</a></li>
        <li><a href="https://ca.linkedin.com/in/prince-devine-addey">My LinkedIn profile</a></li>
      </ul>
    </>
  );
}
