//훅스 useState 먼저 확인.
// 복습 해보기.
// 지금부터는 모두 함수형 컴포넌트로 작업하기.
import React from "react";
import { useState } from "react";

const InfoTestUseState = () => {
  // state 상태, useState('초깃값') -> 결과는 2개를 반환
  // 1 name : state 상태값
  // 2 setName : 세터 함수를 반환. -> 업데이트를 하는 함수.
  // setName -> name 의 값을 업데이트 해줌.
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // 이벤트 핸들러 추가
  // 1. 이름 캐멀케이스 표기법, 2. 인자로는 함수 형태로 전달.
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };

  //결과 출력하기. 작성 문법은 JSX -> 기존 HTML 형식과 동일.
  // 리액트 컴포넌트는 대문자 시작,
  // 기존 DOM , 소문자 태그.
  return (
    <div>
      <div>
        {/* 입력창인데, 값을 입력시, onChange 이벤트 핸들러 동작해서, 결과 뷰에 반영 */}
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickName} />
      </div>
      {/* 결과 뷰 출력 */}
      <div>
        <h1>
          이름: <b>{name}</b>
        </h1>
      </div>
      <div>
        <h1>
          닉네임: <b>{nickname}</b>
        </h1>
      </div>
    </div>
  );
};

export default InfoTestUseState;
