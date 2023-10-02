const express = require('express')
const router = express.Router()
const ModelSchema = require('../MongoDB Config/schema')


router.get('/',async(req,res) => {
    return res.json(await ModelSchema.find())
})

router.post('/adduser', async (req, res) => {
   console.log(req.body)
    try {
       const newdata = new ModelSchema(req.body);
       const savedData = await newdata.save(); 
       res.status(201).json(savedData); 
    } catch (error) {
       console.error(error);
       res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/edituser/:id', async(req,res) => {
  
    try{
       const updateddata = req.body
       const ud = await ModelSchema.findByIdAndUpdate(req.params.id,updateddata,{ new: true })
       res.status(201).json(ud)
    } catch (error) {
       console.error(error);
       res.status(500).json({ error: 'Internal server error' });
    } 
})


router.delete('/deleteuser/:id', async (req, res) => {
    try {
       await ModelSchema.findByIdAndDelete(req.params.id);
       return res.json(await ModelSchema.find());
    } catch (error) {
       console.error(error);
       res.status(500).json({ error: 'Internal server error' });
    }
});



module.exports = router ;