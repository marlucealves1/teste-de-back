
import request from 'supertest'
import app from '../../src/app.js'


describe("Testa a API users",() => {

it("Pode adicionar um novo usuário", async()=> {
   const response = await request(app).post("/users").send({
    nome:"leticia",
    email:"leticia@letici.com"
   })
   expert(response.statusCode).toBe(201);

})


}) 