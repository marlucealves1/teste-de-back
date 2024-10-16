function soma (a , b){
    return a + b 
}
// MATCHERS para numeros
test( " Some 1 + 4 e retorna 5", ()=>{
    expect(soma(1, 4)).toBe(5)
    expect(soma(2, 3)).toBe(5)
    expect(soma(2.5, 2.5)).toEqual(5)
})

test("18 é maior de idade", ()=>{
    const numero = 18 
    expect(20).toBeGreaterThan(numero)
    expect(18).toBeGreaterThanOrEqual(numero)
})

// METCHERS para strings

test("Procura letra I na palavra ", ()=>{
    const nome = "igor"
    expect(nome).toMatch(/i/)
    expect(nome).not.toMatch(/Y/)
})