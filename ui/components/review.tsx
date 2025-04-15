function getDifference(days: number): string {
  const weeks = days / 7;
  const months = weeks / 4;
  const years = months / 12;

  let value;

  if (years >= 1) {
    value = Math.trunc(years);
    return `${value} years ago`;
  } else if (months >= 1) {
    value = Math.trunc(months);
    return `${value} months ago`;
  } else if (weeks >= 1) {
    value = Math.trunc(weeks);
    return `${value} months ago`;
  } else {
    return `${days} days ago`;
  }
}

const Review: React.FC<{ name: string; date: string; value: string }> = ({
  name,
  date,
  value,
}) => {
  const then = new Date(date);
  const now = new Date();
  const diff = now.getTime() - then.getTime();
  const days = Math.trunc(diff / (1000 * 60 * 60 * 24));

  return (
    <div className="bg-black p-4 rounded-lg">
      <p className="text-2xl font-bold mb-1">{name}</p>
      <p className="text-sm mb-6 opacity-70">{getDifference(days)}</p>
      <p className="opacity-90">{value}</p>
    </div>
  );
};

export default Review;
