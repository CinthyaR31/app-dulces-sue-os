const express = require('express');
const router = express.Router();

const task2 = require('../models/task2');

router.get('/', async (req, res) => {
    const task = await task2.find();
    res.json(task);
});

// request toda la información que me envía le navegador al servidor
router.post('/',async (req,res) => {
    const task = new task2(req.body);
    task.save();
    res.json('Task saved');
});

router.put('/id', async (req,res) =>{
    await task2.findByIdAndUpdate(req.params.id, req.body);
    res.json({status:'Task update'});
});

module.exports=router;
