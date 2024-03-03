import { useTypewriter, Cursor } from "react-simple-typewriter";

const Typed = (props) => {
  const [text] = useTypewriter({
    words: ["Caroline", "Freelance", "Brazilian", "Coding"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true,
  });

  return (
    <h4 className={props.fs}>
      <span className="">&#123; </span>
      <span style={props.styles}>{text}</span>
      <span className=""> &#125;</span>
      <Cursor cursorColor="var(--color-primary)" />
    </h4>
  );
};

export default Typed;
