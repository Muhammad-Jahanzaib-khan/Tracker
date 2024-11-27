import React, { useEffect, useState } from 'react'
import Income from './Income'
import Expense from './Expense';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import js from '@eslint/js';

function Control() {
    const [income, setIncome] = useState(() => {
        const storedIncome = JSON.parse(localStorage.getItem("income"))
        return (storedIncome) ? storedIncome : 0;
    });
    const [expenses, setExpenses] = useState(() => {
        const storeditem = JSON.parse(localStorage.getItem("expenses"))
        return (storeditem) ? storeditem : [];
    });
    const [balance, setBalance] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [openmodal, setOpenmodal] = useState(false);
    const [openExmodal, setOpenExmodal] = useState(false);


     // =============== react notify labrary add  ===============
     const deletenotify = () => toast.success("Successfully deleted!", {
        autoClose: 500,
        pauseOnHover: true,
        transition: Bounce,
    });

    const addnotify = ()=>toast.success("Add your button!",{
        autoClose: 500,
    })

    const addErr = ()=>toast.error('🦄 Wow so easy!' )

    // open modal
    const openModal = () => {
        setOpenmodal(true);
        addnotify();
    }
    // close modal
    const closeModal = () => {
        setOpenmodal(false);
        addErr()
    }
    // add income
    const addIncome = (amount) => {
        setIncome(income + +amount)
        closeModal()
        addnotify()
    }

    // open expense
    const openexp = () => {
        setOpenExmodal(true);
    }
    // close expense
    const closeexp = () => {
        setOpenExmodal(false);
    }
    // addExpense
    const addExpense = (expobj) => {
        const newExpense = [...expenses, expobj]

        setExpenses(newExpense)
        closeexp();
    }

    const delItem = (index) => {
        const updateItem = expenses.filter((el, i) => i != index)
        setExpenses(updateItem);
        deletenotify();
    }

    // use effect
    useEffect(() => {
        let totalExp = 0;
        // calculation
        expenses.forEach((exp) => {
            totalExp += +exp.ex1
        })
        setBalance(income - totalExp)
        setTotalExpense(totalExp)


        // save in local storage
        localStorage.setItem("expenses", JSON.stringify(expenses));
        localStorage.setItem("income", JSON.stringify(income));
    }, [expenses, income])

    return (
        <div className='container mt-4'>
            <div className='bg-info text-center pt-1'>
                <h1 className=' m-3 text-danger fw-bold'>Daily Expense</h1>
                <div className="row">
                    <div className="col-md-4 pb-4">
                        <h3 className='text-white'>Amout in</h3>
                        <h5 className='text-white  p-2'>${income}</h5>
                        <button className='btn btn-success' onClick={openModal}>Add Income</button>
                        <Income addIncome={addIncome} closeModal={closeModal} openmodal={openmodal} />
                    </div>
                    <div className="col-md-4 pb-4">
                        <h3 className='text-white'>Expenses</h3>
                        <h5 className='text-white mt-4'>${totalExpense}</h5>
                    </div>
                    <div className="col-md-4 pb-4">
                        <h3 className='text-white'>Balance</h3>
                        <h5 className='text-white p-2'>${balance}</h5>
                        <button className='btn btn-danger' onClick={openexp} on>Add Income</button>
                        <Expense addExpense={addExpense} openExmodal={openExmodal} closeexp={closeexp} />
                    </div>
                </div>
            </div>
            <div className='p-3 bg-white'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>category</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            expenses.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{item.date}</td>
                                        <td>{item.detail}</td>
                                        <td>{item.category}</td>
                                        <td>{item.ex1}</td>
                                        <td><button className='btn btn-sm btn-danger' onClick={() => { delItem(i) }}>del</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Control