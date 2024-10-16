import express, { response } from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json());

let user = []

app.post('/post', (request,response)=>{
    const users = {
    id: users.length + 1,
    ...request.body
    }
    users.push(user)
    response.status(201).json(user)
})

app.get('/users',(request,response)=> {
response.status(200).json(users)
})


app.delete('/users/:id', (request,response)=> {
const id = request.params.id
user = users.filter(user => user.id !== id);
response.status(204).json();
})



export default app; 