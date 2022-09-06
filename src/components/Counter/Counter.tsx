import { useEffect, useState } from "react";
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

  // we can have many useEffect as we want
  useEffect(() => {
    alert("Hello");
  }, []); // will run only once (mounting phase)

  useEffect(() => {
    if (count % 5 == 0) {
      alert("counter is a multiple of 5");
    } else {
      console.log("not a multiple of 5");
    }
  }, [count]); // will run at the mounting phase & when count(deps) changed

  useEffect(() => {
    alert("state changed");
  }); // will run every time the state changed

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
