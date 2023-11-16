// context API 테스트 메인으로 사용할 예정.
// 부모 컴포넌트로 사용함.
import React from "react";
import { ColorProvider } from "./testColor";
import TestColorBox from "./TestColorBox";
import TestSelectColors from "./TestSelectColors";

const TestColorMain = () => {
  return (

    <ColorProvider>
      <TestSelectColors />
      <TestColorBox />
    </ColorProvider>
  );
};

export default TestColorMain;
