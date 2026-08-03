import React, { useContext } from 'react'
import { admincontext } from '../../UserContex'
import { Navigate } from 'react-router-dom'

function ProtectRoute({children}) {
    const{isAuth} = useContext(admincontext)
        if(!isAuth){
            return <Navigate to="/login"/>
        }
        return children
}
export default ProtectRoute