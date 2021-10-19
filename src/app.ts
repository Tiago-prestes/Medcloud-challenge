import express, {Express} from 'express'
import cors from 'cors'

 export const app: Express = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address()
       console.log(`Server is running in http://localhost: 3003`)
    } else {
       console.error(`Failure upon starting server.`)
    }
});