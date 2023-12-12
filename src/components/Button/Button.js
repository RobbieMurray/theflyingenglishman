import * as React from "react";
import { MdArrowForward as Arrowsss } from "react-icons/md";
import { IoIosArrowDropright as Arrow } from "react-icons/io";
import { MdArrowRight as Arrowss } from "react-icons/md";
import { ButtonStyles } from "./ButtonStyles";

const Button = ({ text, to, as, arrow }) => {
  return (
    <ButtonStyles className="btn" as={as} to={to}>
      {text}
      {arrow || to ? <Arrow style={{ marginLeft: "10px" }} /> : null}
    </ButtonStyles>
  );
};

export default Button;
