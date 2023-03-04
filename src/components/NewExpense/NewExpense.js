// 사용자들이 비용 데이터를 입력하는 화면
import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm.js';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  // 자식 => 부모로 컴포넌트 전달하기
  const saveExpenseDataHandler = (enteredExpenseDate) => {
    // ExpenseForm안에서 실행됨
    const expenseData = {
      ...enteredExpenseDate, // submitHandler에서 생성된 객체
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  // 함수를 가르키기만해서 함수 자체가 ExpenseForm으로 전달됨
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
