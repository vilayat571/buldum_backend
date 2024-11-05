var express=require('express');
const { registerUser } = require('../controllers/users');
const router=express.Router();

router.post('/api/v1/users/add', registerUser);

module.exports = router;
