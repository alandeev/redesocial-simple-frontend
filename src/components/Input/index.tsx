/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface Props {
  name: string;
  label: string;
  Icon?: Function;
  size?: string | number;
  usage?: string;
  type?: string;
}

const Input: React.FC<Props> = ({
  name, label, usage, Icon, size, ...rest
}) => {
  const inputRef = useRef(null);
  const {
    fieldName, defaultValue, registerField, error, clearError,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container className={error ? 'error' : ''}>
      <span>
        {Icon && <Icon size={size} />}
        {label}
      </span>
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        onFocus={clearError}
        {...rest}
      />
      <span className="message">{error || (usage || '')}</span>
    </Container>
  );
};

export default Input;
