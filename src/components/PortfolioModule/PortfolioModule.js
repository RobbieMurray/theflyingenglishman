import * as React from "react";

import { PortfolioModuleStyles } from "./PortfolioModuleStyles";

const PortfolioModule = ({ title, client, description, videosrc }) => {
  return (
    <PortfolioModuleStyles className="section">
      <div className="container container__tight">
        {title && <h2>{title}</h2>}
        <div className="itemcontainer">
          <div className="video-container">
            <iframe
              src={videosrc}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="text-container">
            {client && <h4>Client - {client}</h4>}
            {description && <p>{description}</p>}
          </div>
        </div>
      </div>
    </PortfolioModuleStyles>
  );
};

export default PortfolioModule;
