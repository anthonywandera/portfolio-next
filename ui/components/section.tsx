const Section: React.FC<{
  id: string;
  children: React.ReactNode;
  center?: boolean;
  className?: string;
}> = ({ center, id, children, className }) => {
  return (
    <section
      id={id}
      className={`mb-28 max-sm:mb-16 ${className} ${
        center ? "mx-16 max-sm:mx-6" : ""
      }`}
    >
      {children}
    </section>
  );
};

export default Section;
