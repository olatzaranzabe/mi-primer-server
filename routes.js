//rutas
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.render('index.ejs');
})

router.get('/login', (req, res)=> {
    res.render('Login');
})


module.exports = router;