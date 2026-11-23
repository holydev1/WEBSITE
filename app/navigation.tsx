'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';
import Illustration, { type IllustrationName } from './illustration';
import styles from './navigation.module.css';

const destinations: { label: string; href: string; illustration: IllustrationName }[] = [
  { label: 'Home', href: '/', illustration: 'home' },
  { label: 'Skills', href: '/skills', illustration: 'skills' },
  { label: 'Projects', href: '/projects', illustration: 'projects' },
  { label: 'Life', href: '/life', illustration: 'life' },
  { label: 'Contact', href: '/contact', illustration: 'contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const nav = useRef<HTMLElement>(null);
  const disclosure = useRef<HTMLDetailsElement>(null);
  const trigger = useRef<HTMLElement>(null);
  const preview = useRef(false);
  const previousPath = useRef(pathname);

  const close = useCallback(() => {
    if (disclosure.current) disclosure.current.open = false;
    preview.current = false;
  }, []);

  useEffect(() => {
    if (previousPath.current !== pathname) {
      previousPath.current = pathname;
      close();
    }
  }, [close, pathname]);

  useEffect(() => {
    function dismissOnOutsidePress(event: PointerEvent) {
      if (disclosure.current?.open && event.target instanceof Node && !nav.current?.contains(event.target)) {
        close();
      }
    }

    function dismissOnEscape(event: KeyboardEvent) {
      if (event.key !== 'Escape' || event.defaultPrevented || !disclosure.current?.open) return;

      event.preventDefault();
      if (nav.current?.contains(document.activeElement)) trigger.current?.focus();
      close();
    }

    document.addEventListener('pointerdown', dismissOnOutsidePress);
    document.addEventListener('keydown', dismissOnEscape);
    return () => {
      document.removeEventListener('pointerdown', dismissOnOutsidePress);
      document.removeEventListener('keydown', dismissOnEscape);
    };
  }, [close]);

  return (
    <nav
      ref={nav}
      className={styles.nav}
      aria-label="Main navigation"
      onPointerLeave={() => {
        if (preview.current && !nav.current?.contains(document.activeElement)) {
          close();
        }
      }}
      onBlur={(event) => {
        // A touch can blur the button without transferring focus to the tapped link.
        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) {
          close();
        }
      }}
    >
      <details ref={disclosure} className={styles.disclosure}>
        <summary
          ref={trigger}
          className={styles.trigger}
          onPointerEnter={(event) => {
            const menu = disclosure.current;
            // A trackpad or mouse can send pointer events on a touch-first device.
            if (menu && !menu.open && event.pointerType === 'mouse') {
              preview.current = true;
              menu.open = true;
            }
          }}
          onClick={(event) => {
            if (preview.current) {
              event.preventDefault();
              preview.current = false;
            }
          }}
        >
          <span className={styles.triggerLabel}>Menu</span>
        </summary>

        <ul className={styles.panel}>
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
                    close();
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
      </details>
    </nav>
  );
}
