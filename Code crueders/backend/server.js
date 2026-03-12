const express=require("express")
const cors=require("cors")

const app=express()

app.use(cors())
app.use(express.json())

const doctors=[
{name:"Dr Sharma",specialization:"Cardiologist"},
{name:"Dr Verma",specialization:"Orthopedic"}
]

const donors=[
{name:"Rahul",group:"O+",phone:"9876543210"},
{name:"Aman",group:"A+",phone:"9876543211"}
]

const hospitals=[
{name:"City Hospital",icu:3},
{name:"Apollo Hospital",icu:5}
]

app.get("/doctors",(req,res)=>{
res.json(doctors)
})

app.get("/donors/:group",(req,res)=>{

const result=donors.filter(d=>d.group===req.params.group)

res.json(result)

})

app.get("/hospitals",(req,res)=>{

res.json(hospitals)

})

app.listen(5000,()=>{

console.log("Server running on port 5000")

})