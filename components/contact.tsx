import Button from "./button";
import Heading from "./heading";
import Section from "./section";
import { IoSend } from "react-icons/io5";

const Input: React.FC<{
  name: string;
  placeholder: string;
  rows?: number;
  type?: string;
  textarea?: boolean;
  className?: string;
}> = ({ className, textarea = false, ...props }) => {
  const styles = "bg-[#181818] p-2 rounded resize-none";
  return (
    <>
      {!textarea ? (
        <input {...props} className={`${styles} ${className}`} required />
      ) : (
        <textarea {...props} className={`${styles} ${className}`} required />
      )}
    </>
  );
};

const Contact: React.FC = () => {
  return (
    <Section id="contact" center>
      <Heading title1="Talk to me" title2="Contact Me" />
      <form>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-x-16 max-md:gap-x-4 gap-y-8 max-md:gap-y-4 mb-8">
          <Input name="name" placeholder="Name" />
          <Input name="subject" placeholder="Subject" />
          <Input name="email" placeholder="Email" className="col-span-full" />
          <Input
            name="message"
            placeholder="Message"
            className="col-span-full"
            rows={6}
            textarea
          />
        </div>
        <Button>
          <IoSend />
        </Button>
      </form>
    </Section>
  );
};

export default Contact;
