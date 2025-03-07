import React, { useState } from 'react'

function Expense({addExpense,exPanseModopen,exPanseModclose, expanceModalopen}) {
    const [amount,setAmount] = useState({});

    if (expanceModalopen == false){
        return(null);
    
    }

    const handleInputUpdate =(e)=>{
        const newExp = {...amount,[e.target.name]:e.target.value};
        setAmount(newExp);
        }


        const handleSubmit =()=>{
            addExpense(amount)
        }


  return (
    <div className="mdl-overlay" >
    <div className="mdl-container" onClick={(e) => e.stopPropagation()}>
        <div className="mdl-header">
            <button onClick={exPanseModclose} className="close-button">X</button>
        </div>
        <div className="mdl-body">
            <h5>Add Expense</h5>
            <div className='form-group'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type='number' onChange={handleInputUpdate} className='form-control mb-3' name='expense' placeholder='write expense amount' />
                    <input type='date' onChange={handleInputUpdate} className='form-control mb-3' name='date' placeholder='select date' />
                    <select className='form-select mb-3' name='category' onChange={handleInputUpdate}>
                        <option value="-">Select Category</option>
                        <option value='grocery'>Grocery</option>
                        <option value='personal'>Personal</option>
                        <option value='rent'>Rent</option>
                        <option value='medical'>Medical</option>
                        <option value='fee'>Fee</option>
                    </select>
                    <textarea onChange={handleInputUpdate} className='form-control mb-3' placeholder='description' name='detail'></textarea>
                    <button className='btn btn-sm w-100 btn-warning py-2' onClick={handleSubmit}>Add Expense</button>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Expense