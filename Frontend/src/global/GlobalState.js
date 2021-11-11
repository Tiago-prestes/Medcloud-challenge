import React, { useEffect, useState } from 'react'
import GlobalStateContext from './GlobalStateContext'
import axios from "axios"
import { BASE_URL } from '../constants/urls'


const GlobalState = (props) => {
    const [users, setUsers] = useState([])
    const [analise, setAnalise] = useState([])

    const columns = [
        { field: 'id', headerName: 'ID', width: 125 },
        { field: 'name', headerName: 'Name', width: 180 },
        { field: 'email', headerName: 'Email', width: 180 },
        { field: 'address', headerName: 'Address', width: 180 },
        { field: 'birthdate', headerName: 'Birthdate', width: 145 }
      ]

    useEffect(() => {
        axios.get(`${BASE_URL}/listusers`)
        .then((res) => {
            setUsers(res.data)
        })
        .catch((error) => {
            console.log(error.response)
        })
    }, [])

    const data = {  users, setUsers, analise, setAnalise, columns }
    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState