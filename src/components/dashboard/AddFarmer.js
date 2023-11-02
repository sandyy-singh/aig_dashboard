import React from 'react'
import './AddFarmer.scss'
const AddFarmer = () => {
    return (
        <div className='container-fluid parent'>
            <div className='row h-100 d-flex justify-content-center align-items-center flex-column'>
                <div className='col-10 d-flex justify-content-center align-items-center inputfarmer'>
                    <input className='m-2 form-control inputfarmerid' type="text" placeholder='Enter Farmer ID' />
                </div>
                <div className='col-10 mt-5 text-center'>
                    <button className='btn bg-success btn-lg text-white'>Next</button>
                </div>
            </div>
        </div>
    )
}

export default AddFarmer
