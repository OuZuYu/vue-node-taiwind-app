const express = require('express')
const router = express.Router()
const { Posts } = require('../models')

router.get('/', async (req, res) => {
  const list = await Posts.findAll()
  res.json(list)
})

router.post('/', async (req, res) => {
  const post = req.body
  await Posts.create(post)
  res.json(post)
})

router.get('/:id', async (req, res) => {
  const post = await Posts.findByPk(req.params.id)
  res.json(post)
})

module.exports = router