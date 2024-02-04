type Props = {
  episode: number;
  className?: string;
};

const Episode = ({ episode, className }: Props) => {
  const classes = className ?? '';
  return <div className={classes}>EPISODE {episode}</div>;
};

export default Episode;
