const assert = require("assert")
const DB = require("../db/model")
const User = require("../services/auth.service")
let useri = {}
MOCK_USUARIO_CADASTRAR = {
    name: "Rogerinho",
    password: "UKE"
}

MOCK_USUARIO_ATUALIZAR = {
    name: "Julinho",
    password: "falocomtranquilidade"
}


MOCK_ID = 0
describe("Suite de testes Banco de dados MYSQL para Usuários", function() {
    this.beforeAll(async () => {
        user = new User()
        await user.delete()
        const res = await user.create(MOCK_USUARIO_CADASTRAR)
        MOCK_ID = res.id
    })

    it("Deve cadastrar um usuario", async() => {
        const  result = await user.create(MOCK_USUARIO_CADASTRAR)
        delete result.id
        delete result.createdAt
        delete result.updatedAt
        assert.deepEqual(result, MOCK_USUARIO_CADASTRAR)
    })

    it("Deve atualizar um usuários pelo ID", async () => {
        [result] = await user.update(MOCK_ID, MOCK_USUARIO_ATUALIZAR)
        assert.deepEqual(result, 1)
    })

    it("Deve deletar um usuários ID", async () => {
        result = await user.delete(MOCK_ID, MOCK_USUARIO_ATUALIZAR)
        assert.deepEqual(result, 1)
    })

    
})