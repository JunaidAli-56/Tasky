import React, { useState } from 'react';
import './login.scss';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';

const Login = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleLogin = async () => {

    //     // Perform authentication request to your backend
    //     const response = await axios.post(
    //         'http://127.0.0.1:3000/api/v1/users/login',
    //         {
    //             email,
    //             password,
    //         }
    //     );

    //     if (response.status === 200) {
    //         // Retrieve the JWT token from the response
    //         const { token } = response.data;
    //         // Store the token in the useAuth hook
    //         login(token);
    //         useRouter.push('/');
    //         console.log(token);
    //     }
    // };

    return (
        <div className="container-fluid my-con">
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center login-col">
                    <div className="card px-4 py-5 card-style m-0">
                        <p className="text-center fw-bold fs-5 heading">Login</p>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="text-center">
                            <button
                                className="mt-4 px-5 py-2"
                                // onClick={handleLogin}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
