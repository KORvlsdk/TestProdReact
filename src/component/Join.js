//회원가입 창 처럼 만들기.
import React from "react";
import { useState, useRef } from "react";


import { Avatar, Button } from "antd";

const Join = () => {

  const [Image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  // 파일 세팅 , 선택된 파일, 변경하는 함수
  const [File, setFile] = useState("");

  const fileInput = useRef(null);

  //이벤트 핸들러 추가, 사진이 변경시 동작하는 함수
  const onChangeImage = (e) => {
    // 선택된 파일이 첫번째 사진.
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      console.log(File);
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


  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // 비구조화 할당으로
  const { email, password } = form;

  const onChangeForm = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(nextForm);
  };

  const onClick = () => {
    alert("email: " + email + ", password : " + password);
    setForm({
      email: "",
      password: "",
    });
  };

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
