type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({ onClick, children }: Props) => {
  return (
    <button
      className="border border-slate-300 rounded p-2 px-4"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
