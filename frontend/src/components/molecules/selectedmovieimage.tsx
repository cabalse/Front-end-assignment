import Image from '../atoms/image';

type Props = { url: string; alt: string };

const SelectedMovieImage = ({ url, alt }: Props) => {
  if (!url) return null;

  return (
    <div className="basis-1/4 mr-2 min-w-44">
      <Image url={url} alt={alt} type="clean" />
    </div>
  );
};

export default SelectedMovieImage;
