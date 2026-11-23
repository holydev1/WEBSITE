import Illustration, { type IllustrationName } from './illustration';

type PreviewPageProps = {
  title: string;
  description: string;
  illustration: IllustrationName;
  compact?: boolean;
};

export default function PreviewPage({ title, description, illustration, compact = false }: PreviewPageProps) {
  return (
    <div className={compact ? 'preview-page preview-page--compact' : 'preview-page'}>
      <h1 className="illustrated-heading">
        <Illustration name={illustration} />
        <span>{title}</span>
      </h1>
      <p>{description}</p>
    </div>
  );
}
