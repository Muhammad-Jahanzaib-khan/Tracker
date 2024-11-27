import React, { useState } from 'react'

function Expense({ closeexp, openExmodal,addExpense }) {
    const [expense, setExpense] = useState(0)
    if (openExmodal == false) {
        return (null);
    }

    const handleinputUdate = (e) => {
        const newInput = {...expense,[e.target.name]: e.target.value}
        setExpense(newInput);
    }

    const handleSubmit = () => {
        addExpense(expense);
    }
    return (

        <div className="mdl-overlay">
            <div className="mdl-container">
                <div className="mdl-header">
                    <button className='close-btn' onClick={closeexp}>x</button>
                </div>
                <div className="mdl-body">
                    <div className="form-group gap-2">
                        <input onChange={handleinputUdate} className='form-control mb-3' type="number" name='ex1' placeholder='Enter your expenses' />
                        <input onChange={handleinputUdate} className='form-control mb-3' type="date" name='date' placeholder='Enter your date' />
                        <select onChange={handleinputUdate} className='form-select mb-3' name='category'>
                            <option value="-">select category</option>
                            <option value="Gorcery">Grocery</option>
                            <option value="personal">Personal</option>
                            <option value="rent">rent</option>
                            <option value="medicine">medicine</option>
                            <option value="fee">fee</option>
                        </select>
                        <textarea onChange={handleinputUdate} className='form-control mb-3' name="detail" placeholder='discription'></textarea>
                        <button className='btn btn-warning mb-3' onClick={handleSubmit}>Add Income</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expense