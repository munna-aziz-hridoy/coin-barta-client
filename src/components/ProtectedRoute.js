import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { ServerUrlContext } from '..'
import useGetUser from '../hooks/useGetUser'
import Spinner from './Spinner'

const ProtectedRoute = ({ children }) => {
    const serverUrl = useContext(ServerUrlContext)
    const location = useLocation()
    const [user, loading] = useGetUser(serverUrl)

    if (loading) {
        return <Spinner />
    }
    if (!user?.admin) {
        return <Navigate to="/admin" state={{ from: location }} replace />
    }

    return children
}

export default ProtectedRoute
