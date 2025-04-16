const Title1: React.FC<{ children: string }> = ({ children }) => {
  return (
    <h2 className="text-[var(--theme-color-accent)] font-bold mb-3">
      {children}
    </h2>
  );
};

export default Title1;
