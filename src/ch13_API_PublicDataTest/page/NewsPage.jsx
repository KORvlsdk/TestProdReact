import React from "react";
import { useParams } from "react-router-dom";
import Categories from "../component/Categories";
import NewList from "../component/NewList";

const NewsPage = () => {
  // 라우팅에서 경로 뒤에 /:category , 링크 뒤에 파라미터를 속성 설정
  // useParams(); 훅스 이용해서, :category 값을 가져오기.
  // 스프링 부트 , @Pathvariable 비슷함.
  const params = useParams();
  // 카테고리 기본값 : all, 나머지는 선택된 카테고리 값으로 사용.
  const category = params.category || "all";
  return (
    <div>
      {/* 기존에 MainNews 에서 전달하는 방식과 조금 다름. 
      여기서는 NavLink 이용해서 스타일 전달하기.  */}
      <Categories />
      <NewList category={category} />
    </div>
  );
};

export default NewsPage;
