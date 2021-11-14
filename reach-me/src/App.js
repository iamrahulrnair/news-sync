import React from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function App() {
  const links = [
    {
      link: 'https://github.com/iamrahulrnair',
      icon: <GitHubIcon fontSize="large" />,
    },
    {
      link: 'https://www.linkedin.com/in/iamrahulrnair/',
      icon: <FacebookIcon fontSize="large" />,
    },
    {
      link: 'https://medium.com/@iamrahulrnair',
      icon: <AlternateEmailIcon fontSize="large" />,
    },
    {
      link: 'https://www.linkedin.com/in/iamrahulrnair/',
      icon: <LinkedInIcon fontSize="large" />,
    },
  ];

  const renderLinks = () => {
    return links.map((el, ind) => {
      return (
        <a
          href={el.link}
          key={ind}
          className={`reachme-links reachme-link-${ind + 1}`}
        >
          <div className={`reachme-icons reachme-icon-${ind + 1}`}>
            <div>{el.icon}</div>
          </div>
        </a>
      );
    });
  };
  return <div className="reachme">{renderLinks()}</div>;
}
