import React from "react";
import Email from "../images/1564504_email_letter_mail_message_icon.png";
import LinkedIn from "../images/5282542_linkedin_network_social network_linkedin logo_icon.png";

function Personal() {
  return (
    <div className="personal">
      <h2 className="personal__name">T R De Grade</h2>
      <h4 className="personal__title">I am Immortal</h4>
      <h6 className="personal__website">tar@degrade.com</h6>
      <div className="personal__buttons">
        <button className="personal__button personal__button__email">
          <img src={Email} alt="Email Button" />
          <span className="button__text">Email</span>
        </button>
        <button className="personal__button personal__button__linkedin">
          <img src={LinkedIn} alt="LinkedIn Button" />
          <span className="button__text">LinkedIn</span>
        </button>
      </div>
    </div>
  );
}

export default Personal;
