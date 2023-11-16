//내장 함수
// concat, filter, map : 함수들의 특징.
// 결론, 새로운 배열을 생성한다.
// 데이터와 연동을 해서 생각.
// 리스트의 요소를 출력할 때, key 라는 부분이 필요.
// 마치, 데이터베이스 인덱스 개념과 비슷.
// 인덱스 있으면, 인덱스를 기준으로 검색해서 빠름.
// 만약, 인덱스 없으면, 풀 스캔을 해야함. 작업의 효율성부분 문제됨.
// 리액트에서 특정의 데이터를 리스트로 출력시, 이런 인덱스 부분 설정.
// 인덱스는 , 반복이 가능한 iterable 한 그룹을 처리하기는 하지만,
// 유니크 , 중복 되면 안됩니다.
// 데이터베이스 pk 처럼 사용하면 됩니다.
// SQL->RDBMS -> 각 테이블 마다, PK 존재함. 그래서, 이 값을 인덱스로 사용하면됨.
// No SQL -> MongoDB (Object ID) -> PK 사용하면 됨.
// 결론, 데이터 연동해서, 리스트 출력시 key 설정 반드시 해야함.

import { Button } from "antd";
import React, { useState } from "react";

const DataListKeyAddDelTest = () => {
  // test : 상태값 타입 : 배열 , 요소의 타입 : 객체
  // 초깃값 으로 배열로 기본 4개요소 넣고, 더미 데이터
  const [testArr, setTestArr] = useState([
    { id: 1, text: "스프링" },
    { id: 2, text: "부트" },
    { id: 3, text: "안드로이드" },
    { id: 4, text: "리액트" },
  ]);

  // id, text 관련해서 input 태그를 설정.
  const [inputText, setInputText] = useState("");
  // 기본 아이디 4까지 사용했고, 그 이후의 id 값 5부터.
  const [nextId, setNextId] = useState(5);

  //리스트 출력하기. -> 리스트 컴포넌트, 리스트의 아이템 컴포넌트
  // key 값 의무 사항입니다. 하지만, 오류 먼저 확인후 설정 하기.
  // 아이템 요소를 출력 하는 부분

  // 삭제 기능 추가하기.
  // 여기에 더블 클릭 이벤트를 넣고,
  // 삭제하는 기능도 추가하면됨.
  const testArrList = testArr.map((item) => (
    <li key={item.id} onDoubleClick={() => onRemoveText(item.id)}>
      {item.text}
    </li>
  ));

  // 데이터 추가. 배열의 내장 함수 concat 이용.

  // text input 부분이 변경시, 세터 함수로 변경사항을 업데이트 함.
  const onChangeText = (e) => setInputText(e.target.value);

  // onClick 으로 , 데이터 추가 반영하기 로직.
  // 설정. 후 붙이기 작업.
  const onClickText = () => {
    const nextTestArr = testArr.concat(
      // 기본값 id : 5
      {
        id: nextId,
        // inputText , 입력된 내용이 계속 변경을 감지하면서, 최종 단어가 업데이가 됨.
        text: inputText,
      }
    );
    // id 추가 되어서 1씩 증가하는 로직
    setNextId(nextId + 1);
    // 배열에 새로운 요소가 추가된 배열을 업데이트
    setTestArr(nextTestArr);
    // 입력 완료 했으니, 입력창 비우기.
    setInputText("");
  };

  // 데이터 삭제하기, 해당 아이템 요소 더블 클릭해서 삭제하기.
  // filter 이용하기.
  const onRemoveText = (id) => {
    // item.id !== id -> 틀리면 참, 같으면 거짓
    // item.id == id -> 같으면 참, 다르면 거짓.
    // filter(콜백함수(조건)),
    // filter 조건이 참이되는 요소만 뽑아서, 새로운 배열을 만든다.
    //예) 원본 id : 1~4 , 삭제할 아이디가 : 3번
    // 1~4 검사
    // 1 !== 3 : true -> 1 필터됨, 결과 배열 [1]
    // 2 !== 3 : true -> 2 필터됨, 결과 배열 [1,2]
    // 3 !== 3 : false -> 3 필터 안됨, 결과 배열 [1,2], 포함 안됨.
    // 4 !== 3 : true -> 4 필터됨, 결과 배열 [1,2,4]
    const nextTestArr2 = testArr.filter((item) => item.id !== id);
    // 필터가 된, 원소를 제거한 새로운 배열을 업데이트 , 세터로
    setTestArr(nextTestArr2);
  };

  // 키 이벤트 추가 해보기.
  // 키보드에서 엔터 키 입력시, 클릭 이벤트 호출 연결 확인.
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickText();
    }
  };

  return (
    <div>
      <input
        value={inputText}
        onChange={onChangeText}
        onKeyPress={onKeyPress}
      ></input>
      <Button type="primary" onClick={onClickText}>
        추가하기
      </Button>
      <ul>{testArrList}</ul>
    </div>
  );
};

export default DataListKeyAddDelTest;
