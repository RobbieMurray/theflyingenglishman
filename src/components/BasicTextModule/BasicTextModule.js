import * as React from "react";
import Button from "../Button/Button";
import { BasicTextModuleStyles } from "./BasicTextModuleStyles";
import { Link } from "gatsby";

const BasicTextModule = ({
  title,
  contents,
  content2,
  content3,
  list,
  link,
  linkText,
}) => {
  return (
    <BasicTextModuleStyles className="section">
      <div className="container">
        {title && <h2>{title}</h2>}

        {contents && contents.map((content) => <p>{content}</p>)}
        {content2 && <p>{content2}</p>}
        {content3 && <p>{content3}</p>}
        {list && (
          <ul>
            {list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        )}
        {link && linkText && <Button text={linkText} as={Link} to={link} />}
      </div>
    </BasicTextModuleStyles>
  );
};

export default BasicTextModule;
