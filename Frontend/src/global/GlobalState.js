import React, { useEffect, useState } from 'react'
import GlobalStateContext from './GlobalStateContext'
import axios from "axios"


const GlobalState = (props) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
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