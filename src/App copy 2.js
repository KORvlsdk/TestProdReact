import logo from "./logo.svg";
import "./App.css";
// 자식 컴포넌트 요소
import Join from "./component/Join";
import Main from "./component/Main";
import MyCount from "./component/MyCount";

import { Button, Space, DatePicker, version } from "antd";
// 페이지 이동을 위한 설정 1
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";
// 스크롤 ref 테스트 컴포넌트 가져오기.
import RefPracticeScrollTest from "./ch5_component/RefPracticeScrollTest";
import DataListKeyAddDelTest from "./ch6_component/DataListKeyAddDelTest";
import LifeCycleTest from "./ch7_classLifeCycle/LifeCycleTest";
import { useState } from "react";

function App() {
  // 색상을 랜덤하게 변경 시켜서, 이전 상태와 props , 스냅샷 확인.
  function getRandomColor() {
    // 0~1 사이에 숫자에서, 16777215 이만큼 : RGB코드 #00ff00:16x16x16x16x16x16=16^6
    // 0~16777215 사이의 값을 랜덤하게 출력하기.
    // 출력의 모양은 16진수 : 0~f,
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  // 부모 App -> 자식 컴포넌트로, props에 color 전달하기.
  // 초깃값 상태, state
  const [color, setcolor] = useState("#000000");
  state = {
    color: "#000000",
  };
  // 자식에게 색깔을 전달하기 위해서, 이벤트 함수를 수행.
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  return (
    // 페이지 이동을 위한 설정 2. 전체 요소를
    //BrowserRouter 로 감싸기.
    // 구성요소는 Routes -> Route 로 구성할 예정.
    <BrowserRouter>
      <Routes>
        {/* 메인으로 사용할(index->주소에서 : / ) 페이지를 App 또는 Main.js 로 해도 됨 */}
        <Route index element={<Main />} />
        {/* 주소: http://localhost:3000/join -> 해당 페이지 안내 : element={<이동할 컴포넌트>} */}
        <Route path="join" element={<Join />} />
        {/* 추가, 3장에서 연습했던, MyComp라는 컴포넌트 페이지 이동에 추가해보기 */}
        <Route path="mycount" element={<MyCount />} />
        <Route path="scrollRefTest" element={<RefPracticeScrollTest />} />
        <Route path="listKeyDataAddDel" element={<DataListKeyAddDelTest />} />
        <Route path="ClassLifeCycleTest" element={<LifeCycleTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
