//준비물
// createContext 임포트
// 전역으로 사용할 예제 속성추가
// 내보내기 하기.

// 전역 저장소로 사용이 됨.

import { createContext, useState } from "react";

// 속성 예시 만들기.
// const ColorContext = createContext({ color: "blue" });

// 속성 예시2 , 함수로 전달하기.
const ColorContext = createContext({
  // state 속성으로 값으로
  state: { color: "aqua", subcolor: "violet" },
  // actions 속성으로 함수로
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

// provider 만들기. = 세터 랑 역할이 비슷
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("blue");
  const [subcolor, setSubcolor] = useState("red");
  const value = {
    // 상태값
    state: { color, subcolor },
    // 업데이트 함수, 세터
    actions: { setColor, setSubcolor },
  };
  // 오류 발생해도 잠시 보류.

  return (
    // props 형태로 value라는 속으로  값, 함수를 같이 전달하면서,
    // children 자리에 또 다른 props 전달함.
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// ColorConsumer : 게터 , 이용하는 쪽 역할이 비슷
const { Consumer: ColorConsumer } = ColorContext;
// 추가
//  ColorProvider: 세터, ColorConsumer: 게터
export { ColorProvider, ColorConsumer };
// 내보내기
export default ColorContext;
