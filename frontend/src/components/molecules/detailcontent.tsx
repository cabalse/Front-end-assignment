import Image from '../atoms/image';
import PlotText from '../atoms/plottext';

type Props = { className?: string };

const DetailContent = ({ className = '' }: Props) => {
  return (
    <div className="mt-2 text-justify flex flex-col md:flex-row ">
      <div className="flex justify-center">
        <Image />
      </div>
      <PlotText type="clean" />
    </div>
  );
};

export default DetailContent;
