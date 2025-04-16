import Button from "../button/button";

const currencyFormatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 1,
});

const PriceCard: React.FC<{ cost: number; features: string[] }> = ({
  cost,
  features = [],
}) => {
  const price = currencyFormatter.format(cost);

  return (
    <div className="bg-black rounded-lg p-4 flex flex-col gap-8">
      <p className="self-center text-4xl font-semibold">{price}</p>
      <ul className="flex flex-col gap-4 p-4 rounded bg-[var(--theme-color-background)]">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <Button>GET</Button>
    </div>
  );
};

export default PriceCard;
