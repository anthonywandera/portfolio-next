import Heading from "./heading";
import PriceCard from "./price-card";
import Section from "./section";

const _packages = [
  {
    id: "01",
    cost: 9,
    features: [
      "1 page",
      "Dynamic content",
      "Responsive design",
      "Up to 10 animations",
      "SEO",
    ],
  },
  {
    id: "02",
    cost: 29,
    features: [
      "Up to 5 pages",
      "Static content",
      "Responsive design",
      "Up to 10 animations",
      "SEO",
    ],
  },
  {
    id: "03",
    cost: 39,
    features: [
      "Up to 5 pages",
      "Dynamic content",
      "Responsive design",
      "Up to 20 animations",
      "SEO",
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <Section id="pricing" center>
      <Heading title1="What I charge" title2="Pricing" />
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-12 max-md:gap-4 max-sm:gap-8">
        {_packages.map(({ id, ...data }) => (
          <PriceCard key={id} {...data} />
        ))}
      </div>
    </Section>
  );
};

export default Pricing;
