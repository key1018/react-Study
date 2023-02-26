import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // 같은 개념이 3번 반복된 것으로 한 번의 state로 해결하도록 하자
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    // ...userInput, // 스프레드연산자 사용하기
    // enteredTitle: event.target.value, // 하나의 객체를 관리하기 위해서 다른 객체의 데아터를 잃어버리기 않기 위해 주의해야한다.
    // 그러기 위해서는 여기서 업데이트하지않는 값들을 수동으로 복사해야된다.
    // });

    // 하지만 위의 state방식은 특정 사례(하나씩 증가하는 카운터를 관리하는 경우)에서 오류가 발생할 수 있다
    // 문제ㄹ는 무엇인가? 이 경우에 우리는 이전 state에 의존하고 있는데 세 개의 상태로 접경하는 것이 아니라 하나로 접근하는 방법을 사용하고 있다.
    // 그래서 다른 값을 복사해서 잃어버리지 않도록 해야한다. 따라서 기존 값을 복사하기 위해 이전 state의 스냅샷에 의존하고
    // 그런 다음 새로운 값으로 오버라이드한다.

    // setUserInput((prevState) => {
    //   // 이전의 state 스냅샷 받기 (userInput의 현재값)
    //   return { ...prevState, enteredTitle: event.target.value }; // 새로운 state의 스냅샷 반환하기
    // }); // setUserInpur 함수 호출해서 함수 전달하기
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // 기본 요청이 보내지는 것을 막는 이벤트 (페이지 reload막기)

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); // NewExpense.js에 있는 onSaveExpenseData에 접근해서 실행하기
    // => onSaveExpenseData 키에서 얻은 값이 함수이기 때문에 실행할 수 있다.
    setEnteredTitle(''); // 사용자가 입력한 폼 다시 초기화하기
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
