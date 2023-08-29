const express = require('express')
const bodyParser = require('body-parser')
const alert = require('alert')
const app =  express()


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req,res) => {

res.render('home')

})

app.post("/", (req,res) => {

        const name = req.body.userName
        const password = req.body.userPassword
        const email = req.body.userEmail
        const address = req.body.userAddress


        if(password == 'abcdefgh'){

        
                res.render('data', {name,password,email,address})
        

        }
        else{

                alert("Password is INcorrect")
               
        }

        

})







app.listen(5000, (err)=>{
        console.log("ewdne")
})