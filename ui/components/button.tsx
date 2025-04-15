const Button: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <button
      className={`flex justify-center font-bold items-center border-1 border-[var(--theme-color-accent)] p-1 rounded bg-[var(--theme-color-accent)] text-[var(--theme-color-background)] hover:cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
