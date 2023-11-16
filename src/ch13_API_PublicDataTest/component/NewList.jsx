import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "../model/NewsItem";
import axios from "axios";
import PublicItem from "../model/PublicItem";
import PublicItem2 from "../model/PublicItem2";

// 뉴스 아이템 요소를 출력을 감싸는 목록부분에 해당하고,
// 미디어쿼리 넣어서, 약간 반응형으로, 특정 크기를 기준으로
// 웹 브라우저의 창의 크기가 변경시, 화면 사이즈 적용되기.
const NewListCss = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// 더미 데이터
const sampleArticle = {
  title: "제목",
  description: "내용",
  url: "https://www.naver.com",
  urlToImage: "https://via.placeholder.com/160",
};
{
  /* <NewList category={category} /> */
}
const NewList = ({ category }) => {
  // useEffect 이용해서, 마운트시, 최초 1회 데이터 받아오기.
  // create, update, delete 없어서,
  // 단순, 데이터 만 가져오기 때문에,
  // REST API 서버에서 데이터를 다 받으면, articles 에 넣기.
  const [articles, setArticles] = useState(null);
  // 만약, 데이터를 받고 있는 중이면, loading 값을 true,
  // 데이터를 다 받으면, loading 값을 false 로 변경하기.
  const [loading, setLoading] = useState(false);

  //상태변수, 뉴스(0), 공공데이터(1,2)에 따라서
  const [datatype, setDatatype] = useState(0);

  useEffect(() => {
    const resultData = async () => {
      setLoading(true);

      try {
        // 카테고리별로, url 주소 변경하기.
        const query = category === "all" ? "" : `&category=${category}`;
        // 부산테마먹거리 API 주소, busanFood
        // 리팩토링은 잠시 대기.
        // const query2 = category === "busanFood" ? `FoodService/getFoodKr` : "";
        // const query3 = category === "busanWalking" ? `WalkingService/getWalkingKr` : "";
        // const response = await axios.get(
        //   `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`
        // );
        switch (query) {
          case "":
            // 뉴스 API 주소 전체 주제
            const response = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr&apiKey=b7adb4f936494b3bac62f446ab7686cb`
            );
            setArticles(response.data.articles);
            // 상태변수, 타입 지정.
            setDatatype(0);
            break;
          case "&category=business":
            // 뉴스 API 주소 business 주제
            const response_business = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`
            );
            setArticles(response_business.data.articles);
            // 상태변수, 타입 지정.
            setDatatype(0);
            break;
          case "&category=entertainment":
            // 뉴스 API 주소 entertainment 주제
            const response_entertainment = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`
            );
            setArticles(response_entertainment.data.articles);
            // 상태변수, 타입 지정.
            setDatatype(0);
            break;
          case "&category=health":
            // 뉴스 API 주소 health 주제
            const response_health = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`
            );
            setArticles(response_health.data.articles);
            // 상태변수, 타입 지정.
            setDatatype(0);
            break;
          case "&category=science":
            // 뉴스 API 주소 science 주제
            const response_science = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`
            );
            setArticles(response_science.data.articles);
            // 상태변수, 타입 지정.
            setDatatype(0);
            break;
          case "&category=sports":
            // 뉴스 API 주소 sports 주제
            const response_sports = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`
            );
            setArticles(response_sports.data.articles);
            // 상태변수, 타입 지정.
            setDatatype(0);
            break;
          case "&category=technology":
            // 뉴스 API 주소 technology 주제
            const response_technology = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`
            );
            setArticles(response_technology.data.articles);
            // 상태변수, 타입 지정.
            setDatatype(0);
            break;
          case "&category=busanFood":
            const response3 = await axios.get(
              `https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=ALRX9GpugtvHxcIO%2FiPg1vXIQKi0E6Kk1ns4imt8BLTgdvSlH%2FAKv%2BA1GcGUQgzuzqM3Uv1ZGgpG5erOTDcYRQ%3D%3D&numOfRows=100&pageNo=1&resultType=json`
            );
            setArticles(response3.data.getFoodKr.item);
            // 상태변수, 타입 지정.
            setDatatype(1);
            break;
          case "&category=busanWalking":
            // 부산도보여행 API 주소, busanWalking
            const response4 = await axios.get(
              `https://apis.data.go.kr/6260000/WalkingService/getWalkingKr?serviceKey=ALRX9GpugtvHxcIO%2FiPg1vXIQKi0E6Kk1ns4imt8BLTgdvSlH%2FAKv%2BA1GcGUQgzuzqM3Uv1ZGgpG5erOTDcYRQ%3D%3D&pageNo=1&numOfRows=100&resultType=json`
            );
            setArticles(response4.data.getWalkingKr.item);
            // 상태변수, 타입 지정.
            setDatatype(2);
            break;
          default:
            alert("카테고리를 선택해주세요.");
        }

        //console.log(response.data)
        // 해당 주소를 입력해서, 모델링 조사할 때, 이미 구조를 다 봤음.
        // setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }; // resultData async 함수 블록 끝부분,
    // 비동기 함수 만들어서, 사용하기.
    resultData();
    // category 의 값에 따라서 새로운 함수를 생성함.
  }, [category]); //의존성 배열 부분의 모양은 빈배열, 최초 1회 마운트시 한번만 호출.

  // 주의사항, 데이터 널 체크하기.
  if (loading) {
    return <NewListCss>데이터 받는중(대기중 ....)</NewListCss>;
  }

  // 데이터를 못받아 왔을 경우, 화면에 아무것도 안그리기.
  if (!articles) {
    return null;
  }

  // 로딩도 끝나고, 받아온 데이터가 존재 한다면, 그때 그리기.

  // 각 화면을 그리기 위한, 하나의 함수를 만들었음.
  // datatype 에따라서, 렌더링을 다르게 했음.
  const choosePage = ({ articles }) => {
    switch (datatype) {
      case 0:
        return (
          <div>
            {articles.map((article) => (
              <NewsItem key={article.url} article={article} />
            ))}
          </div>
        );
      case 1:
        return (
          <div>
            {articles.map((article) => (
              <PublicItem key={article.MAIN_IMG_THUMB} article={article} />
            ))}
          </div>
        );
      case 2:
        return (
          <div>
            {articles.map((article) => (
              <PublicItem2 key={article.MAIN_IMG_THUMB} article={article} />
            ))}
          </div>
        );
      default:
        return;
    }
  };

  return (
    <NewListCss>
      {choosePage({ articles })}
      {/* {articles.map((article) => (
        // 부모 컴포넌트 : NewList -> 자식 컴포넌트 NewsItem에게 props 로 속성을 전달.
        // article={article} , 하나의 기사의 내용을 통째로 전달.

        <NewsItem key={article.url} article={article} />
      ))} */}
      {/* <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} /> */}
    </NewListCss>
  );
};

export default NewList;
