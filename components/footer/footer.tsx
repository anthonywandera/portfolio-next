const CATEGORIES = [
  {
    name: "Skillstack",
    links: [
      {
        name: "HTML",
      },
      {
        name: "Javascript",
      },
      {
        name: "CSS",
      },
      {
        name: "NEXTJs",
      },
      {
        name: "NodeJs",
      },
      {
        name: "Tailwind",
      },
    ],
  },
  {
    name: "Connect",
    links: [
      { name: "Instagram", url: "#" },
      { name: "Facebook", url: "#" },
      { name: "X", url: "#" },
      { name: "LinkedIn", url: "#" },
      { name: "Upwork", url: "#" },
      { name: "Fiverr", url: "#" },
      { name: "Freelancer", url: "#" },
      { name: "Pinterest", url: "#" },
    ],
  },
  {
    name: "Site map",
    links: [
      { name: "Home", url: "#home" },
      { name: "About", url: "#about" },
      { name: "Services", url: "#services" },
      { name: "Projects", url: "#projects" },
      { name: "Pricing", url: "#pricing" },
      { name: "Contact", url: "#contact" },
    ],
  },
];

const Category: React.FC<{
  name: string;
  links: { url?: string; name: string }[];
}> = ({ name, links }) => {
  return (
    <div className="flex gap-8">
      <p>{name}</p>
      <ul className="grid grid-cols-2 gap-x-2 opacity-75">
        {links.map((link) => {
          return (
            <li key={link.name}>
              {link.url ? <a href={link.url}>{link.name}</a> : link.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="p-2 pt-6 text-sm grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:justify-items-center gap-16 bg-[var(--theme-color-background-shade)] ">
      {CATEGORIES.map((data) => {
        return <Category key={data.name} name={data.name} links={data.links} />;
      })}
    </footer>
  );
};

export default Footer;
