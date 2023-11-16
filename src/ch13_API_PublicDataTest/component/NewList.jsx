import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "../model/NewsItem";
import axios from "axios";
import PublicItem from "../model/PublicItem";
import PublicItem2 from "../model/PublicItem2";


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

const NewList = ({ category }) => {

  const [articles, setArticles] = useState(null);

  const [loading, setLoading] = useState(false);


  const [datatype, setDatatype] = useState(0);

  useEffect(() => {
    const resultData = async () => {
      setLoading(true);

      try {

        const query = category === "all" ? "" : `&category=${category}`;

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


      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }; 
    resultData();

  }, [category]); //의존성 배열 부분의 모양은 빈배열, 최초 1회 마운트시 한번만 호출.

  // 주의사항, 데이터 널 체크하기.
  if (loading) {
    return <NewListCss>데이터 받는중(대기중 ....)</NewListCss>;
  }

  // 데이터를 못받아 왔을 경우, 화면에 아무것도 안그리기.
  if (!articles) {
    return null;
  }


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

    </NewListCss>
  );
};

export default NewList;
