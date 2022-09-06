import styles from "./Counter.module.css";
import { Container, RedContainer, ColoredContainer } from "./Counter.style";
interface Props {
  initialValue: number;
}

const Counter = (props: Props) => {
  return (
    <>
      <ColoredContainer color="pink"> {props.initialValue}</ColoredContainer>
    </>
  );
};

export default Counter;

// webpack converts *.module.css to js module (only classes)
// types comunity ,,,, yarn install @types/styled-component
