import Button from '../atoms/button';

type Props = { className?: string };

const Sort = ({ className = '' }: Props) => {
  return <Button onClick={() => null}>Sort By...</Button>;
};

export default Sort;
