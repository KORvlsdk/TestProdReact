// ref 속성으로 확인 많이 하는 종목 , 스크롤, input focus,
// div 태그로 css 로 특정 영역 만들어서,
// 1) 이안에 그라데이션 박스에 크기를 이용해서, 스크롤을 먼저 붙이기.
// 2) 스크롤에 ref  속성을 달아서, 맨 아래로 가기.
// 3) 특정 input 공간에 , 버튼을 클릭시 focus 확인하는 정도.

import { Button } from "antd";
import React, { useRef } from "react";
// css 사용하기 위한 도구.
import styled from "styled-components";

const RefPracticeScrollTest = () => {
  // box 영역을 선택하기 위한 ref 설정1
  // 훅스 useRef 라는 함수 이용함.
  const box = useRef(null);

  const StyleBox = styled.div`
    /* 사각형 박스 만들기 */
    border: 1px solid black;
    height: 300px;
    width: 300px;
    overflow: auto;
    position: relative;
  `;
  const InnerStyle = styled.div`
    /* 안쪽, 높이 650 px 를 주어서, 스크롤 붙이기.  */
    width: 100%;
    height: 650px;
    background: linear-gradient(yellow, red);
  `;

  return (
    <div>
      {/* 박스의 스크롤에 ref 속성 달기 */}
      <StyleBox ref={box}>
        <InnerStyle></InnerStyle>
      </StyleBox>
      {/* onClick 속성으로 해당 스크롤을 설정해서, 
      그 스크롤의 높이를 조정하기. */}
      <Button
        title="맨밑으로"
        type="primary"
        danger
        onClick={() => (box.current.scrollTop = 350)}
      >
        맨밑으로
      </Button>

      <Button
        title="맨위로"
        type="primary"
        onClick={() => (box.current.scrollTop = 0)}
      >
        맨위로
      </Button>
    </div>
  );
};

export default RefPracticeScrollTest;
