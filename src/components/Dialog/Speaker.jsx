import React from 'react';
import styled from 'styled-components';

export default function Speaker({ person, children }) {
  return (
    <Wrapper>
      <Person>{person}</Person>
      <p>{children}</p>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
`;

const Person = styled.p`
  font-weight: 600;
  color: hsl(174 79% 35%);
  padding-inline-end: 10px;

  &::after {
    content: ':';
  }
`;
