// useCallback,- 성능 최적화 할 때 많이 사용.
// :화면을 그릴 때,
// 변경이 없는 함수를 매번 새롭게 생성을 안하고, 한번만 만들고,
// 변경이 있는 함수는 매번 새롭게 생성을 하니, 계속 업데이트해서 새 함수 만들기.
// 결론: 콜백 함수를 업데이트 시마다 매번 새롭게 생성할거니?
// 예) 앞에 평균을 구하는 로직에서,
// 함수 : onChage 변경시 , onInsert 추가할 때,

// 평균을 구하는 useMemo에서, 사용했던 함수들을 , 업데이트 시마다, 어떻게 사용할지
// useCallback 으로 변환하기.
import React, { useState, useMemo, useCallback } from "react";
import { Button } from "antd";

//함수1
const doAverage = (numbers) => {
  console.log("평균 계산중 -========-");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const AverageUseCallbackTest = () => {
  // 숫자들을 담을 임시배열
  const [list, setList] = useState([]);
  // 숫자 타입 문자열, 연산시 정수로 변환 필요.
  const [number, setNumber] = useState("");

  // 함수2 -> 변경 - useCallback
  // 이벤트 핸들러 추가
  // 전
  // const onChange = (e) => {
  //   setNumber(e.target.value);
  // };
  // 후
  // 정의
  // useCallback(콜백함수, 의존성배열)
  // 의존성배열 모양 -> [] 빈배열이라서, 마운트시 한번 만 함수를 생성함.
  const onChange = useCallback((e) => {
    console.log("useCallback 확인중.onChange 호출");
    setNumber(e.target.value);
  }, []);

  // 함수3-> 변경 - useCallback
  // 숫자 추가하기.
  // 전
  // const onInsert = (e) => {
  //   // 문자열 -> 정수 변환 -> 리스트에 추가해서 => 새로운 배열 생성.
  //   const nextList = list.concat(parseInt(number));
  //   setList(nextList);
  //   setNumber("");
  // };
  const onInsert = useCallback(() => {
    console.log("useCallback 확인중.onInsert  호출");
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  }, [number, list]);

  // 임의로 결과값을 만들어서 , 이값이 변경시에만, 연산 계산하기.
  // 정의, useEffect 와 비슷함.
  // const avgResult = useMemo(콜백함수,의존성 배열)
  // list 배열에 숫자 추가가 되면서, 그 때, 연산이 수행이됨.
  // 전에는 값을 입력하는 순간에도 연산이 되었다.
  const avgResult = useMemo(() => doAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <Button type="primary" onClick={onInsert}>
        등록하기{" "}
      </Button>
      {/* 리액트 리스트 출력시, 키가 의무적으로 설정 주의하기. */}
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      {/* 연산의 결과  */}
      {/* 사용하기전 */}
      {/* <div>평균값 : {doAverage(list)}</div> */}
      {/* useMemo 사용후  */}
      <div>평균값 : {avgResult}</div>
    </div>
  );
};

export default AverageUseCallbackTest;
