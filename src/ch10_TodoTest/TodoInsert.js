import React, { useCallback, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import styled from "styled-components";

// 아이콘 가지고 올 이름
// io IoMdAddCircleOutline
// css
// 1.FormCss
// 2. FormInputCss
// 3. FormButtonCss
const FormCss = styled.form`
  display: flex;
  background: white;
`;
const FormInputCss = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: navy;
  &::placeholder {
    color: black;
  }
  flex: 1;
`;
const FormButtonCss = styled.button`
  background: none;
  outline: none;
  border: none;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 1s background ease-in;
  &:hover {
    background: blue;
  }
`;

// 부모에서 <TodoInsert onInsert={onInsert} />

const TodoInsert = ({ onInsert }) => {
  // 추가 기능 넣기,
  // 기본 state 이용해서 작업 하기.
  const [value, setValue] = useState("");

  //이벤트 핸들러 추가
  // useCallback(콜백함수, 의존성 배열)
  // 의존성 배열 모양 , 빈 배열이라서, 최초 1회만 해당 함수를 만들겠다.
  // onChange 라는 함수를 계속 새로 만들지 말자.
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // onSubmit 라는 함수를 임의로 만들어서, 넘어온 함수를 사용하기.
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );

  // 뭔가 추가를 할 때, onClick 이라는 이벤트 핸들러 추가하고,
  // 또한, onKeyPress 라는 핸들러도 추가를 했음.
  // 그런데,
  // onSubmit 속성으로 구성을 하면, input 에서 값을 입력 후, 그냥 엔터를 해도
  // 입력이 됨.

  return (
    // 적용하기. 넘어온 함수 이벤트 부분 적용하기
    <FormCss onSubmit={onSubmit}>
      <FormInputCss
        // 추가하기, state 를 이용해서, value , onChage 속성 사용하기.
        value={value}
        onChange={onChange}
        placeholder="Todo 입력해주세요"
      />
      <FormButtonCss type="submit">
        <IoMdAddCircleOutline />
      </FormButtonCss>
    </FormCss>
  );
};

export default TodoInsert;
