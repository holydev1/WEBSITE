'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Illustration, { type IllustrationName } from './illustration';
import styles from './navigation.module.css';

const destinations: { label: string; href: string; illustration: IllustrationName }[] = [
  { label: 'Home', href: '/', illustration: 'home' },
  { label: 'Skills', href: '/skills', illustration: 'skills' },
  { label: 'Projects', href: '/projects', illustration: 'projects' },
  { label: 'Life', href: '/life', illustration: 'life' },
  { label: 'Contact', href: '/contact', illustration: 'contact' },
];

type MenuState = 'closed' | 'preview' | 'open';

// Small screens open the wheel through the button to avoid incidental previews.
const hoverLayout = '(min-width: 48rem) and (min-height: 24rem) and (hover: hover) and (pointer: fine)';

export default function Navigation() {
  const pathname = usePathname();
  const [menuState, setMenuState] = useState<MenuState>('closed');
  const nav = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const expanded = menuState !== 'closed';

  useEffect(() => {
    setMenuState('closed');
  }, [pathname]);

  useEffect(() => {
    if (!expanded) return;

    function dismissOnOutsidePress(event: PointerEvent) {
      if (event.target instanceof Node && !nav.current?.contains(event.target)) {
        setMenuState('closed');
      }
    }

    function dismissOnEscape(event: KeyboardEvent) {
      if (event.key !== 'Escape' || event.defaultPrevented) return;

      event.preventDefault();
      if (nav.current?.contains(document.activeElement)) trigger.current?.focus();
      setMenuState('closed');
    }

    document.addEventListener('pointerdown', dismissOnOutsidePress);
    document.addEventListener('keydown', dismissOnEscape);
    return () => {
      document.removeEventListener('pointerdown', dismissOnOutsidePress);
      document.removeEventListener('keydown', dismissOnEscape);
    };
  }, [expanded]);

  return (
    <nav
      ref={nav}
      className={styles.nav}
      data-expanded={expanded}
      aria-label="Main navigation"
      onPointerLeave={() => {
        if (menuState === 'preview' && !nav.current?.contains(document.activeElement)) {
          setMenuState('closed');
        }
      }}
      onBlur={(event) => {
        // A touch can blur the button without transferring focus to the tapped link.
        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) {
          setMenuState('closed');
        }
      }}
    >
      <button
        ref={trigger}
        className={styles.trigger}
        type="button"
        aria-controls="site-navigation-links"
        aria-expanded={expanded}
        onPointerEnter={(event) => {
          if (event.pointerType === 'mouse' && window.matchMedia(hoverLayout).matches) {
            setMenuState((state) => state === 'closed' ? 'preview' : state);
          }
        }}
        onClick={() => setMenuState((state) => state === 'open' ? 'closed' : 'open')}
      >
        <span className={styles.triggerLabel}>Menu</span>
      </button>

      <ul id="site-navigation-links" className={styles.panel} hidden={!expanded}>
        {destinations.map(({ label, href, illustration }) => {
          const current = pathname === href;

          return (
            <li key={href}>
              <Link
                href={href}
                className={styles.link}
                aria-current={current ? 'page' : undefined}
                onNavigate={() => {
                  if (current) trigger.current?.focus();
                  setMenuState('closed');
                }}
              >
                <span className={styles.linkContent}>
                  <Illustration name={illustration} />
                  <span className={styles.linkLabel}>{label}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
