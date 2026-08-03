import React, { useContext } from 'react'
import { admincontext } from '../../UserContex'
import { Navigate } from 'react-router-dom'

function PublicRoute({children}) {
    const{isAuth} = useContext(admincontext)

        if(isAuth){
            return <Navigate to='/product'/>
        }
        return children
  
  
}

export default PublicRoute