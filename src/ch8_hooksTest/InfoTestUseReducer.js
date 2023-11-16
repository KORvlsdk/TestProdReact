//기존에 useState로 구성된 컴포넌트
// Info 내용이, name, nickname 변경사항에 대해서
// state , setState로 업데이트 확인하는 방법.

// useReducer 형태로 변경하기.
// 각 상태를 액션의 문자열에 맞게끔 동작하는 함수를 호출하는 방법.
import React, { useReducer } from "react";

//설정1, 리듀서 함수 만들기.
const reducer = (state, action) => {
  return {
    // Info 의 속성값, name, nickname 2개를
    // ... spread 연산자 이용해서, 사본 만들고
    // 여기에 값을 추가 하기.
    ...state,
    [action.name]: action.value,
  };
};

const InfoTestUseReducer = () => {
  //설정2 , useReducer 훅스 함수 사용하기.
  // useReducer(리듀서 함수, 초깃값) 의 반환값 : state , dispatch 함수
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });

  // 비구조화 할당. 해당 객체의 멤버를 구조 분해.
  // name = state.name
  // nickname = state.nickname
  const { name, nickname } = state;

  // 이벤트 핸들러, 입력값에 변경사항을 반영하는 로직.
  const onChange = (e) => {
    // 적용하기. dispatch 함수 호출해서 동작 시키기.
    dispatch(e.target);
  };
  return (
    <div>
      <div>
        {/* 입력창인데, 값을 입력시, onChange 이벤트 핸들러 동작해서, 결과 뷰에 반영 */}
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      {/* 결과 뷰 출력 */}
      <div>
        <h1>
          이름: <b>{name}</b>
        </h1>
      </div>
      <div>
        <h1>
          닉네임: <b>{nickname}</b>
        </h1>
      </div>
    </div>
  );
};

export default InfoTestUseReducer;
