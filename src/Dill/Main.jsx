import React, { useState } from 'react'
import "./Style.css"
import Income from './Income';
import Expanse from './Expanse'


function Main() {
    const [income, setIncome] = useState(0);
    const [expanses,setExpanses] = useState([]);
    const [balance, setBalace] = useState(0);
    const [totalExpance, setTotalExpanc] = useState(0);
    const [incomeModal, setIncomeModal] = useState(false);
    const [expanseModalOpen, setExpanseModalOpen] = useState(false);


    // income modal open
    const openModalIncome = () => {
        setIncomeModal(true);
    }

    // close modal open
    const closeModalIncome = () => {
        setIncomeModal(false);
    }
    // open modal expanse
    const openModalExpanse = () => {
        setExpanseModalOpen(true);
    }

    // close modal expanse
    const closeModalExpanse = () => {
        setExpanseModalOpen(false);
    }

    // add income
    const addIncome = (amount) => {
        setIncome(income + +amount)
        closeModalIncome()
    }

    // addExp amount

    const addExp =(exp)=>{
        const newAddexp =[...expanses,exp]
        setExpanses(newAddexp)
    }

    return (
        <div className='container bg-success'>
            <div className='bg-secondary text-white text-center' >
                <h1 className='text-warning'>Daily Tracker</h1>
                <div className="row">
                    <div className="col-md-4">
                        <h2>Amount</h2>
                        <h4>${income}</h4>
                        <h2 className='btn  btn-success' onClick={openModalIncome}>Add Amount</h2>
                        <Income addIncome={addIncome} incomeModal={incomeModal} closeModalIncome={closeModalIncome} />
                    </div>
                    <div className="col-md-4">
                        <h2>Expance</h2>
                        <h4>${expanses}</h4>
                    </div>
                    <div className="col-md-4">
                        <h2>Balance</h2>
                        <h4>${balance}</h4>
                        <h2 className='btn  btn-warning' onClick={openModalExpanse}>Add Amount</h2>
                        <Expanse addExp={addExp} closeModalExpanse={closeModalExpanse} expanseModalOpen={expanseModalOpen}/>
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
                        <tr>
                            <td>date</td>
                        <td>detail</td>
                        <td>category</td>
                        <td>amount</td>
                        <td><button className='btn btn-danger'>del</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>


    )
}

export default Main