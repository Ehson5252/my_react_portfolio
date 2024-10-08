import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: oehsoni1@gmail.com"
  },
  {
    icon: faGithub,
    url: "https://github.com/Ehson5252",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ekhsoni-olimzoda",
  },
  {
    icon: faFacebook,
    url: "https://www.facebook.com/",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={6}>
            {socials.map((social) => (
              <a href={social.url} target="_blank">
                <FontAwesomeIcon icon={social.icon} size="2x"/>
              </a>
            ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/my_react_portfolio/#projects-section" onClick={()=>handleClick("projects")}>Projects</a>
              <a href="/my_react_portfolio/#contactme-section" onClick={()=>handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
