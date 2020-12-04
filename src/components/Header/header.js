/*
  Description: Banner of the page that 
  contain the title et the language selector
*/

import React from 'react';

import { LanguageSelect } from 'components/LanguageSelect/languageSelect';
import { Navbar} from 'react-bootstrap';


export const Header = (props) => {

    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand>{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <LanguageSelect/>
      </Navbar>
    );
}

export default Header;