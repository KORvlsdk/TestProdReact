//함수형 컴포넌트 ,
// +1, -1 의 기본적인 동작은 동일함.
// state를 구현하는 방법이 조금 다름.
// useState 라는 hooks 를 미리 사용함.
import React, { useState } from "react";

const MyCount = () => {
  // state를 할당하는 부분이 , useState 사용.
  const [number, setNumber] = useState(0);
  // const [anotherNumber, setAnoterhNumber] = useState(100);
  // useState 의 결과값 타입이 배열
  // useState(0) : 초깃값 : number = 0
  // 첫번째 : 상태값,
  // 두번째 : 세터 함수.
  const onClickUp = () => setNumber(number + 1);
  const onClickDown = () => setNumber(number - 1);
  return (
    <div>
      <h1>{number}</h1>
      {/* <h2>다른 숫자 : {anotherNumber}</h2> */}
      <button onClick={onClickUp}>+1</button>

      <button
        // onClick 의 값으로 함수를 사용
        onClick={onClickDown}
      >
        -1
      </button>
    </div>
  );
};

export default MyCount;
