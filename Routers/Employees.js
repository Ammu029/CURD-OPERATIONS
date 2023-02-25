const express = require('express')
const router = express.Router()
const Emp = require('../model/emp')

router.get('/', async(req,res)=>{
    try{
        const emp = await Emp.find()
        res.json(emp)
    }catch(err){
        res.send('Error '+err)
    }
})

router.get('/:id', async(req,res)=>{
    try{
        const emp = await Emp.findById(req.params.id)
        res.json(emp)
    }catch(err){
        res.send('Error '+err)
    }
})

router.post('/', async(req,res)=>{
    const emp = new Emp({
        name : req.body.name,
        tech: req.body.tech,
        location: req.body.location
    })

    try{
       const a1 = await emp.save()
        res.json(a1)
    }catch(err){
        res.send("error "+ err)
    }
})

router.patch('/:id', async(req,res)=> {
    try{
        const emp = await Emp.findById(req.params.id)
        emp.location = req.body.location
        const a1 = await emp.save()
        res.json(a1)
    }catch(err){
        res.send('Error '+err)
    }
})

router.delete('/:id', async(req,res)=> {
    try{
        const emp = await Emp.findById(req.params.id)
        
        const a1 = await emp.remove()
        res.json(a1)
    }catch(err){
        res.send('Error '+err)
    }
})

module.exports = router