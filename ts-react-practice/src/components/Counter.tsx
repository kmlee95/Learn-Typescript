import React from "react";

type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

const Counter = ({
  count,
  onIncrease,
  onDecrease,
  onIncreaseBy,
}: CounterProps) => {
  return (
    <>
      <h1>{count}</h1>
      <button onClick={onIncrease}>더하기</button>
      <button onClick={onDecrease}>빼기</button>
      <button onClick={() => onIncreaseBy(7)}>7더하기</button>
    </>
  );
};

export default Counter;
