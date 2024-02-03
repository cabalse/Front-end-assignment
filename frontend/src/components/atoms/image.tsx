import ANewHope from '../../assets/a-new-hope.jpg';

type Props = { type?: string };

const Image = ({ type = 'dirty' }: Props) => {
  return (
    <img
      src={ANewHope}
      alt="A New Hope"
      className={type === 'dirty' ? 'mb-2 md:mb-0 mr-0 md:mr-2 min-w-72' : ''}
    />
  );
};

export default Image;
