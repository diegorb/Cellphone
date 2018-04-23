var express = require('express');
var router = express.Router();

var CellphoneController = require('../controllers/cellphone');

router.get('/cellphones/:id',CellphoneController.getCellphone);
router.post('/register',CellphoneController.SaveCellphone);
router.get('/cellphones',CellphoneController.getCellphones);
router.put('/cellphones/:id',CellphoneController.updateCellphone);
router.delete('/cellphones/:id',CellphoneController.deleteCellphone);
router.head('/cellphones/:id',CellphoneController.findCellphone);

module.exports = router;
