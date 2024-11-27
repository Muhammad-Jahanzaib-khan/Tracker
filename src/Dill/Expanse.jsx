import React, { useState } from 'react'

function Expanse({closeModalExpanse,expanseModalOpen,addExp}) {
    const [expAmount,setExpAmount] = useState({})
    if(expanseModalOpen == false){
        return (null);
    }

    const inputUpdated = (e)=>{
        const updatedItem = {...expAmount,[e.target.name]:e.target.value}
        setExpAmount(updatedItem);
    }

const submitted =()=>{
    addExp(expAmount)
}

  return (
    <div className='mdl-overlay'>
        <div className="mdl-container">
            <div className="mdl-header">
                <button className='close-btn'  onClick={closeModalExpanse}> x</button>
            </div>
            <div className="mdl-body">
                <div className="form-group">
                    <form action="">
                        <input onChange={inputUpdated} className='form-control mb-3' type="number" name="item1" placeholder='Enter your number' />
                        <input onChange={inputUpdated} className='form-control mb-3' type="date" name="date" placeholder='issue date' />
                        <select onChange={inputUpdated} className='form-control mb-3' name="category">
                            <option value="-">select category</option>
                            <option value="medicine">medicine</option>
                            <option value="personal">personal</option>
                            <option value="rent">rent</option>
                            <option value="fee">fee</option>
                        </select>
                        <textarea onChange={inputUpdated} className='form-control mb-3' name="detail"></textarea>
                    </form>
                </div>
            </div>
            <button className='btn btn-info' onClick={submitted}>submitted</button>
        </div>

    </div>
  )
}

export default Expanse