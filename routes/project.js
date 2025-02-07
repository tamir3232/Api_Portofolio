var express = require('express');
var router = express.Router();
var {getDetailProject, getListProject,createProject,updateProject,deleteProject } = require('../controller/ProjectController');

router.get('/getListProject', getListProject);
router.get('/getDetailProject/:id', getDetailProject);
router.post('/createProject', createProject);
router.patch('/updateProject/:id', updateProject);
router.delete('/deleteProject/:id', deleteProject);


module.exports = router;