import React, { useState, useEffect, useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import { MainContainer } from '../UsersPage/styled';
import { UserCard } from '../../components/UserCard/UserCard';
import { DataGrid } from '@mui/x-data-grid';
import { Alert, Button } from '@material-ui/core';


export const AnalisePage = () => {
    const { analise, setAnalise, columns } = useContext(GlobalStateContext)
    const [selectionModel, setSelectionModel] = useState([])



    const removeAnalise = () => {
        selectionModel.forEach((item) => {
            const analiseIndex = analise.findIndex((user) => user.id === item)
            const newAnaliseList = [...analise]
            newAnaliseList.splice(analiseIndex, 1)
            setAnalise(newAnaliseList)
        })
    }

    return (
        <MainContainer>
            <div style={{ height: 400, width: '65%' }}>
                <Button
                    color='warning'
                    variant='contained'
                    onClick={removeAnalise}
                >
                    Excluir Análise
                </Button>
                <DataGrid
                    rows={analise}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                    NoRowsOverlay
                    onSelectionModelChange={(newSelectionModel) => { setSelectionModel(newSelectionModel) }}
                />
                <Alert severity="warning">Exclui um por vez*</Alert>
            </div>
        </MainContainer>
    )
}
