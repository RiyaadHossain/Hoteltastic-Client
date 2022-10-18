import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TeamMember from "../../Components/TeamMember";

const Collaborator = () => {
  const teamMember = [
    {
      name: "Riyad Hossain",
      title: "Team Lead",
      linkedIn: "https://www.linkedin.com/in/riyaad-hossain/",
      github: "https://github.com/RiyaadHossain",
      portfolio: "https://portfolio-riyad.web.app/",
      imageTeam: "riyad",
    },
    {
      name: "Shoriful Islam",
      title: "Backbone of Team",
      linkedIn: "https://www.linkedin.com/in/shoriful-islam-960918229/",
      github: "https://github.com/khanshorif331",
      portfolio: "https://shoriful-islam-portfolio.web.app/",
      imageTeam: "shorif",
    },
    {
      name: "Taizul Rakib",
      title: "Front-end Wizard",
      linkedIn: "https://www.linkedin.com/in/developer-rakib1/",
      github: "https://github.com/Developer-Rakib",
      portfolio: "https://portfolio-of-developer-rakib.netlify.app/",
      imageTeam: "rakib",
    },
    {
      name: "Nishat Fariza",
      title: "Quick Support",
      linkedIn: "https://www.linkedin.com/in/nishatfariza/",
      github: "https://github.com/NishatFariza",
      portfolio: "",
      imageTeam: "nishat",
    },
    {
      name: "Sadik Hossain",
      title: "Backend Master",
      linkedIn: "https://linkedin.com/in/sadik-hossain-siam/",
      github: "https://github.com/Sadik-Hossain",
      portfolio: "https://sadik-hossain-siam.netlify.app/",
      imageTeam: "sadik",
    },
  ];

  return (
    <Box
      sx={{
        fontFamily: "'Rubik', sans-serif",
        padding: "2px 70px 63px 70px",
        color: "#000",
        width: "100%",
        margin: "40px auto",
      }}
    >
      <Typography
        sx={{
          fontWeight: "500",
          margin: "40px",
          fontFamily: "'Rubik', sans-serif",
          fontSize: {
            xs: "28px",
            sm: "30px",
            md: "34px",
            borderBottom: "",
          },
        }}
        fontWeight="bold"
      >
        Collaborator
        <Box
          sx={{
            width: "25%",
            background:
              "linear-gradient(90deg, hsl(0, 0%, 70%), hsl(0, 0%, 20%), hsl(0, 0%, 70%))",
            height: "2px",
          }}
        ></Box>
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {teamMember.map((member) => (
          <TeamMember {...member} />
        ))}
      </Box>
    </Box>
  );
};

export default Collaborator;
