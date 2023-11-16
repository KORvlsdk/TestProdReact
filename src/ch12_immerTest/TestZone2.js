// immer 모듈 가져오기
import { produce } from "immer";

import React from "react";

const TestZone2 = () => {
  const array = {
    class: {
      deep404: {
        inside: 3,
        sampleArray: [2, 3, 4],
      },
      middle: 2,
    },
    end: 5,
  };

  const sampleData = [
    { id: 1, name: "lsy", age: "22" },
    { id: 2, name: "lsy2", age: "22" },
    { id: 3, name: "lsy3", age: "33" },
    { id: 4, name: "lsy4", age: "44" },
  ];
  // 기본 문법 살펴보기.
  // produce ( 원본 데이터, 변경할 업데이트 함수)
  const nextState = produce(array, (draft) => {
    // 변경하고 싶은 값 변경하기.
    draft.class.deep404.inside = 30000;
  });

  // 데이터 추가
  const nextState2 = produce(array, (draft) => {
    draft.class = { name: "lsy" };
  });

  //데이터 추가 2
  const nextState3 = produce(sampleData, (draft) => {
    draft.push({ id: 2, name: "lsy2", age: "33" });
  });

  //데이터 제거 1, 제거한 원소를 가지는 배열을 출력.
  // filter 이용해서, 제거하는 부분은 다시 정리하기.
  const nextState4 = produce(sampleData, (draft) => {
    draft.filter((item) => item.id !== 1);
  });

  //splice 함수 소개.
  // splice(startIndex,deletecount, newItem, newItem,...)
  // splice(1,1) : 1이라는 인덱스부터, 1개 요소를 삭제를 하는 내장 함수.
  //데이터 제거 1, 제거한 원소를 가지는 배열을 출력.
  const nextState5 = produce(sampleData, (draft) => {
    draft.splice(
      draft.findIndex((t) => t.id === 1),
      1
    );
  });

  console.log("불변성 유지 하면서 업데이트하기");
  console.log("nextState.class.deep404.inside 의 값: ");
  console.log(nextState.class.deep404.inside);
  console.log(nextState);
  console.log(nextState2);
  console.log(nextState3);
  console.log(nextState4);
  console.log(nextState5);
  return (
    <div>
      <h1>결과 뷰: {nextState.class.deep404.inside}</h1>
    </div>
  );
};

export default TestZone2;
