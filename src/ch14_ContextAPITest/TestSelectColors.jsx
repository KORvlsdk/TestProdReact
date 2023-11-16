import React from "react";
// 설정, 순서1
import { ColorConsumer } from "./testColor";

//전역의 설정 값 또는 함수를 사용하기.
// Consumer = 게터, Provider = 세터  , 비슷한 역할을 한다.

const colors = ["red", "orange", "blue", "indigo", "violet", "aqua", "navy"];

const TestSelectColors = () => {
  return (
    <div>
      <h2>색상 선택하기</h2>
      {/* 설정, 순서2 */}
      {/* 적용하기, 액션을 가져와서 이용하기. */}
      <ColorConsumer>
        {
          //시작  <ColorConsumer> 에 있는 속성이 2가지인데 1)state, 2)actions
          ({ actions, state }) => (
            <div style={{ display: "flex" }}>
              {/* colors 색깔 배열 원소 중에서, 하나를 꺼내서 순회 동작을 함. */}
              {colors.map((color) => (
                <div
                  key={color}
                  style={{
                    // 전역 저장소, 기본으로 state에 들어있는 color 사용했음
                    background: color,
                    width: "24px",
                    height: "24px",
                    cursor: "pointer",
                  }}
                  //이벤트 핸들러 추가하기, 전역의 함수를 사용하기.
                  // 설정, 순서3, 액션 가져와서 이용. actions.setColor(color)
                  onClick={() => actions.setColor(color)}
                  // 우클릭 이벤트 핸들러 추가하기.
                  onContextMenu={(e) => {
                    // 우클릭 메뉴가 뜨는 게 기본인데, 기본 동작을 막음.
                    e.preventDefault();
                    actions.setSubcolor(color);
                  }}
                />
              ))}
            </div>
          )
          // 함수 끝부분
        }
        {/* 끝 */}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default TestSelectColors;
