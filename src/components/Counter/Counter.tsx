import { useState } from "react";
import styles from "./Counter.module.css";
import { Container, RedContainer, ColoredContainer } from "./Counter.style";
interface Props {
  initialValue: number;
}

const Counter = (props: Props) => {
  // atomic useState
  const [count, setCount] = useState<number>(props.initialValue);

  const increment = () => {
    // setCount(count + 1);

    setCount((currentState) => {
      return currentState + 1;
    });
    // functional setState is better for perfomance (bulk change)
  };

  return (
    <>
      <ColoredContainer color="pink"> {count}</ColoredContainer>
      <button onClick={increment}>increment</button>
    </>
  );
};

export default Counter;

// webpack converts *.module.css to js module (only classes)
// types comunity ,,,, yarn install @types/styled-component
