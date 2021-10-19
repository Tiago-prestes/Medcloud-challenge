import { Request, Response } from 'express'
import { BaseDatabase } from '../business/BaseDatabase'
import { UserDataBase } from '../business/UserDataBase'
import { User } from '../entities/User'
import { IdGenerator } from '../services/IdGenerator'

export const createUser = async (req: Request, res: Response) => {

    try {
        const { name, email, address, birthdate } = req.body
        const id = new IdGenerator().execute()

        const newUser = new User(
            id,
            name,
            email,
            address,
            birthdate
        )

        const userDatabase = new UserDataBase()
        await userDatabase.create(newUser)

        res.status(201).send({newUser})
    } catch (error: any) {
        res.status(500).send({message: error.message})
    }
}