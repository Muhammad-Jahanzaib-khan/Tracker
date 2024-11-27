// import { useEffect, useState } from 'react'
// import './App.css'
// import IncomeModal from './components/IncomeModal'
// import Expense from './components/Expense';

// function App() {
//   const [incomes, setIncomes] = useState(0);
//   const [balance, setBalance] = useState(0);
//   const [totalExpense,setTotalExpense] = useState(0);
//   const [expenses, setExpenses] = useState([]);
//   const [ModalOpen, setModalOpen] = useState(false);
//   const [expanceModalopen,setExpanceModalopen] = useState(false);


// // open in modal function
//   const openModal = () => {
//     setModalOpen(true);
//   };
//   // close in modal function
//   const closeModal = () => {
//     setModalOpen(false);
//   };
// // add income

// const handleIncomes = (amount)=>{
//   setIncomes(incomes + +amount)
//   setModalOpen(false);
// }

// // expansemodal open
// const  exPanseModopen =()=>{
//   setExpanceModalopen(true);
// }

// // closemodal 
// const  exPanseModclose =()=>{
//   setExpanceModalopen(false);
// }

// const addExpense = (expenobj)=>{
//   const newExpAr =[...expenses,expenobj]
//   setExpenses(newExpAr);
// }

// useEffect(()=>{
//   let totalExp = 0;
//   // calculation
//   expenses.forEach((exp)=>{
//     totalExp += +exp.expenses;
//   });
  
//   setBalance(incomes - totalExp);
//   setTotalExpense(totalExp);
// },[expenses,incomes])

//   return (
//     <> 
//       <div className='container'>
//         <div className='bg-dark text-white p-3'>
//           <h1 className='text-center mb-5'>Expense Tracker</h1>
//           <div className='row'>
//             <div className='col-md-6 text-center'>
//               <h3>Amount In</h3>
//               <h5 className='text-success'>${incomes}</h5>
//               <button className='btn btn-success' onClick={openModal}>Add Income</button>
//               <IncomeModal handleIncomes={handleIncomes} ModalOpen={ModalOpen} handleClose={closeModal}/> 
//             </div>

//             <div className='col-md-4 text-center'>
//               <h3>Expenses</h3>
//               <h5 className='text-warning'>${totalExpense}</h5>
//             </div>

//             <div className='col-md-6 text-center'>
//               <h3>Balance</h3>
//               <h5 className='text-danger'>${balance}</h5>
//               <button className='btn btn-danger' onClick={exPanseModopen}>Add Expense</button>
//            <Expense addExpense={addExpense}  exPanseModopen={exPanseModopen} exPanseModclose={exPanseModclose} expanceModalopen={expanceModalopen} />
//             </div>
//           </div>
//         </div>
//         <div className='p-3 bg-white'>
//           <table className='table'>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Description</th>
//                 <th>Category</th>
//                 <th>Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//              {
//               expenses.map((item,i)=>{
//                 return(
//                   <tr key={i}>
//                   <td>{item.date}</td>
//                   <td>{item.detail}</td>
//                   <td>{item.category}</td>
//                   <td>{item.expense}</td>
//                 </tr>
//                 )
//               })
//              }
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   )
// }
// export default App

import React from 'react'
import Control from './maincomponents/control'
import Main from './Dill/Main'

function App() {
  return (
    <div>
 {/* <Main/> */}
 <Control/>
      </div>
  )
}

export default App