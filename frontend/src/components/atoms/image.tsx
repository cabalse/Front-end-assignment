type Props = { url: string; alt: string; type?: string };

const Image = ({ url, alt, type = 'dirty' }: Props) => {
  if (!url) return null;

  return (
    <img
      src={url}
      alt={alt}
      className={type === 'dirty' ? 'mb-2 md:mb-0 mr-0 md:mr-2 min-w-72' : ''}
    />
  );
};

export default Image;
