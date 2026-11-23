/** Item 1 */
/** Component for one of multiple variations of how an Item would be displayed in the website
 * This component is 1/3
 * The other two variations are in item-2.tsx and item-3.tsx
 * This component is used in the projects page to display a project item
 * THis component is used in the skills page to display a skill item
 * This component is used in the life page to display a life item
 */
import styles from './item-1.module.css';
import type { ReactNode } from 'react';
import Illustration, { type IllustrationName } from './illustration';

type Item1Props = {
    title: string;
    description: string;
    image?: string;
    video?: string;
    illustration?: IllustrationName;
    id?: string;
    children?: ReactNode;
};
export default function Item1({ title, description, image, video, illustration, id, children }: Item1Props) {
    const imageUrl = image ? `/images/${image}` : undefined;
    return (
        <article id={id} className={styles.item}>
            {imageUrl && <img src={imageUrl} alt={title} />}
            {video && <video src={video} aria-label={title} controls />}
            <h2 className={illustration ? 'illustrated-heading' : undefined}>
                {illustration && <Illustration name={illustration} />}
                <span>{title}</span>
            </h2>
            <p>{description}</p>
            {children}
        </article>
    );
}
