const Title2: React.FC<{ children: string }> = ({ children }) => {
  return (
    <h3 className="text-5xl max-sm:text-4xl font-bold mb-8 max-sm:mb-6 sticky top-0 z-40">
      {children}
    </h3>
  );
};

export default Title2;
