// 사용자 지정 컴포넌트 임포트 하기 => 평범한 html요소처럼 사용하기 위해
// import ExpenseItem from './components/Expenseltem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense.js';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    /* JSX코드 => 자바스크립트 안에 있는 HTML코드
       JSX는 자바스크립트 XML을 의미한다.
      코드를 작성하면 자동적으로 브라우저에서 작동하는 코드로 변환됨
      사용자 지정 컴포넌트는 반드시 대문자로 시작  */
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
