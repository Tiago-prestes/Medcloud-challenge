import React, { useEffect, useState } from 'react'
import GlobalStateContext from './GlobalStateContext'
import axios from "axios"
import { BASE_URL } from '../constants/urls'


const GlobalState = (props) => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        axios.get(`${BASE_URL}/listusers`)
            .then((res) => {
                setUsers(res.data)
                console.log(res.data)
            })
    }, [])



    const data = { users }
    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState