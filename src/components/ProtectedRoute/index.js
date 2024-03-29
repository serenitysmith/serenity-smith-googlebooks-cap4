import React from "react"

import { Navigate, Outlet, useLocation } from "react-router-dom"

import { useUserAuth } from "../../context/userAuthContext"

import { log } from '../../utils/logger'

const ProtectedRoute = ({ children, redirectPath = '/login' }) => {
    const { user } = useUserAuth()
    const location = useLocation()

    log('ProtectedRoute', user, children, redirectPath, location)

    

    log("Check if user is accessing private route - ", user)
    if (!user.loggedIn) {
        // user is not authenticated
        return <Navigate to={redirectPath} replace state={{ from: location }} />
    }
    return children ? children : <Outlet />
}

export default ProtectedRoute
