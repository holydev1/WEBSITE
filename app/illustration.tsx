export type IllustrationName =
  | 'home'
  | 'skills'
  | 'projects'
  | 'life'
  | 'contact'
  | 'spark'
  | 'guildite'
  | 'redbull-robot';

export default function Illustration({ name }: { name: IllustrationName }) {
  return (
    <img
      className="illustration"
      src={`/illustrations/${name}.png`}
      alt=""
      width={16}
      height={16}
    />
  );
}
