const mongoose = require('mongoose')
const Person = require('./models/person')

const url = 'mongodb://203.154.59.66:27017/workshophy'

mongoose.connect(url,{
    user: 'admin',
    pass: '12345678',
    useNewUrlParser:true,
    useUnifiedTopology: true 
}).then(async ()=>{
    console.log('DB connect')
    // insert
    // let newperson = new Person({
    //     firstname: 'amang',
    //     lastname: 'nima',
    //     createdatetime: new Date()
    // })

    // newperson.
    //     save()
    //         .then(()=>{
    //             console.log('success')
    //         })
    //         .catch(err=>{
    //             console.log(err)
    //         })



    // let person =  Person.find({} , (err , result)=>{
    //     if (err) throw err
    //     console.log(result)
    // })


    // use with async
    // try{
    //     let person = await Person.find()
    //     console.log(person)
    // }catch(err){
    //     console.log(err)
    // }



    // update
    // Person.updateOne({
    //     _id:'5daebac5f66a9b2404bb6d8f'
    // },{$set : {
    //     firstname: 'chaloemphong',
    //     lastname: 'nima'
    // }},(err , data)=>{
    //     if(err) throw err
    //     console.log('update success')
    // })


    // update
    // let person = await Person.findOne({
    //     _id:'5daebac5f66a9b2404bb6d8f'
    // })
    // person.firstname = 'amang'
    // person.save()

    // delete
    // let person = await Person.findOne({
    //      _id:'5daebac5f66a9b2404bb6d8f'
    // })
    // person.delete()

    Person.deleteOne({
        _id:'5daebd49d0f9071560b0f0a3'
    },(err , data)=>{
        if(err) throw err
        console.log('delete success')
    })


}).catch(err=>{
    console.log(err)
})