import * as React from "react";
import Button from "../Button/Button";
import { VideoTextModuleStyles } from "./VideoTextModuleStyles";
import { Link } from "gatsby";

const VideoTextModule = ({
  title,
  contents,
  content2,
  list,
  link,
  linkText,
  videosrc,
}) => {
  return (
    <VideoTextModuleStyles className="section">
      <div className="container container__tight">
        {title && <h2>{title}</h2>}

        {contents && contents.map((content) => <p>{content}</p>)}

        {list && (
          <ul>
            {list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        )}

        <div className="container">
          <iframe
            width="560"
            height="315"
            src={videosrc}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          {content2 && <p>{content2}</p>}
        </div>
        {link && linkText && <Button text={linkText} as={Link} to={link} />}
      </div>
    </VideoTextModuleStyles>
  );
};

export default VideoTextModule;
