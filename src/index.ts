import { app } from './app'
import { createUser } from './endpoint/creatUser'
import{ getAllUser } from './endpoint/getAllUsers'

app.get('/listusers', getAllUser)
app.post('/users', createUser)