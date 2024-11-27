import React, { useState } from 'react'
import './style.css'

function Income({closeModal,openmodal,addIncome}) {
    const [amount,setAmount] = useState(0)
    if(openmodal == false){
        return(null)
    }
    const putincome=()=>{
        addIncome(amount);
        setAmount(0)
    }
    return (
        <div className='mdl-overlay'>
            <div className="mdl-container">
                <div className="mdl-header">
                    <button className='close-btn' onClick={closeModal} >x</button>
                </div>
                <div className="mdl-body mb-3">
                    <div className="form-group d-flex gap-2">
                        <input className='form-control' type="text" placeholder='Enter your income' onChange={(e)=>{setAmount(e.target.value)}} />
                        <button className='btn btn-sm btn-warning ' onClick={putincome}>add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Income