import React, { useState, useEffect, useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import GlobalStateContext from '../../global/GlobalStateContext';
import { Button } from '@mui/material';

export const UserCard = () => {
  const { users } = useContext(GlobalStateContext)
  const [selectedRows, setSelectedRows] = useState([])
  const [selectionModel, setSelectionModel] = useState([])

  useEffect(() => {
    const newList = []

    newList.push(selectionModel)
    setSelectedRows(newList)


  }, [selectionModel])

  console.log("fora", selectedRows)



  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'email', headerName: 'Email', width: 180 },
    { field: 'address', headerName: 'Address', width: 180 },
    { field: 'birthdate', headerName: 'Birthdate', width: 145 }
  ]

  return (
    <div style={{ height: 400, width: '65%' }}>
      <Button
      color='primary'
      variant='contained'
      >
      Exportar para Análise
      </Button>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        checkboxSelection
        NoRowsOverlay
        onSelectionModelChange={(newSelectionModel) => { setSelectionModel(newSelectionModel) }}
      />
      
    </div>
  );
}
