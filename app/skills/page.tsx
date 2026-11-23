import type { Metadata } from 'next';
import Link from 'next/link';
import PreviewPage from '../preview-page';
import Item1 from '../item-1';
import styles from './skills.module.css';

// The root layout's title template turns "Skills" into "Skills | Portfolio".
export const metadata: Metadata = { title: 'Skills' };

// app/skills/page.tsx maps to /skills. Pass this route's text to the shared component as props.
export default function SkillsPage() {
  return (
    <>
      <PreviewPage
        title="Skills"
        illustration="skills"
        description="How I use these tools in projects, my homelab, and IT support."
      />
      <div className={styles.groups}>
        <Item1 title="Software development" description="I use Java, Python, JavaScript, and SQL (Structured Query Language). I use Git and GitHub to track changes and work through debugging and regression testing.">
          <p><Link href="/projects#guildite-marketplace">Guildite</Link> · <Link href="/projects#vigenere-genetic-algorithm">Vigenère genetic algorithm</Link> · <Link href="/projects#titan-shop">Titan Shop</Link></p>
        </Item1>
        <Item1 title="Cloud and infrastructure" description="I’ve worked with Firebase and Cloudflare Workers on Guildite. In my homelab, I use Proxmox, Ubuntu Linux, virtual machines, Linux containers, and Tailscale.">
          <p><Link href="/projects#proxmox-homelab">Read about my homelab</Link> · <Link href="/projects#guildite-marketplace">Guildite</Link></p>
        </Item1>
        <Item1 title="Enterprise IT support" description="I deploy and troubleshoot Windows devices. During my co-op, I worked with Microsoft Intune, Microsoft Configuration Manager, Microsoft Entra ID, Active Directory, and Microsoft 365.">
          <p><Link href="/#coop-experience">Read about my PHRI co-op</Link></p>
        </Item1>
        <Item1 title="Reporting and analytics" description="I used Power Query to clean campaign data, modelled it in Power BI, and wrote DAX (Data Analysis Expressions) measures to track clicks and reports.">
          <p><Link href="/projects#security-awareness-dashboard">Read about my PHRI dashboard</Link></p>
        </Item1>
        <section className={styles.example} aria-label="Agentic Coding worked example">
          <Item1
            id="agentic-coding"
            title="Agentic Coding"
            description="I set up a Codex workflow for Guildite backend work where one lead agent coordinates planning, implementation, and review. I saved five specialist agent definitions for reuse across sessions and updated the repository’s AGENTS.md with guidance on tracing backend changes, using isolated test environments, and reporting what was verified."
            illustration="spark"
          >
            <ul>
              <li><strong>Explorer.</strong> Traces the request through the code and maps the dependencies before I approve a plan.</li>
              <li><strong>Worker.</strong> Implements the approved change in assigned files and adds regression tests where needed.</li>
              <li><strong>Regression reviewer.</strong> Independently checks compatibility, state transitions, and missed cases.</li>
              <li><strong>Security reviewer.</strong> Checks sensitive changes for access control, privacy, and payment risks.</li>
              <li><strong>Flow verifier.</strong> Exercises the running API and relevant browser flows in an isolated environment.</li>
            </ul>
            <p><strong>Worked example.</strong> I asked Codex to package the roles with an installer that preserved existing settings and supported rollback. An independent review found that installation or rollback could overwrite a change made after the installer first read the settings. I had the installer detect that conflict and added regression coverage. All 19 installer tests passed, and a second installation preview reported zero changes.</p>
            <p><Link href="/projects#guildite-marketplace">Read my Guildite project write-up</Link></p>
          </Item1>
        </section>
      </div>
    </>
  );
}
