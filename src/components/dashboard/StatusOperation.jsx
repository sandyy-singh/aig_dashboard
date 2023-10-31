import React from 'react'

const StatusOperation = () => {
    return (
        <div className="container-fluid ">
            <div className="row">
                <h3 className="col mt-4 mx-2">Projected Growth</h3>
            </div>
            <div className="row">
                <div className='col mt-5 d-flex align-items-center justify-content-center table-div'>
                    <table>
                        <thead>
                            <tr>
                                <th>State</th>
                                <th >Total Land Under Management</th>
                                <th style={{backgroundColor:'rgba(0 ,128,0 ,1)',color:'white'}} >Farming</th>
                                <th style={{backgroundColor:'rgba(115 ,74,0 ,1)',color:'white'}}>Agroforestry</th>
                                <th style={{backgroundColor:'rgba(0 ,40,63 ,1)',color:'white'}}>Forestry</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Kerela</td>
                                <td>5000ha.</td>
                                <td></td>
                                <td>5000ha.</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Uttar Pradesh</td>
                                <td>10000ha.</td>
                                <td>10000ha.</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Tamil Nadu</td>
                                <td>15000ha.</td>
                                <td></td>
                                <td>15000ha.</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Rajisthan</td>
                                <td>6500ha.</td>
                                <td>5000ha.</td>
                                <td></td>
                                <td>1500ha.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default StatusOperation