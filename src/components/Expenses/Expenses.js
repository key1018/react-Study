import React, { useState } from 'react';

import ExpenseItem from './Expenseltem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState('2023');

  const changeFilterYearHandler = (changeYear) => {
    setFilterYear(changeYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // props.items.map() 이란?
  // => 다른 배열을 기반으로 새로운 배열을 생성하는데, 원본 배열에 있는 모든 요소들을 변환함.

  // props.item.filter() 이란?
  // => 새로운 배열을 반환하는 내장된 메소드로 원래의 배열에 추가되지 않고 완전히 새로운 배열이 반환된다.
  // 반환된 배열에 아이템을 유지하거나 제거하고 원래 배열은 건드리지 않는다.

  // .getFullYear() 이란?
  // => date에서 4자리수 연도를 추출하는 메소드

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilterYear={changeFilterYearHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
