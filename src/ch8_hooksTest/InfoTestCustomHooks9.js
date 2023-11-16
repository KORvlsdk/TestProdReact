// 입력 받는 기능을 분리한 파일을
// 불러와서 테스트 할 환경.

import React from "react";
import { useState } from "react";
//순서1 설정. 파일 분리한 기능을 불러오기.
import useInfoInputFunc from "./InfoInputFunc";

const InfoTestCustomHooks9 = () => {
  //순서2 설정. 불러와서 사용하기.
  // useInfoInputFunc 의 반환값 2개 , 1 state 상태값, 2, 이벤트 핸들러 함수
  // 비구조화 할당 문법으로
  const [state, onChange] = useInfoInputFunc({ name: "", nickname: "" });
  const { name, nickname } = state;

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

export default InfoTestCustomHooks9;
