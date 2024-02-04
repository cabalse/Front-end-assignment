type Props = {
  text?: string;
  type?: string;
};

const PlotText = ({ text, type = 'dirty' }: Props) => {
  return <div className={type === 'clean' ? '' : 'basis-3/4'}>{text}</div>;
};

export default PlotText;
