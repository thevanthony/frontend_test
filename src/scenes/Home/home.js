import React from 'react';

import { Body } from 'components/Body/body';
import { Header } from 'components/Header/header';

export const Home = () => {
  // page title
  const title = "Home";
  
  // description of the link to the other page
  const link = {
    "title": "Contact",
    "to": "/contact",
  };
  return (
    <div>
      <Header title={title}/>
      <Body to={link.to} title={link.title}/>
    </div>
  );
}

export default Home;