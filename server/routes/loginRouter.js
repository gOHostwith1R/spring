const Router = require('express');
const router = new Router();

router.post('/login', (req, res) => {
    if(req.body.userName === 'admin' && req.body.password === '1234') {
        res.status(200).send("Ok");
    }
    else {
        res.status(404).send("Not found");
    }
});

module.exports = router;