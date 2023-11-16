// 클래스형 컴포넌트
//rcc
import { Button } from "antd";
import React, { Component } from "react";

class LifeCycleTest extends Component {
  // 클래스형 컴포넌트에 사용되는 초깃값 세팅 모양.
  // 함수형 컴포넌트 비교
  // 생명주기를 알아보기 위한 예제코드
  // 리액트 다루는 기술 저자 , 김민준, velopert 검색하시면,
  // 관련 문서 엄청 많고, 정리도 매우 깔끔 , 추천.!
  // const [ number, setNumber] = useState(0)
  state = {
    number: 0,
    color: null,
  };
  // useRef 처럼, 특정의 태그 요소에 접근하기 위한 도구로 사용.
  // 예) 웹, document.getElementById
  // 예) 앱, findByViewId ,
  // 메서드 이름이 틀릴수 있음.
  myRef = null;

  //생성자 호출, 생명주기 1번째

  // 여기서, 부모로 부터 전달 받은 props의 내용이 담겨져 있음.
  // 초기화를 하면서, 자식 입장에서 사용이 된다.
  // props.color 가 들어 있다.
  constructor(props) {
    // 클래스가 혼자 동작 못하고, 반드시 누군가 부모를 상속받아야함.
    // 부모를 초기화 해주기
    super(props);
    console.log("constructor 호출");
  }

  // 생명주기 2번째, getDerivedStateFromProps
  // 마운트 호출, 업데이트 호출. -> 변경시 비교를 함.
  // getDerivedStateFromProps
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("2번째 호출 : getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  //4번째 호출 : 마운트가 완료되었요.
  componentDidMount() {
    console.log("4번째 호출 :componentDidMount 호출 마운트가 완료되었요. ");
  }

  //업데이트 변경을 할까요?
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "2번째 호출 : shouldComponentUpdate 호출. ",
      nextProps,
      nextState
    );
    // 숫자가 일의자리가 4이면 리렌더링 안함.
    return nextState.number % 10 !== 4;
  }

  //언마운트 하나뿐.
  componentWillUnmount() {
    console.log("하나뿐 : componentWillUnmount 호출. ");
  }

  // 업데이트의 4번째 호출 getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "스냅샷확인 : getSnapshotBeforeUpdate 호출. ",
      prevProps.color,
      this.props.color
    );
    if (prevProps.color !== this.props.color) {
      // myRef 특정 태그의 요소를 가리키거나, 작업시 사용.
      // 적용부분.
      return this.myRef.style.color;
    }
    return null;
  }

  // 5번째 호출. 업데이트 완료가 되었다.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("5번째 호출 : componentDidUpdate 호출. ", prevProps, prevState);
    if (snapshot) {
      console.log(" 업데이트 되기전에 색상: ", snapshot);
    }
  }

  //이벤트 핸들러 추가, 숫자 변경
  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };

  //3번째 호출 : 마운트 트리, 화면에 그려주는 역할 함수.
  render() {
    console.log("순서 3번 째 render 호출: 마운트 또는 업데이트시 호출");

    // 기본 스타일링
    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1
          style={style}
          // myRef , 해당 돔을 조회, 사용하기 , 설정2
          // 클래스형 컴포넌트 버전의 , ref 달기.
          // 함수형 컴포넌트
          // 예) myRef = useRef(null)
          // 예) ref = {myRef}
          ref={(ref) => (this.myRef = ref)}
        >
          number 값 조회 : {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <Button
          type="primary"
          // 클래스형 컴포넌트라서, this로
          onClick={this.handleClick}
        >
          더하기 +1
        </Button>
      </div>
    );
  }
}

export default LifeCycleTest;
