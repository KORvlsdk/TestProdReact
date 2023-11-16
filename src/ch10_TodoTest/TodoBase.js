import React from "react";
import styled from "styled-components";
// css 구성요소
// TodoBaseTemp
// AppTitle
// Content

const TodoBaseTemp = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
`;
const AppTitle = styled.div`
  background: green;
  color: black;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  background: orange;
`;

const TodoBase = ({ children }) => {
  return (
    <TodoBaseTemp>
      <AppTitle>일정관리 미니프로젝트</AppTitle>
      <Content>{children}</Content>
    </TodoBaseTemp>
  );
};

export default TodoBase;
