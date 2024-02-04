import { styled } from 'styled-components';

export function Header() {
  return <Title>Diálogo de práctica</Title>;
}

const Title = styled.h1`
  font-size: 3rem;
  color: hsl(0, 0%, 100%);
  text-align: center;
  background: hsl(357, 40%, 45%);
  background: linear-gradient(90deg, hsl(357, 40%, 45%) 0%, hsl(24, 86%, 49%) 100%);
`;
