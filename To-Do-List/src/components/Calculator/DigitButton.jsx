import React from 'react';
import { ACTIONS } from '../../pages/Calculator';

export default function DigitButton({
  dispatch,
  digit
}) {
  return React.createElement("button", {
    onClick: () => dispatch({
      type: ACTIONS.ADD_DIGIT,
      payload: {
        digit
      }
    })
  }, digit);
}