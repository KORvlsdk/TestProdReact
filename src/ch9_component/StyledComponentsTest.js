import React from "react";
//순서1 import 모듈 가져오기.
import styled, { css } from "styled-components";
import { Button } from "antd";
import { AiFillApple } from "react-icons/ai";

const StyledComponentsTest = () => {
  //순서2, 적용하기. styled.DOM 요소``(백틱)

  const Box = styled.div`
    /* props 가 있다면 해당 컬러를 사용하고, 없다면, or 조건으로 blue 선택됨. */
    background: ${(props) => props.color || "blue"};
    padding: 1rem;
    display: flex;
  `;

  const Button = styled.button`
    /* 원래는 백틱 안에서 속성들이 문자열로 인식해서, 하이라이트 가 원래 안되는데
  확장팩 , vscode-styled-components 설치 했음.  */
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 500;

    // & 현재 요소
    &:hover {
      background: rgba(255, 255, 255, 0.9);
    }

    // props를 이용할수 있음. 전달된 props 내용을 이용해서 조건부도 가능.
    ${(props) =>
      props.test &&
      css`
        background: none;
        border: 2px solid white;
        color: green;
        &:hover {
          background: white;
          color: yello;
        }
      `}

    // 형제 연산자, 버튼과 버튼 사이에 주는 효과 
    & + button {
      margin-left: 1rem;
    }
  `; // button 끝

  return (
    <div>
      {/* Box 라는 사용자 정의 컴포넌트에 props 전달 해보기.  */}
      <h1>
        test react-icons <AiFillApple />
      </h1>
      <Box color="red">
        <Button test={true}>hello</Button>
      </Box>
      <Box>
        <Button>속성 안주기 </Button>
      </Box>
      <Box color="violet">
        <Button test={true}>속성 주기 </Button>
        <Button>속성 안주기 </Button>
      </Box>
    </div>
  );
};

export default StyledComponentsTest;
