const express = require("express")
const app = express();

app.get('/',(req,res) => {

    
    res.send("Hello World!");
})

const employee = [
    {
        id:1,
        name:"Akhila"
    },
    {
        id:2,
        name:"sai"
    },
    {
        id:3,
        name:"smitha"
    }

]

app.get('/employee',(req,res)=>{

    res.json(employee)
})

app.get('/employee/:id',(req,res)=>{
    console.log("employee" +JSON.stringify(employee));
    // const newData = employee.filter(person=> person.id.toString === req.params.id);
    // console.log("person.id"+person.id);
    // console.log("req.params.id"+req.params.id);
    // console.log("newData");
for (let person of employee){
   
   if(req.params.id == person.id){
    res.send(person);
   }
   
}
 res.send("ID not found1");

   
})

app.listen(3000,()=> console.log("server running !!"))
