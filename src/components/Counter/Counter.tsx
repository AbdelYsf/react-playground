import styles from "./Counter.module.css";
interface Props {
  initialValue: number;
}

const Counter = (props: Props) => {
  return (
    <>
      <div className={`${styles.container} ${styles.counter}`}>
        {props.initialValue}
      </div>
    </>
  );
};

export default Counter;

// webpack converts *.module.css to js module (only classes)
// types comunity ,,,, yarn install @types/styled-component
