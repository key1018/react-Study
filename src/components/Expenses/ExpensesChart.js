import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of props.expenses) {
    // 모든 비용을 계산해서 각 달의 모든 비용을 환산
    const expenseMonth = expense.date.getMonth(); // starting at 0 => Jan => 0
    chartDataPoints[expenseMonth].value += expense.amount; // 특정 달의 값을 증가시킴
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
