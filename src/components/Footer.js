import React from "react";
import twitter from "../images/5296516_tweet_twitter_twitter logo_icon.png";
import facebook from "../images/317727_facebook_social media_social_icon.png";
import instagram from "../images/4102579_applications_instagram_media_social_icon.png";
import github from "../images/4745725_code_development_github_open-source_programming_icon.png";

function Footer() {
  return (
    <div className="footer">
      <img src={twitter} alt="twitter" className="icon" />
      <img src={facebook} alt="facebook" className="icon" />
      <img src={instagram} alt="instagram" className="icon" />
      <img src={github} alt="github" className="icon" />
    </div>
  );
}

export default Footer;
