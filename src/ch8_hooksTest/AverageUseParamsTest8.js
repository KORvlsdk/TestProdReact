// useParams 연습 해보기.
// 설정 1, 설정2, 적용하기

import React, { useState, useMemo, useCallback, useRef } from "react";
//순서1 , useParams 설정 틀림, 고치기. 수정.
import { useParams } from "react-router-dom";
import { Button } from "antd";

//함수1
const doAverage = (numbers) => {
  console.log("평균 계산중 -========-");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const AverageUseParamsTest8 = () => {
  // 숫자들을 담을 임시배열
  const [list, setList] = useState([]);
  // 숫자 타입 문자열, 연산시 정수로 변환 필요.
  const [number, setNumber] = useState("");

  //순서2 , useRef, 설정1
  const inputElement = useRef(null);

  //순서2 , useParams 설정2
  // path="useParamsTest/:id" :id 를 가지고와서, 재할당.
  const { id } = useParams();

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
    //순서3 , useRef, 적용
    inputElement.current.focus();
  }, [number, list]);

  // 키 이벤트 추가 해보기.
  // 키보드에서 엔터 키 입력시, 클릭 이벤트 호출 연결 확인.
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onInsert();
    }
  };

  // 임의로 결과값을 만들어서 , 이값이 변경시에만, 연산 계산하기.
  // 정의, useEffect 와 비슷함.
  // const avgResult = useMemo(콜백함수,의존성 배열)
  // list 배열에 숫자 추가가 되면서, 그 때, 연산이 수행이됨.
  // 전에는 값을 입력하는 순간에도 연산이 되었다.
  const avgResult = useMemo(() => doAverage(list), [list]);

  return (
    <div>
      {/* 순서2 , useRef, 설정2 */}
      <h1>useParams test 가지고 온 값 : {id}</h1>
      <input
        value={number}
        onChange={onChange}
        ref={inputElement}
        onKeyPress={onKeyPress}
      />
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

export default AverageUseParamsTest8;
