import Info from "./info";

const AboutMe: React.FC = () => {
  return (
    <div className="flex gap-4 max-sm:gap-1 flex-wrap mb-14 max-sm:mb-8">
      <Info name="Age" value="19" />
      <Info name="Country" value="Kenya" />
      <Info name="Projects" value="2" />
      <Info name="Clients" value="6" />
      <Info name="Lines of code" value="7M+" />
    </div>
  );
};

export default AboutMe;
