// Type-only imports give TypeScript information without importing runtime values.
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Navigation from './navigation';
import './globals.css';

// Next.js uses this named export to set document metadata, including the browser tab title.
export const metadata: Metadata = {
  title: { default: 'Prince Devine Addey', template: '%s | Prince Devine Addey' },
  description: 'A personal portfolio with sections for skills, projects, and life.',
};

// Next.js wraps each route with this layout and passes its content as children.
// ReactNode describes content React can render, such as an element or a string.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* The link and main ID match so keyboard users can skip the navigation.
            tabIndex={-1} lets main receive focus without becoming a regular Tab stop. */}
        <a className="skip-link" href="#main-content">Skip to content</a>
        <header className="site-header container">
          <Navigation />
        </header>
        <main className="container" id="main-content" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  );
}
