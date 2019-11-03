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
        let datastudent = await Student.find()
        var newdata = datastudent.filter(item=>{
            return item.age >=20 && item.age  <= 30
        });
        

        // console.log(newdata)

        let sum = 0
        var newdata = datastudent.filter(item=>{
            sum+= item.age
            return item
        });
        // console.log(sum)

        var minage = datastudent.reduce((prev , curr )=>{
            if(prev.age < curr.age)
                return prev
            else
                return curr
        })
        // console.log(minage)


        var newdata = datastudent.filter(item=>{
            return item.status === 'Married'
        });

        // console.log(newdata)

        newdata.forEach(item=>{
           // update
                Student.updateOne({
                    id:item.id
                },{$set : {
                    age: 39
                }},(err , data)=>{
                    if(err) throw err
                    console.log('update success')
                })

        })

        var newdata = datastudent.filter(item=>{
           return item.address.city === 'NYC'
        });

        // console.log(newdata)


        var newdata = datastudent.filter(item=>{
            return item.status === 'relationship'
         });

         newdata.forEach(item=>{
            Student.deleteOne({
                id:item.id
            },(err , data)=>{
                if(err) throw err
                console.log('delete success')
            })
         })




    }catch(err){
        console.log(err)
    }


}).catch(err=>{
    console.log(err)
})