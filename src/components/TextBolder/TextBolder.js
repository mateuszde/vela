import styled from "styled-components";

const TextBolderWrapper = styled.span`
  font-weight: bold;
`;

const TextBolder = ({ children }) => {
  return <TextBolderWrapper>{children}</TextBolderWrapper>;
};

export default TextBolder;
