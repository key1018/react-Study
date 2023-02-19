import React, { useState } from 'react';
// 해당 변수를 변경하고 싶으면 리액트 라이브러리에서 임포트할 것이 있다.
// 이러헤 추가하는 것을 'named import'라고 한다.

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// 비용관련 컴포넌트
// 기본적인 사용자 지정 컴포넌트
const ExpenseItem = (props) => {
  /*
  return (
      <div>Date</div>
      <div>
        <h2>Title</h2><div>Amount</div>
      </div>);
  -> 유효하지 않은 코드 
  리액트 컴포넌트는 컴포넌트 안에 반환하는 html파일 즉, JSX파일에 중요한 규칙이 있다.
  반환하는 문장마다 또는 JSX코드마다 반드시 한 개의 루트 요소를 갖는다트
  현재 여러개의 <div>태그가 있는데 그 말은 이 문장에 2개의 루트요소를 가진다는 뜻이 된다.
  */

  /*
  사용자 지정 컴포넌트가 아닌 메인 컴포넌트에 있어야됨!
  const expenseDate = new Date(2021, 2, 28); // 보통의 자바스크립트 => 리액트아 연관없음
  // <div>{expenseDate}</div> => Date는 객체이므로 해당 식으로 텍스트로 출력될 수 없다.
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;
  */

  // useState 함수 사용 방법 => 컴포넌트 함수 안에서 useState 함수를 호출하면 된다.
  const [title, setTitle] = useState(props.title);
  // 첫번째 요소는 변수 자체인 배열을 반환(현재 상태값)하고 두번째 요소는 업데이트되는 함수이다.
  // 즉, title은 관리되고 있는 현재의 값(props.title), setTitle은 새로운 title을 설정하기 위해 호출할 수 있는 함수이다.

  //let title = props.title;

  const clickHandler = () => {
    console.log(title);
    //title = 'Updated!'; // 클릭해도 title의 값은 변하지 않음
    // 왜? 리액트는 현재 방식으로 작동되지 않는다.
    // 변수인 title은 clickHandler가 실행될 때 변경되는때 사실은 return이라는 컴포넌트가 재평가되면서 생기는 결과값이고
    // 값(title값이 변경될 때)이 변경되었을 때 화면에 다시 그려진다.
    // 하지만 기본적으로 일반적인 변수는 재평가로는 트리거되지 않는다.
    // 컴포넌트 함수에 변수를 갖고 있고 변ㅅ가 변경되었다고해도 리액트는 무시하고 코드가 실행되어도 신경쓰지 않는다.
    // 즉, 만약 다시 실행되도 해당 변수는 다시 다뤄져서 props.title로 초기화된다.

    setTitle('Updated!'); // 새로운 값을 할당
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

// 내보내기
export default ExpenseItem;
