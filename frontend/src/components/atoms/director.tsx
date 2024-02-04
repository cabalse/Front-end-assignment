type Props = {
  className?: string;
};

const Director = ({ className = '' }: Props) => {
  return <div className="pt-2">Directed by: George Lucas</div>;
};

export default Director;
