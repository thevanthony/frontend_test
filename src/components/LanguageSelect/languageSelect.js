/*
  Description: Selector of the application language
*/

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { Form } from 'react-bootstrap';

export const LanguageSelect = () => {

  //Get the whole state from languageReducer
  const languages = useSelector(state => state.languages);
  const language_list = languages.list;
  const current_value = languages.current_value;

  //Use for all the dispatch actions
  const dispatch = useDispatch();

  return (
      <Form inline >
        <Form.Group>
          <Form.Control as="select" value={current_value} onChange={e => dispatch({type: 'CHANGE_LANGUAGE', payload: e.target.value})} custom>
            {
              language_list.length>0? 
                (
                  language_list.map((option, i) => {
                    return <option value={option.key} id={i} key={i}>
                        {option.label}
                      </option>})
                ):
                (<option value="">--- Pas de langue ---</option>)
            }
          </Form.Control>
        </Form.Group>
      </Form>
  );
}

export default LanguageSelect;