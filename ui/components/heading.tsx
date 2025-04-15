import Title1 from "./title-1";
import Title2 from "./title-2";

const Heading: React.FC<{ title1: string; title2: string }> = ({
  title1,
  title2,
}) => {
  return (
    <>
      <Title1>{title1}</Title1>
      <Title2>{title2}</Title2>
    </>
  );
};

export default Heading;
