/* eslint-disable react/prop-types */
const Button = ({ text, style, ...props }) => {
  return (
    <a
      className={`inline-block uppercase bg-button-color py-4 px-8 text-white text-xs cursor-pointer ${style} dark:bg-button-color-dark`}
      id="buttonReu"
      {...props}
    >
      {text}
    </a>
  );
};

export default Button;
