const Info: React.FC<{ name: string; value: string | number }> = ({
  name,
  value,
}) => {
  return (
    <div className="bg-black py-2 max-sm:py-1 px-8 max-sm:px-4 rounded-full font-semibold">
      {name}: {value}
    </div>
  );
};

export default Info;
