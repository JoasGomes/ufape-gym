import "./styles.css";

export const Button = ({ text, click, disabled }) => {
  return (
    <button className="button" disabled={disabled} onClick={click}>
      {text}
    </button>
  );
};
