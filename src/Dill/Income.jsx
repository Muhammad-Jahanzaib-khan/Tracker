import React, { useState } from 'react'

function Income({closeModalIncome,incomeModal,addIncome}) {
    const [amount,setAmount] = useState(0);
    if(incomeModal == false){
        return null
    }

    const putIncome = (e)=>{
        addIncome(amount);
        setAmount(0);
    }
    return (
        <div className='mdl-overlay'>
            <div className="mdl-container">
                <div className="mdl-header">
                    <button className='close-btn' onClick={closeModalIncome}>X</button>
                </div>
                <div className="mdl-body">
                    <div className="form-group d-flex gap-2 p-3">
                        <input className='form-control' type="text" onChange={(e)=>setAmount(e.target.value)} placeholder='Add Amount' />
                        <button className='btn btn-sm btn-warning' onClick={putIncome}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Income