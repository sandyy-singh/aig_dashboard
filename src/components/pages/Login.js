import React, { useState } from 'react'
import axios from 'axios';
const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = async () => {
        try {
            const { data } = await axios.post('http://localhost:5000/api/user/login', { email, password })
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='container-fluid'>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-sm-5 col-md-6 mt-sm-5 mt-4 d-flex justify-content-center flex-column align-items-center parent '>
                    <div className='logo d-flex justify-content-center align-items-center'>
                        <div className='logo-symbol'>Logo</div>
                    </div>
                    <div className='mt-5 input'>
                        <div className="mb-3">
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Admin Login ID" />
                        </div>
                        <div className="mb-3">
                            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                        </div>
                        <p className='text-end'>Forgot Password</p>
                        <div className='mt-3 d-flex justify-content-center align-items-center'>
                            <button className='loginbtn' onClick={handleLogin}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
