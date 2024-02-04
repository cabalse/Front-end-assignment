import Button from '../atoms/button';

type Props = { onClick: () => void };

const Sort = ({ onClick }: Props) => {
  return <Button onClick={onClick}>Sort By...</Button>;
};

export default Sort;
