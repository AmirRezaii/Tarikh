const router = require('express').Router()
const Post = require('../models/Post')

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find({})
        res.render('index', { 
            posts: posts, 
        })
    } catch (error) {
        res.redirect('/')
    }
})

router.get('/post:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.render('post', { post: post })
    } catch (error) {
        res.status(500)
    }
})

router.get('/create', (req, res) => {
    res.render('create')
})

router.post('/', async (req, res) => {
    const _d = Date()
    const d = _d.toString().split(' ')
    const date = d[1] + ' ' + d[2] + ' ' + d[3] + ' ' + d[4]
    const newPost = new Post({
        title: req.body.title,
        description: req.body.desc,
        content: req.body.content,
        author: req.body.author,
        date: date
    })
    try {
        const savedPost = await newPost.save()
        res.redirect('/')
    } catch (error) {
        res.status(500)
    }
})



module.exports = router