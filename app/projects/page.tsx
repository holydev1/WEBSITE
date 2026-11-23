import type { Metadata } from 'next';
import Item1 from '../item-1';
import PreviewPage from '../preview-page';
import { projects } from './project-content';
import styles from './projects.module.css';

export const metadata: Metadata = { title: 'Projects' };

// app/projects/page.tsx maps to /projects and supplies project-specific text to PreviewPage.
export default function ProjectsPage() {
  return (
    <>
      <PreviewPage
        title="Projects"
        illustration="projects"
        description="Selected work and project write-ups."
      />
      <ul className={styles.index} aria-label="Project index" role="list">
        {projects.map((project) => (
          <li key={project.id}>
            <Item1 id={project.id} title={project.title} description={project.summary} illustration={project.illustration}>
              <ul className={styles.tags} aria-label="Project tags" role="list">
                {project.tags.map((tag) => <li key={tag}>#{tag}</li>)}
              </ul>
              <p><strong>My role.</strong> {project.role}</p>
              <ul>
                {project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
              </ul>
              {project.note && <p><strong>{project.note.label}.</strong> {project.note.text}</p>}
              {project.link && <p><a href={project.link.href}>{project.link.label}</a></p>}
              {project.repoPending && <div className={styles.repoPending}>Repository link pending</div>}
            </Item1>
          </li>
        ))}
      </ul>
    </>
  );
}
