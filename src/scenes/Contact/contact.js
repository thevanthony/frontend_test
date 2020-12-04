import React from 'react';

import { Body } from 'components/Body/body';
import { Header } from 'components/Header/header';

export const Contact = () => {
  // page title
  const title = "Contact";

  // description of the link to the other page
  const link = {
    "title": "Home",
    "to": "/",
  };
  
  return (
    <div>
      <Header title={title}/>
      <Body to={link.to} title={link.title}/>
    </div>
  );
}

export default Contact;