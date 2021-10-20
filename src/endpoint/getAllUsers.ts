import { Request, Response } from "express"
import { UserDataBase } from "../business/UserDataBase"
import { User } from "../entities/User"

export const getAllUser = async ( req: Request, res: Response) => {

    try {

        const userDatabase = new UserDataBase()
        const user = await userDatabase.getAllUser()

        res.send(user)
    } catch (error) {
        res.status(500).send("Unexpected server error")
    }
}