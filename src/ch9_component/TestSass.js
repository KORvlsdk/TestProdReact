//방금 만든 css 문법을 테스트할 빈도화지

// CSS Modul 테스트 해보기.
// 만든 CSSModule.module.css 불러오기
import cssmodule from "./CSSModule.module.css";

import React from "react";
import "./SassComponent.scss";

const TestSass = () => {
  // [파일이름]_[클래스이름]_[해시값]
  // 크롬 개발자 도구에서, 해당 태그명을 확인하면 됨.
  // CSSModule_wrapper__QTMto CSSModule_wrapper2__W8hXm

  return (
    <>
      {/* CSS Modul 테스트 해보기. 적용하기. */}
      <div className={cssmodule.wrapper}>CSS Modul 테스트 해보기</div>
      <div className="testGlobal">CSS Modul testGlobal 테스트 해보기2</div>
      {/* 크롬 개발자 도구에서, 해당 태그명을 확인하면 됨. 
   CSSModule_wrapper__QTMto CSSModule_wrapper2__W8hX */}
      {/* '' : 작은 따옴표, " " : 큰 따옴표, `` : 백틱 */}
      <div className={`${cssmodule.wrapper} ${cssmodule.wrapper2}`}>
        CSS Modul 테스트 해보기 2개 클래스 적용해보기.{" "}
      </div>
      <div className="SassTest">
        <div className="box red"></div>
        <div className="box blue"></div>
        <div className="box green"></div>
      </div>
    </>
  );
};

export default TestSass;
