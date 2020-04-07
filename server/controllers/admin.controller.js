const AdminServices = require('../services/admin.service')
const Adminer = new AdminServices()

exports.createPost = async (title, subtitle=null, content) => {
    const response = Adminer.post(title, subtitle, content)
    return {response, message: "Success"}
}

exports.updatePost = async(id, item) => {
    const response = Adminer.update(id, item)
    return {response, message: "Success"}
}

exports.deletePost = async(id) => {
    const response = Adminer.delete(id)
    return {response, message: "Success"}
}
exports.getPosts = async () => {
    const response = await Adminer.readAll()
    return {response: response, message: "Success"}
}

exports.getPostsByTitle = async (title) => {
    const response = await Adminer.readByTitle(title)
    return response
}