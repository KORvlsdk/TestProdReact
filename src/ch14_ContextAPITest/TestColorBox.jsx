// 순서1 설정
import React, { useContext } from "react";
// 전역 속성 가져오기
import ColorContext from "./testColor";
//예시2
import { ColorConsumer } from "./testColor";

//전역에서 설정한 속성 가져오기.
// Consumer 라는 속성을 이용해서, 전역의 값을 사용하기.
const TestColorBox = () => {
  //훅스로 더 쉽게, 전역의 값 이용하게.
  const { state, actions } = useContext(ColorContext);
  return (
    <div>
      {/* Consumer 속성 이용해서 */}
      {/* 예시1 */}
      {/* <ColorContext.Consumer> */}
      {/* 예시2 */}
      {/* <ColorConsumer> */}
      {/* 값가져오기  children 부분에 값의 형태가 아니라 
        함수 형태로 사용중. child as Function */}
      {/* 예시1
        {(value) => ( */}
      {/* 예시2 */}
      {
        // ({ state }) => (
        // 예시3, 함수형 컴포넌트 훅스로 useContext 로 쉽게 전역 값 사용하기
        <div>
          <div
            style={{
              width: "64px",
              height: "64px",
              // 임의의  value 매개변수(객체) 속성으로  color 가져오기
              // 파란색 박스 맞는지, 확인하기.
              // 예시1
              // background: value.color,
              // 예시2
              background: state.color,
            }}
          ></div>
          <div
            style={{
              width: "32px",
              height: "32px",
              // 예시2
              background: state.subcolor,
            }}
          >
            <div
              style={{
                width: "128px",
                height: "128px",
                // 예시2
                background: state.subcolor,
              }}
            >
              <div
                style={{
                  width: "256px",
                  height: "256px",
                  // 예시2
                  background: state.subcolor,
                }}
              ></div>
            </div>
          </div>
        </div>
        // )
      }
      {/* </ColorConsumer> */}
    </div>
  );
};

export default TestColorBox;
