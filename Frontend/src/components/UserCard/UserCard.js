import React, {useState, useEffect, useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import GlobalStateContext from '../../global/GlobalStateContext';




const rows = [
  { id: 1, Name: 'Snow Jon',Email: 'email@got.kl', Address: 'Califonia, CA', Birthdate: "02-09-1998" },
  { id: 2, Name: 'Lannister Cersei',Email: 'email@got.kl', Address: 'Califonia, CA', Birthdate: "02-09-1998" },
  { id: 3, Name: 'Lannister Jaime',Email: 'email@got.kl', Address: 'Califonia, CA', Birthdate: "02-09-1998" },
  { id: 4, Name: 'Stark Arya',Email: 'email@got.kl', Address: 'Califonia, CA', Birthdate: "02-09-1998" },
  { id: 5, Name: 'Targaryen Daenerys',Email: 'email@got.kl', Address: 'Califonia, CA', Birthdate: "02-09-1998" },
  { id: 6, Name: 'Melisandre',Email: 'email@got.kl', Address: 'Califonia, CA', Birthdate: "02-09-1998" },
  { id: 7, Name: 'Clifford Ferrara',Email: 'email@got.kl', Address: 'Califonia, CA', Birthdate: "02-09-1998" },
  { id: 8, Name: 'Frances Rossini',Email: 'email@got.kl', Address: 'Califonia, CA', Birthdate: "02-09-1998" },
  { id: 9, Name: 'Roxie Harvey',Email: 'email@got.kl', Address: 'Califonia, CA', Birthdate: "02-09-1998" },
  { id: 10, Name: 'Sansa Stark',Email: 'email@got.kl', Address: 'Califonia, CA', Birthdate: "02-09-1998" },

];

export const UserCard = () => {
  const {users} = useContext(GlobalStateContext)

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'email', headerName: 'Email', width: 180 },
    { field: 'address', headerName: 'Address', width: 180},
    { field: 'Birthdate', headerName: 'Birthdate', width: 145 }
  ]

  return (
    <div style={{ height: 400, width: '65%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}
