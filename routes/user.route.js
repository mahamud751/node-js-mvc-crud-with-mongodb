const { getUser, createUser, updateUser, getOneUser, deleteUser, getActiveUser, getWord, getText } = require('../controllers/users.controller')

const user_router = require('express').Router()

user_router.get('/',getUser)
user_router.get('/active',getActiveUser)
user_router.get('/findWord',getWord)
user_router.get('/findText',getText)
user_router.get('/:id',getOneUser)
user_router.post('/',createUser)
user_router.patch('/:id',updateUser)
user_router.delete('/:id',deleteUser)

module.exports=user_router

