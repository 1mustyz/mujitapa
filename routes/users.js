var express = require('express');
var router = express.Router();
const crudController = require('../single_pic_controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/upload_pic', crudController.setPic)
router.post('/create_student', crudController.createStudent)
router.get('/get_student', crudController.getAllStudent)



module.exports = router;
