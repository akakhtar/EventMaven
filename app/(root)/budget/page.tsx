'use client'
import React, { useState } from 'react';
import BudgetCard from '@/components/shared/BudgetCard'; // Adjust the import path based on your project structure
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"

const BudgetDashboard: React.FC = () => {
  // State for event budget
  const [eventBudget, setEventBudget] = useState<number | null>(null);

  // State for expenses
  const [expenses, setExpenses] = useState<{ category: string; amount: number }[]>([]);

  // State for tracking expense category and amount
  const [expenseCategory, setExpenseCategory] = useState<string>('');
  const [expenseAmount, setExpenseAmount] = useState<string>('');

 // State for budget allocation
  const [allocatedBudget, setAllocatedBudget] = useState<number | null>(null);
  
  const [eventName, setEventName] = useState('');

  const saveEventName = (name: string) => {
    setEventName(name);
  };

  // Function to allocate event budget
  const allocateBudget = () => {
    if (allocatedBudget !== null) {
      setEventBudget(allocatedBudget);
    }
  };
  // Function to handle adding expense
  const addExpense = () => {
    if (expenseCategory !== '' && expenseAmount !== '') {
      setExpenses([...expenses, { category: expenseCategory, amount: Number(expenseAmount) }]);
      // Reset expense category and amount fields
      setExpenseCategory('');
      setExpenseAmount('');
    }
  };

  // Function to calculate total expenses
  const calculateTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  // Function to calculate available budget
  const calculateAvailableBudget = () => {
    if (eventBudget === null) {
      return 0;
    }
    return eventBudget - calculateTotalExpenses();
  };

  // Function to calculate percentage for each category
  const calculateCategoryPercentage = (category: string) => {
    const totalExpenses = calculateTotalExpenses();
    const categoryExpenses = expenses.filter((expense) => expense.category === category).reduce((total, expense) => total + expense.amount, 0);
    return totalExpenses === 0 ? 0 : Math.round((categoryExpenses / totalExpenses) * 100);
  };


   // Function to reset all values
   const resetValues = () => {
    setEventBudget(null);
    setAllocatedBudget(null);
    setExpenses([]);
    setExpenseCategory('');
    setExpenseAmount('');
  };
  return (
     <div className='container mx-auto p-4'>
      <div className='flex justify-center mb-4'>
      <h1 className="text-2xl font-semibold ">Budget Management</h1>
      </div>

    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        
      <BudgetCard title="Total Budget" value={eventBudget === null ? 'Not allocated' : `$${eventBudget}`} />

  
      <BudgetCard title="Total Expenses" value={`$${calculateTotalExpenses()}`} />

      
      <BudgetCard title="Available Budget" value={eventBudget === null ? 'Not allocated' : calculateAvailableBudget() === null ? 'Calculating...' : `$${calculateAvailableBudget()}`} />
     
        <div className="bg-white rounded shadow p-4">
  <h2 className="text-lg font-semibold mb-2">Enter Event Name</h2>
  <Input
    type="text"
    className="border border-gray-300 rounded p-2 mb-2"
    placeholder="Enter event name"
    value={eventName}
    onChange={(e) => setEventName(e.target.value)}
  />
</div>

  
<div className="bg-white rounded shadow p-4">
  <h2 className="text-lg font-semibold mb-2">Allocate Event Budget</h2>
  <Input
    type="number"
    className="border border-gray-300 rounded p-2 mb-2"
    placeholder="Enter budget amount"
    value={allocatedBudget === null ? '' : allocatedBudget.toString()} // Convert allocatedBudget to string
    onChange={(e) => setAllocatedBudget(parseInt(e.target.value))}
  />
  <Button onClick={allocateBudget} className="border rounded p-2">Add Budget</Button>
</div>



    
<div className="bg-white rounded shadow p-4">
  <h2 className="text-lg font-semibold mb-2">Enter Expenses</h2>
  <Input type="text" className="border border-gray-300 rounded p-2 mb-2" placeholder="Expense category" value={expenseCategory} onChange={(e) => setExpenseCategory(e.target.value)} />
  <Input type="number" className="border border-gray-300 rounded p-2 mb-2" placeholder="Expense amount" value={expenseAmount} onChange={(e) => setExpenseAmount(e.target.value)} />
  <Button onClick={addExpense} className="border rounded p-2">Add Expense</Button>
   
   {eventBudget !== null && calculateAvailableBudget() !== null && calculateAvailableBudget() < 0 && (
    <p className="text-red-500 mt-2">Warning: Your expenses have exceeded the allocated budget!</p>
  )}
      </div>
      
   
<hr className="mb-4" />


    
      <div className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Expense Categories</h2>
         
        {Array.from(new Set(expenses.map((expense) => expense.category))).map((category, index) => (
          <BudgetCard key={index} title={category} value={`$${expenses.filter((expense) => expense.category === category).reduce((total, expense) => total + expense.amount, 0)}`} percentage={calculateCategoryPercentage(category)} />
        ))}
         
      </div>


    
     <Button onClick={resetValues} className="fixed right-4 bottom-4">Reset</Button>
      </div>
      </div>
  );
};

export default BudgetDashboard;
