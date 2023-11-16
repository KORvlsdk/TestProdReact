// 모델 구조 :
// 키 : articles  , 값 : [{기사객체},{기사객체},{기사객체},...]
// 가지고 올 데이터 :
// 1) title 2) description 3) url 4) urlToImage
import React from "react";
import styled from "styled-components";
// css 작업 대상,
// 1) 이미지 2) 콘텐츠 내용
const NewsItemCss = styled.div`
  display: flex;

  //이미지, thumbnail
  .thumbnail {
    margin-right: 1rem;

    img {
      display: block;
      width: 170px;
      height: 130px;
      // 해당 사이즈에 비율에 맞게 이미지 크기 조정.
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      a {
        color: blue;
      }
    }

    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      //텍스나 내용이 일반적인 공백과 줄 바꿈 규칙을 따름.
      // 브라우저의 너비에 따라 자동으로 줄바꿈됨.
      white-space: normal;
    }
  }

  // & : 현재 요소 , 각 뉴스 목록의 요소
  // 각 뉴스 아이템 요소가 배치가 될때, 간격을 주겠다.
  // & + & : 형제 연산자, 요소의 이웃, 같은 요소를 나열 시.
  //
  & + & {
    margin-top: 3rem;
  }
`;

// 자식 컴포넌트이고, 부모 컴포넌트로 부터, 데이터를 받아와서,
// 받은 데이터를 출력하는 형태.
const NewsItem = ({ article }) => {
  // article : 각 기사의 내용을 담은 객체.
  // 비구조화 할당으로 각 각 할당.
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemCss>
      {/* 조건부 렌더링으로 출력하기.  */}

      {urlToImage && (
        <div className="thumbnail">
          {/* 링크 클릭시, target="_blank" : 새창 으로 열기 
          rel="noopener noreferrer" : 새창으로 열었을 때, 
          원본 링크의 참조라든지, 개인 정보 부분을 막아주기. */}
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemCss>
  );
};

export default NewsItem;
