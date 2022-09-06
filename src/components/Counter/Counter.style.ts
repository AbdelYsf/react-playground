import styled from "styled-components";

//custom => styled(Counter)
export const Container = styled.div`
  margin: auto;
  width: 80%;
  height: 90%;
  font-size: 44em;
`;

export const RedContainer = styled(Container)`
  background-color: red;
`;

export const ColoredContainer = styled(Container)<{ color: string }>`
  background-color: ${(props) => props.color};
`;
