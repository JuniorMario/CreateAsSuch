const assert = require("assert")
const DB = require("../db/model")
const AdminHandler = require("../services/admin.service")

MOCK_POST_CADASTRAR = {
    title: "Lorem Ipsum",
    subtitle: "What is Lorem Ipsum?",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}
let MOCK_ID = 0


MOCK_POST_ATUALIZAR = {
    title: "Neutrinos Ipsum",
    subtitle: "What is Neutrinos?",
    content: "Lorem Ipsum is simply NEUTRINOS STUFF dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}


describe("Suite de testes Banco de dados MYSQL para Admin", function () {
    this.beforeAll(async () => {
        adminer = new AdminHandler()
        await adminer.delete()
        MOCK_ID = await adminer.post(MOCK_POST_CADASTRAR)
        MOCK_ID = MOCK_ID.id
    })
    it("Deve cadastrar um post", async () => {
        const result = await adminer.post(MOCK_POST_CADASTRAR)
        delete result.id
        delete result.createdAt
        delete result.updatedAt
        assert.deepEqual(result, MOCK_POST_CADASTRAR)
    })

    it("Deve atualizar um post pelo ID", async () => {
        [result] = await adminer.update(MOCK_ID, MOCK_POST_ATUALIZAR)
        assert.deepEqual(result, 1)
    })

    it("Deve deletar um POST pelo ID", async () => {
        result = await adminer.delete(MOCK_ID)
        assert.deepEqual(result, 1)
    })

    it("Deve listar os POST ", async () => {
        [result] = await adminer.read(MOCK_POST_CADASTRAR)
        delete result.id
        delete result.createdAt
        delete result.updatedAt
        assert.deepEqual(result, MOCK_POST_CADASTRAR)
    })
  
})