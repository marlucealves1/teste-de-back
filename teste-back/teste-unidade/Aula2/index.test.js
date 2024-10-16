
/**Procura itens em um array */

const lista = ["Banana", "Melão", "Melancia", "Maçã"]

test("Identifica 'maçã' no array", () => {
expect(lista).toContain("Maçã")
expect(lista).not.toContain("Jabuticaba")
expect(lista).toHaveLength(9)
})

function retornaErro(Error){
    throw new Error("Isso é um erro")
}

test("Retorna um erro", () => {
    expect(() => retornaErro().toThrow())
})

/** Testando funções assíncronas */
const fetchData = async () => "Ford Ka";  
