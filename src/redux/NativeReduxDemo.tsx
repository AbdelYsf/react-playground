import { createStore } from "redux";
export const NativeReduxDemo = () => {
  // Actions
  const increment = () => {
    return {
      type: "INC",
      payload: 2,
    };
  };

  const decrement = () => {
    return {
      type: "DEC",
      payload: 1,
    };
  };

  // reducer
  const counter = (state: any = 0, action: any) => {
    switch (action.type) {
      case "DEC":
        return state - action.payload;
      case "INC":
        return state + action.payload;
      default:
        return state;
    }
  };
  let store = createStore(counter);
  store.subscribe(() => {
    //console.log(store);
    console.log(`the store value : ${store.getState()}`);
  });

  // Dispatch
  store.dispatch(increment());
  store.dispatch(increment());
  store.dispatch(decrement());
  return <></>;
};
