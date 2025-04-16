import Heading from "../heading/heading";
import Review from "./review";
import Section from "../section/section";

const Reviews: React.FC = () => {
  return (
    <Section id="reviews" center>
      <Heading title1="What they say about me" title2="Client Reviews" />
      <div className="flex flex-col gap-4">
        <Review name="Kevin kipruto K" date="03/24/2025" value="The Best! " />
        <Review
          name="Allen Smith"
          date="03/24/2023"
          value="Generational genious! "
        />
        <Review name="Newton" date="01/24/2025" value="A grandmaster! " />
      </div>
    </Section>
  );
};

export default Reviews;
