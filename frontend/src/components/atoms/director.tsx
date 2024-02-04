type Props = {
  text: string;
  className?: string;
};

const Director = ({ text, className = '' }: Props) => {
  return <div className="pt-2">Directed by: {text}</div>;
};

export default Director;
