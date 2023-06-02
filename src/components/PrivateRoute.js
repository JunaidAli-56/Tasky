import React, { useState } from "react";
import { Navigate, redirect } from "react-router-dom"
export default function PrivateRoute({ Component }) {
    const [isAuth, setIsAuth] = useState(true)
    if (isAuth) {
        return <Component />
    }
    return <>
        <Navigate to='/auth/login' />
    </>;
}
