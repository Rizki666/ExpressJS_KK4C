const express = require('express')
const router = express.Router()
const usercontroller = require('../controllers/user')

  //untuk menampilkan semua data users
  router.get('/users', usercontroller.index)

  //mendapatkan user berdasarkan id
  router.get('/user/:id', usercontroller.show)
  
  //untuk menyimpan data
  router.post('/user', usercontroller.store)
  
  //menyimpan perubahan data dengan id tertentu
  router.put('/user/:id', usercontroller.update)

  //untuk menghapus data user
  router.delete('/user/:id', usercontroller.delete)

  module.exports = router
  