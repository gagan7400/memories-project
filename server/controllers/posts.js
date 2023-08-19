const postMessage = require('../models/postMessage')


const getPosts = async (req, res) => {
    try {
        const postMessages = await postMessage.find();
        res.status(200).json(postMessages)
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }

}
const createPost = (req, res) => {
res.send("helo world")

}
module.exports = { getPosts, createPost };