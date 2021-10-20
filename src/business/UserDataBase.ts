import { User } from '../entities/User'
import { BaseDatabase } from './BaseDatabase'

export class UserDataBase extends BaseDatabase {

    private static TABLE_NAME = "medcloud_users"

    async createUser(user: User) {
        await BaseDatabase
            .connection(UserDataBase.TABLE_NAME)
            .insert(user)
    }

    getAllUser = async () => {
        const result = await BaseDatabase
            .connection(UserDataBase.TABLE_NAME)
            return result
      }

}
