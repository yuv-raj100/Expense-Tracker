const router = require('express').Router();

const { addGroup, getGroups, getUsers} = require('../controllers/manageGroup');
const {login, register, searchUser} = require('../controllers/userControllers')



router.post('/login',login)
router.post('/register',register)
router.post('/add',addGroup)
router.get('/getGroups',getGroups)
router.get('/search',searchUser)
router.post('/addGroup',addGroup)
router.get('/getUsers',getUsers)


module.exports = router;