import React from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
const App = () => (
  <div style={{width: '60%', margin: 'auto'}}>
    <h2>New Expense</h2>
    <ExpenseForm></ExpenseForm>
    <h2>Your expenses</h2>
    <ExpenseList></ExpenseList>
  </div>
)

export default App;
