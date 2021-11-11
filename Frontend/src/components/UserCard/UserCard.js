import React, { useState, useEffect, useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import GlobalStateContext from '../../global/GlobalStateContext';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Alert } from '@material-ui/core';

export const UserCard = () => {
  const { users, setAnalise, columns } = useContext(GlobalStateContext)
  const [selectionModel, setSelectionModel] = useState([])
  const [open, setOpen] = useState(false);

  const addAnalise = () => {
    const newAnaliseList = []
    selectionModel.forEach((item) => {
      users.forEach((user) => {
        if(user.id === item) {
          newAnaliseList.push(user)
          setAnalise(newAnaliseList)
        }
      })
    })
    handleClick()
  }

  const handleClick = () => {
    setOpen(true);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  return (
    <div style={{ height: 400, width: '65%' }}>
      <Button
        color='primary'
        variant='contained'
        onClick={addAnalise}
      >
        Exportar para Análise
      </Button>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        checkboxSelection
        NoRowsOverlay
        onSelectionModelChange={(row) => { setSelectionModel(row) }}
      />
      <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Exportado com sucesso!
        </Alert>
      </Snackbar>
    </Stack>
    </div>
  );
}
