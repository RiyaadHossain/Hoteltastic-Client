import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

function TeamMember({ name, title, linkedIn, github, portfolio, imageTeam }) {
  console.log(name);
  return (
    <div class="teamCard">
      <div class="blob"></div>
      <span class={`img ${imageTeam}`}></span>
      <h2>{name}</h2>
      <span class="designation">{title}</span>
      <p>
        <a href={linkedIn} rel="noreferrer" target={"_blank"}>
          <LinkedInIcon
            style={{
              height: "35px",
              width: "35px",
              color: "#f0f0f0",
            }}
          />
        </a>
        <a href={github} rel="noreferrer" target={"_blank"}>
          <GitHubIcon
            style={{
              height: "35px",
              width: "35px",
              color: "#f0f0f0",
            }}
          />
        </a>
        <a href={portfolio} rel="noreferrer" target={"_blank"}>
          <LanguageIcon
            style={{
              height: "35px",
              width: "35px",
              color: "#f0f0f0",
            }}
          />
        </a>
      </p>
    </div>
  );
}

export default TeamMember;
