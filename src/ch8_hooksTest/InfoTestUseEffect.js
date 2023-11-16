//훅스 useState 먼저 확인.
// 복습 해보기.
// 지금부터는 모두 함수형 컴포넌트로 작업하기.
import { Button } from "antd";
import React, { useState, useEffect } from "react";

const InfoTestUseEffect = () => {
  // state 상태, useState('초깃값') -> 결과는 2개를 반환
  // 1 name : state 상태값
  // 2 setName : 세터 함수를 반환. -> 업데이트를 하는 함수.
  // setName -> name 의 값을 업데이트 해줌.
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // useEffect Test 하기.
  //정의 useEffect(콜백함수,의존성 배열)
  // 의존성 배열 모양 1) 아무것도 없을 때, 매번 콜백함수 실행되고,
  // 2) [] , 빈 배열, 한번만 실행되고
  // 3) [list] , list의 상태가 변경 될 때 마다, 콜백함수 실행이 됨.
  useEffect(() => {
    console.log("useEffect 호출이됨. ");
    console.log({
      name,
      nickname,
    });
    // 후처리 함수 추가하기.
    // 문법 : return () => {수행할 로직}
    return () => {
      console.log("후처리 함수 호출 ");
      console.log(name);
    };
  }, []); // 현재, 두번째 매개변수에 모양이 아무것도 없다. 매번 실행 확인 하기.

  //추가, 버튼 추가해서, visible 속성 확인.
  const [visible, setVisible] = useState(false);

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
    <>
      <Button
        type="primary"
        onClick={() => {
          setVisible(!visible);
          console.log(visible);
        }}
      >
        {" "}
        {visible ? "show" : "hide"}
      </Button>
      <div>{visible ? "visible: true" : "visible : false"}</div>
      <div>
        {/* <div style={!{ visible } ? { display: "flex" } : { display: "none" }}> */}
        <div style={{ display: !visible ? "flex" : "none" }}>
          {/* <div style={{ display: "flex" }}> */}
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
    </>
  );
};

export default InfoTestUseEffect;
