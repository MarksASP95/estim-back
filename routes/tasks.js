const router = require('express').Router();

const Worker = require('../models/Task');

router.get('/', async (req, res) => {
    // const tasks = await Worker.find({});
    // res.send(tasks);
});

module.exports = router;