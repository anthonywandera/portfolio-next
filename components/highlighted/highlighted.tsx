const Highlighted: React.FC<{ children: string }> = ({ children }) => {
  return <span className="text-[var(--theme-color-accent)]">{children}</span>;
};

export default Highlighted;
