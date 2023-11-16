import React, { useCallback, useRef, useReducer } from "react";
import styled from "styled-components";
import TodoBase from "./TodoBase";
import TodoInsert from "./TodoInsert";

import TodoList from "./TodoList";

const MainCss = styled.div`
  margin: 0;
  padding: 0;

  background: #e9ecef;
`;


const TodoMain = () => {


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

  const nextId = useRef(20001);

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

  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const onInsert = useCallback(
    (text) => {
      const todo = {

        id: nextId.current,
        text,
        checked: false,
      };

      dispatch({ type: "INSERT", todo });

      nextId.current += 1;
    },
    []
  );

  const onRemove = useCallback(
    (id) => {
      dispatch({ type: "REMOVE", id });
    },

    []
  );


  const onToggle = useCallback(
    (id) => {

      dispatch({ type: "TOGGLE", id });
    },

    []
  );

  return (
    <MainCss>
      <TodoBase>
        <TodoInsert onInsert={onInsert} />

        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoBase>
    </MainCss>
  );
};

export default TodoMain;
