//회원가입 창 처럼 만들기.
import React from "react";
import { useState, useRef } from "react";

//useRef : HTML의 특정 요소에 접근하기위한 id 설정.
// 뷰를 선택하는 도구.

// 프로필 사진을 파일에서 선택 후, 결과 뷰를 보여주기.
// antd : 라이브러리, -> 버튼 뷰, 아바타 뷰 , 샘플를 가져와서 사용.
// 컴포넌트 (레고 블록)
// yarn add antd
// npm install antd
// 공식 문서 : https://ant.design/docs/react/getting-started
// 튜토리얼에서, datepicker, button , space 사용예시 확인.
// Avatar , 프로필 이미지 뷰 -> 결과뷰로 사용함.
// 해당 뷰를 클릭해서, 파일 선택 하는 기능 구현.
// 선택 후 결과 화면 보여주기.
import { Avatar, Button } from "antd";

const Join = () => {
  //프로필 이미지 작업
  //Image : 상태값, 선택된 사진을
  // setImage : 세터, Image 값을 변경하는 함수.
  // 초깃값 세팅.
  const [Image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  // 파일 세팅 , 선택된 파일, 변경하는 함수
  const [File, setFile] = useState("");
  // input 태그에 접근하기 위한 ref 속성달기 -> 뷰에 접근하기위해서 사용.
  // 설정하고 싶은 HTML DOM 요소에 가서,
  // 사용법, 설정 ref = {fileInput}
  // 사용은 해당 DOM 요소 접근시 사용.
  // 설정1
  const fileInput = useRef(null);

  //이벤트 핸들러 추가, 사진이 변경시 동작하는 함수
  const onChangeImage = (e) => {
    // 선택된 파일이 첫번째 사진.
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      // 취소가 발생했다면,
      // 기본 프로필 베이직 사진.
      setImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
      return;
    }

    // 선택된 사진을 , 결과뷰에 출력하는 로직.
    const reader = new FileReader();
    reader.onload = () => {
      // reader.readyState
      // 0 : 비어있는 상태
      // 1: 로딩 중
      // 2: 로딩 완료
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    // 파일 데이터를 URL로 읽어오는 함수
    reader.readAsDataURL(e.target.files[0]);
  };

  // 방법1
  //useState 이용해서, 현재 상태값 , 세터 함수 정의하기.
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  //방법2  , 특정 객체에 담아서(박스(모델)에 담아서)
  // 초깃값으로 객체를 선언 했음.
  // form 상태값에, 객체가 할당이 됨.
  // 앞에 부분과 비교하면, 앞에 개별적으로 처리했고, 객체에 담아서 일괄처리.
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // 비구조화 할당으로
  const { email, password } = form;

  // onChange, onClick , onKeyPress 등 확인.
  // input 입력된 값의 변경 유무를 확인.
  // 방법1
  // const onChangeEmail = (e) => setEmail(e.target.value);

  // 방법2 , form 내부에 값이 변경시 처리하는 로직.
  const onChangeForm = (e) => {
    const nextForm = {
      ...form,
      // email input -> name : email , value : 실제 입력된 값
      // password input -> name : password , value : 실제 입력된 값
      [e.target.name]: e.target.value,
    };
    // 입력된 email, password  업데이트 해주는 함수 : 세터와 동일.
    setForm(nextForm);
  };

  // 추가 패스워드 변경 부분, 해당 뷰에 나타내기 테스트. -> 나중에 데이터 전달
  // 통신 라이브러리 사용함, axios 사용할 예정. 파이어베이스를 연동부분. 할예정.
  // 방법1
  // const onChangePassword = (e) => setPassword(e.target.value);

  // 클릭 이벤트 발생시 값을 확인.
  // 방법1
  // const onClick = () => {
  //   alert("email: " + email + ", password : " + password);
  //   setEmail("");
  //   setPassword("");
  // };

  // 방법2. form 객체에 담아서 일괄 처리. 하는중.
  const onClick = () => {
    alert("email: " + email + ", password : " + password);
    setForm({
      email: "",
      password: "",
    });
  };

  // 키보드에서 엔터 키 입력시, 클릭 이벤트 호출 연결 확인.
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 확인 중. </h1>
      {/* 프로필 이미지 아바타 뷰 사용 */}
      <Avatar
        src={Image}
        size={200}
        //적용, 해당 이미지 클릭이 되면,

        // 설정3, 적용
        // 밑에 있던, input 요소를 클릭하는 것과 동일 효과.
        onClick={() => fileInput.current.click()}
      />
      <input
        type="file"
        style={{ display: "none" }}
        accept="image/jpg, image/png, image/jpeg"
        name="profileImg"
        onChange={onChangeImage}
        //  설정2
        ref={fileInput}
      />

      <h2>이메일 : {email}</h2>
      <h2>패스워드 : {password}</h2>
      <input
        type="text"
        name="email"
        placeholder="이메일 입력해주세요."
        value={email}
        // 방법1
        // onChange={onChangeEmail}
        // 방법2
        onChange={onChangeForm}
        onKeyPress={onKeyPress}
      />
      <br />
      <input
        type="text"
        name="password"
        placeholder="패스워드를 입력해주세요."
        value={password}
        // 방법1
        // onChange={onChangePassword}
        // 방법2
        onChange={onChangeForm}
        onKeyPress={onKeyPress}
      />
      <br />
      <Button onClick={onClick} type="primary">
        회원가입
      </Button>
    </div>
  );
};

export default Join;
