const express = require('express');
const router = express.Router();
const { getExalumnos, setExalumnos } = require('../controllers/exalumnosController')

router.get('/', getExalumnos)
router.post('/', setExalumnos)


module.exports = router