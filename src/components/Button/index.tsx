/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { StyledButton } from './styles';

interface Props {
  disable?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Props> = ({ disable, ...rest }) => {
  const classList: string[] = [];

  if (disable) classList.push('disable');

  return (
    <StyledButton className={classList.join(' ')} {...rest} />
  );
};

export default Button;
