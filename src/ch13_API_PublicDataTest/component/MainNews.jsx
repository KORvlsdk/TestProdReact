import React, { useCallback, useState } from "react";
import NewList from "./NewList";
import Categories from "./Categories";

const MainNews = () => {
  //뉴스 메인에서, 카테고리 값을 state 관리, props 로 전달해서, 이벤트 핸들러 추가.
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => {
    setCategory(category);
  }, []);

  return (
    <div>
      {/* 부모 컴포넌트에서(MainNews)
      자식 컴포넌트1(Categories)
      자식 컴포넌트2(NewList) -> NewsItem 자식 컴포넌트3
      , props 속성으로 전달, 1) 선택된 카테고리 값
      2) 카테고리를 선택하는 함수 전달. */}
      <Categories category={category} onSelect={onSelect} />
      <NewList category={category} />
    </div>
  );
};

export default MainNews;
