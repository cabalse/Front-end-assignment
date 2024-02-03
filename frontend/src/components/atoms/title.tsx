type Props = { type?: string };

const Title = ({ type = 'normal' }: Props) => {
  return (
    <div
      className={type === 'large' ? 'font-medium text-3xl' : 'grow font-medium'}
    >
      Episode IV - A New Hope
    </div>
  );
};

export default Title;
