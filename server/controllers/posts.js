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
const createPost = async (req, res) => {
    const post = req.body;
    // const post = {title:"hello"};
    const newPost = new postMessage(post)

    try {
        await newPost.save();
        res.status(200).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })

    }

}
const updatePost = async (req, res) => {
    const put = req.body;
    console.log(req.params)
    // const post = {title:"hello"};
    const newPost =  await postMessage.updateMany(req.params,{$set:put })
   
    try {
         
        res.status(200).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })

    }

}
const deletePost = async (req, res) => {
     
      const newPost =  await postMessage.deleteMany(req.body)
   
    try {
         
        res.status(200).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })

    }

}
module.exports = { getPosts, createPost  ,updatePost ,deletePost};