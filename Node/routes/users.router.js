const { Router } = require('express');
const router = Router();
const { usersController } = require('../controllers');

router.get('/uno', usersController.getUser);

router.get('/', usersController.getUsers);

router.post('/', usersController.createUser);

router.put('/', usersController.updateUser);

router.delete('/',usersController.deleteUser);

module.exports = router;