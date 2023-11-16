import React from "react";
//부산 도보 여행 요소로 구성.
//기존 css 재사용
// 가지고 올 데이터 부분 변경.
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

const PublicItem2 = ({ article }) => {
  // article : 각 기사의 내용을 담은 객체.
  // 비구조화 할당으로 각 각 할당.
  // 선택할 요소: 1)MAIN_TITLE 2)MAIN_IMG_THUMB 3)TRFC_INFO 4)ITEMCNTNTS
  const { MAIN_TITLE, TRFC_INFO, MAIN_IMG_THUMB, ITEMCNTNTS } = article;
  return (
    <NewsItemCss>
      {/* 조건부 렌더링으로 출력하기.  */}

      {MAIN_IMG_THUMB && (
        <div className="thumbnail">
          {/* 링크 클릭시, target="_blank" : 새창 으로 열기 
          rel="noopener noreferrer" : 새창으로 열었을 때, 
          원본 링크의 참조라든지, 개인 정보 부분을 막아주기. */}

          <img src={MAIN_IMG_THUMB} alt="thumbnail" />
        </div>
      )}
      <div className="contents">
        <h2>{MAIN_TITLE}</h2>
        <p>교통정보: {TRFC_INFO}</p>
        <p>설명 : {ITEMCNTNTS}</p>
      </div>
    </NewsItemCss>
  );
};
export default PublicItem2;
