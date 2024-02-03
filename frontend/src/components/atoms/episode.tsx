type Props = {
  className?: string;
};

const Episode = ({ className }: Props) => {
  const classes = className ?? '';
  return <div className={classes}>EPISODE 4</div>;
};

export default Episode;
