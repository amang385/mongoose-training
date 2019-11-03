const mongoose = require('mongoose')
const Student = require('./models/student')
const dataimp = require('./lib/data')

const students = dataimp.students

const url = 'mongodb://203.154.59.66:27017/workshophy'

mongoose.connect(url,{
    user: 'admin',
    pass: '12345678',
    useNewUrlParser:true,
    useUnifiedTopology: true 
}).then(async ()=>{
   
    students.forEach(item =>{
       
        let newstudent = new Student({
            id:item.id,
            firstname: item.firstname,
            lastname: item.lastname,
            age: item.age,
            score: item.score,
            money: item.money,
            status: item.status,
            address: {city:item.address.city , country:item.address.country},
            createdatetime: new Date()
        })

        // console.log(newstudent)
        // newstudent.save()
    })

   
    try{
        let datastudent = await Student.find({ age: { $gte: 30 , $lte : 40 } })
        // console.log(datastudent)

        let datastudent = await Student.find({ $sum })
        console.log(datastudent)


    }catch(err){
        console.log(err)
    }


}).catch(err=>{
    console.log(err)
})