const Router = require('express');
const router = new Router();
const cards = require('../constants/constCards');

router.get('/cards', (req, res) => {
    setTimeout(() => res.status(200).json(cards), 2000);
});

module.exports = router;