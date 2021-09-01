const router = require('express').Router();
const controller = require('./controllers/controllers.js');

router.post('/user', controller.create);
router.get('/user', controller.findAll);
router.get('/user/:userEmail', controller.findOne);
router.put('/user/:userId', controller.update);
router.delete('/user/:userId', controller.remove);

module.exports = router;
