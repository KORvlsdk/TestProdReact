// 부모 : App, 자식 : TodoMain
// 자식 : TodoMain (베이스 컴포넌트)
// 전체 가운데 요소로 정렬 시켜주는 템플릿 :TodoBase
// 1)제목 2) 입력란:TodoInsert 3) 리스트 4) 리스트의 아이템 등.

import React, { useCallback, useRef, useState, useReducer } from "react";
import styled from "styled-components";
// import { AiFillApple } from "react-icons/ai";
import TodoBase from "./TodoBase";
import TodoInsert from "./TodoInsert";

import TodoList from "./TodoList";

const Main_css = styled.div`
  margin: 0;
  padding: 0;
  //회색, 배경색은 나중에 본인이 좋아하는 색으로 변경.
  background: #e9ecef;
`;

// Todo 만들기 준비 메인 <AiFillApple />
const TodoMain = () => {
  //문제점 제시, 더미 데이터 약 3000개로 추가하고,
  //느려지는 부분 만든 후, 확인, 적용해보기.

  const createBulkTodos = () => {
    const array = [];
    for (let i = 1; i <= 20000; i++) {
      array.push({
        id: i,
        text: `더미 데이터 : ${i}`,
        checked: false,
      });
    }
    return array;
  };
  // createBulkTodos() 의 결과 배열 -> todos 의 초깃값으로 설정.
  // createBulkTodos() 사용시 : 1회만 호출
  // , createBulkTodos 매번 새롭게 만듦. , 차이점

  // const [todos, setTodos] = useState(createBulkTodos());

  //샘플 더미 데이터를 임시 배열에 만들어서, 전달. props 테스트
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: "더미 데이터 요소 1번입니다.",
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: "더미 데이터 요소 2번입니다.",
  //     checked: false,
  //   },
  //   {
  //     id: 3,
  //     text: "더미 데이터 요소 3번입니다.",
  //     checked: true,
  //   },
  // ]);

  //추가로 입력이 되는 todo 부분의 아이디를 id : 4부터 할당 할 예정.
  // const nextId = useRef(4);

  // 3000개 더미 데이터라서, 다음 번호
  const nextId = useRef(20001);

  // TodoMain -> TodoInsert 자식 컴포넌트에게, props로 함수를 전달하기.
  // onInsert 라는 함수는, onChange 함수와는 다르게,
  // 매번 새로운 함수를 생성함. 이유는 함수 안에 배열이 변경이 되어서,
  // todos 배열의 변경에 따라서 , 동작하게 만들기.

  // 방법1) useCallback에서 , 세터 함수 (값 형태x => 함수형태)
  //    추가로, 의존성 배열 모양을 빈배열 [] , 함수 생성을 1회만 했다는점.

  // 방법2) 성능상 큰 차이 없고, 규모가 커지고, 상태를 관리해주는 라이브러리 Redux 사용하게되면
  // useReducer를 이용하게 됩니다.

  // 순서1) useReducer 를 임포트
  // import { useReducer } from "react";
  // 준비물 , 1) 리듀서 함수, 2) useReducer 생성 3) dispatch 함수를 호출.

  // 페이징, 한번에 데이터 전부 다 불러오는게 아니라, 눈에 보이는 정도의 크기만 불러옵니다.
  // 예를 들어서 ) 현재, 20000개를 데이터를 다 불러오고 있음.
  // 하지만, 실제로 스크롤을 내리지 않는 이상, 한번에 전체 데이터를 다 볼수 없음.
  // 결론, 일부분만 봄. 그래서, 9개만 본다고 치면, 나머지 19991개는 불필요한 데이터 트래픽이 발생함.
  // 내가 볼수 있는 양만큼 잘라서, 불러오자.
  // 준비물 )
  // 모듈을 설치하기.
  // yarn add react-virtualized 설치
  // npm install react-virtualized 설치
  // 2) 각 아이템 요소의 높이를 구해야함. 첫번째 요소가 말고, 두번째 요소부터의 높이를 구하기.
  // 왜냐하면? 첫번째 항목은 테두리가 없어서,
  // 첫번째 높이 56px,  두번째 부터 : 57px , TodoList 사이즈 : 512x513(57*9 = 513)
  // 3) TodoList 이동하기.

  //1) 리듀서 함수
  const todoReducer = (todos, action) => {
    switch (action.type) {
      case "INSERT":
        return todos.concat(action.todo);
      case "REMOVE":
        return todos.filter((todo) => todo.id !== action.id);
      case "TOGGLE":
        return todos.map((todo) =>
          todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
        );
      default:
        return todos;
    }
  };

  // 2) useReducer 생성 -> 기존에 더미 데이터를 만드는 부분이 있어서, 위에 부분 주석하기.
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        //  const nextId = useRef(4); 4부터 할당.
        id: nextId.current,
        text,
        checked: false,
      };
      // setTodos(todos.concat(todo));
      // 성능 개선 2번째,
      // 기존과의 차이점이, useCallback, 의존성 배열이 값이 변경시 마다, 새로 함수를 생성하는 부분을
      // 방법1), 기존에 값으로 변경하는 것 -> 함수 형태로 변경.
      // 매번 새롭게 함수를 생성할 필요가 없음.
      // setTodos((todos) => todos.concat(todo));

      // 3) dispatch 함수를 호출.
      dispatch({ type: "INSERT", todo });

      nextId.current += 1;
    },
    // [todos]
    // 성능 개선 2번째,  의존성 배열 부분 비우기.
    []
  );

  // 지우기 기능 함수 추가하기.
  // 데이터 추가시 : 내장 함수 , concat 이용해서, 새로운 배열생성.
  // 데이터 삭제시 : 내장 함수, filter 이용해서,  새로운 배열생성.
  // 콜백함수 , 조건 일치하는 요소만 뽑아서, 새로 생성함.
  const onRemove = useCallback(
    (id) => {
      // 만약, id가 2를 선택했다면, todo.id !== id,
      // 선택된 id 2를 제외한 나머지 요소를 뽑아서(필터해서) 새로운 배열 생성
      // 결론, 선택된 id 2를 제거하는 효과와 같다.
      // setTodos(todos.filter((todo) => todo.id !== id));
      // 성능개선 2번째, 함수 형태로 변경하고, 의존성 배열에서, todos 참조안하기.
      // 결론, 새롭게 매번 함수 생성을 안함.
      // setTodos((todos) => todos.filter((todo) => todo.id !== id));

      // 3) dispatch 함수를 호출.
      dispatch({ type: "REMOVE", id });
    },
    // [todos]
    // 의존성 배열 없이 동작.
    []
  );

  //토글(스위치, on/off), checkbox 부분에 , 이벤트 핸들러 추가하기.
  // onToggle 이라는 이름. 함수를 자식 컴포넌트에게 전달하기.
  // 설정, 순서1
  const onToggle = useCallback(
    (id) => {
      // setTodos(
      //   //선택된 todo의 id가 일치하면, 기존 배열을 복사해서, 선택된 id의 속성 checked 부분 변경시키기
      //   // todos.map((todo) =>
      //   //   todo.id === id ? { ...todo, checked: !todo.checked } : todo
      //   // 성능 개선 2번째, 값이 아니라, 함수형태로 변경.
      //   (todos) =>
      //     todos.map((todo) =>
      //       todo.id === id ? { ...todo, checked: !todo.checked } : todo
      //     )
      // );

      // 3) dispatch 함수를 호출.
      dispatch({ type: "TOGGLE", id });
    },
    // [todos]
    // 성능개선 2번째, 의존성 배열 없애기.
    []
  );

  return (
    <Main_css>
      <TodoBase>
        {/* 위에서 만든 useCallback 함수를 자식 컴포넌트에게 전달하기. */}
        <TodoInsert onInsert={onInsert} />
        {/* 위에서 만든 임시 데이터 배열를 전달 : props 속성으로 전달 */}
        {/* 제거하는 함수를 props를 이용해서, 전달 */}
        {/* 순서2, 적용하기. 체크하는 함수를 props를 이용해서, 전달 */}
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoBase>
    </Main_css>
  );
};

export default TodoMain;
