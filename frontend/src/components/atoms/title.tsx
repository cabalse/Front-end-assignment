type Props = { title: string; type?: string };

const Title = ({ title, type = 'normal' }: Props) => {
  return (
    <div
      className={type === 'large' ? 'font-medium text-3xl' : 'grow font-medium'}
    >
      {title}
    </div>
  );
};

export default Title;
