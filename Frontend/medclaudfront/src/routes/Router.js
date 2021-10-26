import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Header } from '../components/Header/Header'
import { AnalisePage } from '../pages/AnalisePage/AnalisePage'
import { PacientePage } from '../pages/PacientePage/PacientePage'

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path={"/"} component={PacientePage} />
                <Route exact path={"/analise"} component={AnalisePage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router