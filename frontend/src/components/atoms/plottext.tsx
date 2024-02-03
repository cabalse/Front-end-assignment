type Props = {
  type?: string;
};

const PlotText = ({ type = 'dirty' }: Props) => {
  return (
    <div className={type === 'clean' ? '' : 'basis-3/4'}>
      It is a period of civil war. Rebel spaceships, striking from a hidden
      base, have won their first victory against the evil Galactic Empire.
      During the battle, Rebel spies managed to steal secret plans to the
      Empire&apos;s ultimate weapon, the DEATH STAR, an armored space station
      with enough power to destroy an entire planet. Pursued by the
      Empire&apos;s sinister agents, Princess Leia races home aboard her
      starship, custodian of the stolen plans that can save her people and
      restore freedom to the galaxy....
    </div>
  );
};

export default PlotText;
