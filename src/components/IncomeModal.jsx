import React, { useState } from 'react'
function IncomeModal({ ModalOpen, handleClose, handleIncomes }) {
    const [amount,setAmount] =useState(0)
    if (!ModalOpen) {
        return null;
    }

    // put income
    const putIncome = () => {
        handleIncomes(amount);
        setAmount(0);
    }
    
    return (
        <div className="mdl-overlay" onClick={handleClose}>
            <div className="mdl-container" onClick={(e) => e.stopPropagation()}>
                <div className="mdl-header">
                    <button onClick={handleClose} className="close-button">X</button>
                </div>
                <div className="mdl-body">
                    <h5>Add Income</h5>
                    <div className='form-group d-flex gap-2'>
                        <input type="text" className='form-control' onChange={(e) => setAmount(e.target.value)} placeholder="Enter Income" />
                        <button className="btn btn-primary btn-sm" onClick={putIncome}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IncomeModal