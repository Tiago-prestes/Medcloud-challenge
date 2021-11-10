import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Header } from '../components/Header/Header'
import { AnalisePage } from '../pages/AnalisePage/AnalisePage'
import { UsersPage } from '../pages/UsersPage/UsersPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path={"/"} component={UsersPage} />
                <Route exact path={"/analise"} component={AnalisePage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router