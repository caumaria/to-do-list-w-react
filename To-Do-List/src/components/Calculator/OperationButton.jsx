import React from 'react';
import { ACTIONS } from '../../pages/Calculator';

export default function OperationButton({
  dispatch,
  operation
}) {
  return React.createElement("button", {
    onClick: () => dispatch({
      type: ACTIONS.CHOOSE_OPERATION,
      payload: {
        operation
      }
    })
  }, operation);
}