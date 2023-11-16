// 입력을 받는 기능을 따로 분리 작업하는 곳
// Info , name, nickname 입력 받는 부분을 분리작업.
//순서1, 설정1
import React, { useReducer } from "react";

// 순서2, 설정2 리듀서 함수 만들기.
const reducer = (state, action) => {
  return {
    // state 의 값 , 객체이고, 속성은 name, nickname
    ...state,
    [action.name]: action.value,
  };
};

export default function InfoInputFunc(initialForm) {
  // 순서2, 설정2 리듀서 함수 만들기.
  // useReducer 의 반환값, 1: 상태값,
  // 2: dispatch 이름의 함수 : 액션의 문자열을 호출하는 함수
  // useReducer(콜백함수, 초깃값)
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
