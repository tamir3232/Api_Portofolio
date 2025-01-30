var express = require('express');
var router = express.Router();
var {getDetailProfile, getListProfile,createProfile,updateProfile,deleteProfile } = require('../controller/ProfileController');

router.get('/getListProfile', getListProfile);
router.get('/getDetailProfile/:id', getDetailProfile);
router.post('/createProfile', createProfile);
router.patch('/updateProfile/:id', updateProfile);
router.delete('/deleteProfile/:id', deleteProfile);


module.exports = router;
