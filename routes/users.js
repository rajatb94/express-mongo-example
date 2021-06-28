var express = require('express');
var router = express.Router();

const createUserController = require('../controllers/createUser');
const fetchUsersController = require('../controllers/fetchUsers');


router.get('/', fetchUsersController);

/* GET users listing. */
router.post('/create', createUserController);



module.exports = router;
