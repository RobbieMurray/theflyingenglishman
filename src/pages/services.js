import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import BasicTextModule from "../components/BasicTextModule/BasicTextModule";
import VideoTextModule from "../components/VideoTextModule/VideoTextModule";
import PortfolioModule from "../components/PortfolioModule/PortfolioModule";
import Seo from "../components/SEO";
import SimpleBanner from "../components/SimpleBanner/SimpleBanner";

const contents = [
  "If you just like the look of my videography work and want to incorporate it into a project you have. I’m also available for filming on location. I’ve been skiing for over 20 years and I love working with professional athletes to get the best shot.",
];

const jumpstartcontent = [
  "I will make you YouTube videos to promote your brand and your products to the right audience. I’m not about view hunting - no chasing the next big trend, no retention hacking, no fake clickbait.",
  "This is what I will cover for you:",
];
const jumpstartlist = [
  "Brain storming initial concept and deciding on a content strategy",
  "Co-ordinate filming with the talent/athlete",
  "Film on location",
  "Edit the videos",
  "Produce Packaging ",
];

const consultingcontent = [
  "You may already have a team working on your YouTube content but want some extra input. I’m happy to share my knowledge of YouTube in the action sports world and join your team on a freelance consulting basis.",
  "Here is a quick presentation on how YouTube works and the two key areas think about when making youtube content:",
];

const services = () => {
  return (
    <>
      <Seo title="Services" />
      <Layout>
        <SimpleBanner title="Services" height="80vh">
          <StaticImage
            className="banner__image"
            src="../images/mountains.webp"
            alt="filming at Xgames"
          />
        </SimpleBanner>

        <BasicTextModule
          title="YouTube Content Production"
          contents={jumpstartcontent}
          content2="Lets make content that appeals to your target audience"
          list={jumpstartlist}
          link="/contact"
          linkText="Contact Me"
        />
        <PortfolioModule
          title="Example Client Content"
          client="Bruce Oldham"
          description="Create a video promoting his online coaching business"
          videosrc="https://www.youtube.com/embed/AbCfMnhXeuE?si=lj6--b_bGwi349k8"
        />

        <VideoTextModule
          title="YouTube Strategy Consulting"
          contents={consultingcontent}
          link="/contact"
          linkText="Contact Me"
          content2="(The examples are skiing specific but can be applied for any sport or niche)"
          videosrc="https://www.youtube.com/embed/cUs7Ft6eqoc?si=hGyAMRUa6PJuEQe8"
        />

        <BasicTextModule
          title="Videography"
          contents={contents}
          link="/contact"
          linkText="Contact Me"
        />
      </Layout>
    </>
  );
};

export default services;
