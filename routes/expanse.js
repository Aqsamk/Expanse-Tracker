const express = require('express');
const router = express.Router();
const expanseController = require('../controllers/expanse');

router.get('/', (req,res,next) => {
    res.send('Form is submitted')
})

router.get('/expanse/add-expanse', expanseController.getAddExpanse);

router.post('/expanse/add-expanse', expanseController.postAddExpanse);

router.get('/expanse/get-expanse', expanseController.getExpanse);

router.delete('/expanse/delete-expanse/:id', expanseController.deleteExpanse);

module.exports = router;
