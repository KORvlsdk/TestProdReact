import logo from "./logo.svg";
import "./App.css";
// 자식 컴포넌트 요소
import Join from "./component/Join";
import Main from "./component/Main";
import MyCount from "./component/MyCount";

import { Button, Space, DatePicker, version } from "antd";
// 페이지 이동을 위한 설정 1
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 스크롤 ref 테스트 컴포넌트 가져오기.
import RefPracticeScrollTest from "./ch5_component/RefPracticeScrollTest";
import DataListKeyAddDelTest from "./ch6_component/DataListKeyAddDelTest";
import LifeCycleTest from "./ch7_classLifeCycle/LifeCycleTest";
import InfoTestUseState from "./ch8_hooksTest/InfoTestUseState";
import InfoTestUseEffect from "./ch8_hooksTest/InfoTestUseEffect";
import CountUseReducerTest from "./ch8_hooksTest/CountUseReducerTest";
import InfoTestUseReducer from "./ch8_hooksTest/InfoTestUseReducer";
import AverageUseMemoTest from "./ch8_hooksTest/AverageUseMemoTest";
import AverageUseCallbackTest from "./ch8_hooksTest/AverageUseCallbackTest";
import AverageUseRefTest from "./ch8_hooksTest/AverageUseRefTest";
import AverageUseParamsTest8 from "./ch8_hooksTest/AverageUseParamsTest8";
import InfoTestCustomHooks9 from "./ch8_hooksTest/InfoTestCustomHooks9";
import TestSass from "./ch9_component/TestSass";
import StyledComponentsTest from "./ch9_component/StyledComponentsTest";
import TodoMain from "./ch10_TodoTest/TodoMain";
import ImmerTest from "./ch12_immerTest/ImmerTest";
import TestZone2 from "./ch12_immerTest/TestZone2";
import ApiTest from "./ch13_API_PublicDataTest/ApiTest";
import ApiTestKoreaNews from "./ch13_API_PublicDataTest/ApiTestKoreaNews";
import MainNews from "./ch13_API_PublicDataTest/component/MainNews";
import NewsPage from "./ch13_API_PublicDataTest/page/NewsPage";
import TestColorBox from "./ch14_ContextAPITest/TestColorBox";
import TestColorMain from "./ch14_ContextAPITest/TestColorMain";

function App() {
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
        <Route path="useStateTest" element={<InfoTestUseState />} />
        <Route path="useEffectTest" element={<InfoTestUseEffect />} />
        <Route path="useReducerTest" element={<CountUseReducerTest />} />
        <Route path="useReducerTest2" element={<InfoTestUseReducer />} />
        <Route path="useMemoTest" element={<AverageUseMemoTest />} />
        <Route path="useCallbackTest" element={<AverageUseCallbackTest />} />
        <Route path="useRefTest" element={<AverageUseRefTest />} />
        {/* useParams test 설정2 : path="useParamsTest/:id" */}
        <Route path="useParamsTest/:id" element={<AverageUseParamsTest8 />} />
        <Route path="customHooksTest" element={<InfoTestCustomHooks9 />} />
        <Route path="sassTest" element={<TestSass />} />
        <Route path="styledComponentsTest" element={<StyledComponentsTest />} />
        <Route path="todoMain" element={<TodoMain />} />
        <Route path="immerTest" element={<ImmerTest />} />
        <Route path="immerTestZone" element={<TestZone2 />} />
        <Route path="apiTest" element={<ApiTest />} />
        <Route path="apiTest2" element={<ApiTestKoreaNews />} />
        {/* <Route path="apiTest3" element={<MainNews />} /> */}
        <Route path="newsPageTest/:category" element={<NewsPage />} />
        <Route path="contextAPITest" element={<TestColorMain />} />
        {/* <Route path="contextAPITest" element={<TestColorBox />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
