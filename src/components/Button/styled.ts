import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 300;
  padding: 0.6em 1.2em;
  border-radius: 3px;
  cursor: pointer;
  white-space: nowrap;
`;
