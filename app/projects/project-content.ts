import type { IllustrationName } from '../illustration';

type Project = {
  id: string;
  title: string;
  summary: string;
  role: string;
  contributions: string[];
  illustration?: IllustrationName;
  tags: string[];
  note?: { label: string; text: string };
  link?: { href: string; label: string };
  repoPending?: boolean;
};

export const guilditeSummary =
  'I contribute to Guildite, a team-built web marketplace where users can manage guilds and buy and sell goods. My work has included payment reconciliation, access controls, debugging, and regression testing.';

export const projects: Project[] = [
  {
    id: 'guildite-marketplace',
    title: 'Guildite Marketplace',
    summary: guilditeSummary,
    role: 'I contribute to the marketplace and help investigate issues that cross the browser, the Worker, and Firebase.',
    illustration: 'guildite',
    tags: ['javascript', 'react', 'firebase', 'cloudflare-workers'],
    contributions: [
      'I worked on keeping browsing open to guests, requiring sign-in for cart, wishlist, and account actions, and preserving the return destination through sign-in.',
      'I brought live-payment testing context to the investigation of orders that stayed pending after a payment succeeded.',
      'I updated the repository’s AGENTS.md and set up five reusable Codex specialists for investigation, implementation, independent review, and runtime verification.',
    ],
    note: {
      label: 'How I checked guest access',
      text: 'The Git commit records the change. I used its UI contract checks to review protected content during sign-in, return URLs, and stale account state after sign-out. The checks passed when rerun on that revision for this write-up.',
    },
    link: { href: 'https://www.guildite.com/', label: 'Visit the Guildite marketplace' },
  },
  {
    id: 'proxmox-homelab',
    title: 'Proxmox Homelab',
    summary: 'I run a Proxmox homelab on a Dell OptiPlex to practise Linux administration and run services on my own hardware.',
    role: 'I set up the host and manage the virtual machines and containers.',
    tags: ['homelab', 'proxmox', 'ubuntu', 'linux', 'tailscale'],
    contributions: [
      'I configured Ubuntu virtual machines and ran Jellyfin in a Linux container.',
      'I set up Tailscale to reach lab services privately.',
      'When a VM reported that it could not find bootable media, I checked which installation ISO was attached and reviewed the virtual boot settings.',
    ],
    repoPending: true,
  },
  {
    id: 'security-awareness-dashboard',
    title: 'Security Awareness Dashboard',
    summary: 'During my co-op at the Population Health Research Institute, I built a Power BI dashboard from Proofpoint data to track phishing simulation clicks and reports. I presented it to information and communications technology operations leadership.',
    role: 'I built the data model, reporting measures, and dashboard.',
    tags: ['co-op', 'power-bi', 'power-query', 'dax'],
    contributions: [
      'I cleaned the campaign exports in a staging table using Power Query and built an event table linked to campaign, user, and date tables.',
      'I wrote DAX measures for click and report rates, including separate measures based on opens. I used them to compare campaigns and explain the results in my presentation.',
    ],
    note: {
      label: 'Illustrative calculation',
      text: 'In a synthetic campaign with 100 recipients, 12 unique people clicking and 8 unique people reporting would give recipient-based rates of 12% and 8%.',
    },
  },
  {
    id: 'red-bull-can-detection-robot',
    title: 'Red Bull Can Detection Robot',
    summary: 'For a Brock University group robotics project, our team set out to build a robot that could locate Red Bull cans, pick them up, and move them to a designated area.',
    role: 'I was responsible for training the vision detector.',
    illustration: 'redbull-robot',
    tags: ['school', 'robotics', 'computer-vision'],
    contributions: [
      'I trained the vision model to identify the cans for the robot’s pickup task.',
      'I focused the training work on changes in can orientation and lighting.',
    ],
    link: {
      href: 'https://github.com/holydev1/COSC-3P71-Final-Lab',
      label: 'GitHub repository (access required)',
    },
  },
  {
    id: 'vigenere-genetic-algorithm',
    title: 'Vigenère Genetic Algorithm',
    summary: 'For a Brock University AI course, I built a Java genetic algorithm that searches for Vigenère cipher keys and records how candidate scores change over time.',
    role: 'I implemented the algorithm and designed the experiment runs.',
    tags: ['school', 'java', 'genetic-algorithms', 'powershell'],
    contributions: [
      'I implemented tournament selection, mutation, and elitism, and compared uniform and one-point crossover.',
      'I used seeded PowerShell runs to compare parameter settings across two datasets, then evaluated the chosen settings with separate seeds.',
      'I added chi-squared letter-frequency scoring alongside the original scoring method and logged best and average scores by generation.',
    ],
    link: {
      href: 'https://github.com/holydev1/vigenere-genetic-algorithm',
      label: 'View the Java code and experiment scripts on GitHub',
    },
  },
  {
    id: 'titan-shop',
    title: 'Titan Shop',
    summary: 'I built a database-backed product catalogue and wishlist for a Brock University web development course.',
    role: 'I built the browser interface, Python CGI handlers, and SQLite database.',
    tags: ['school', 'python', 'javascript', 'sqlite'],
    contributions: [
      'I built product pages and added keyword search and tag filtering to the catalogue.',
      'I stored guest wishlists in the browser and merged them into account wishlists at sign-in.',
      'I added admin-only pages for adding and removing products and managing user accounts.',
    ],
    link: {
      href: 'https://cosc.brocku.ca/~vx24nw/A4/',
      label: 'Visit Titan Shop',
    },
  },
  {
    id: 'java-stringt',
    title: 'Java StringT and Test Harness',
    summary: 'I built a custom string interface for a Java coursework project.',
    role: 'I wrote the implementation and the test harness.',
    tags: ['school', 'java', 'testing'],
    contributions: [
      'I implemented operations such as concatenation and length.',
      'I wrote a harness to check expected behaviour and edge cases.',
    ],
    repoPending: true,
  },
];
