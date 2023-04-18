import styled from "styled-components";

export default styled.button`
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: white;
  background-color: ${({ brokkoli }) =>
    brokkoli === "danger" ? "var(--secondary-color)" : "var(--primary-color)"};
  margin: 1rem;

  &:hover {
    color: black;
    background-color: var(--primary-background);
  }
`;
