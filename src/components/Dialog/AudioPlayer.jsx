import React from 'react';
import styled from 'styled-components';

export default function AudioPlayer({ audioUrl }) {
  return (
    <Wrapper>
      <audio controls src={audioUrl}>
        Tu navegador no soporta audio
      </audio>
    </Wrapper>
  );
}

const Wrapper = styled.figure`
  display: flex;
  justify-content: center;
  padding: 15px 0;
`;
