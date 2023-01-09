const express=require("express");
// const {accessControl,defaultMidware}=require("./middleware");

// DATABASE YERİNE JSON ARRAY YAZDIK --> DAHA SONRA DB yazılacak Buraya
const users=[
    {id:1 , name:"Ömer Çetinadam",place:"İstanbul"},
    {id:2 , name:"Ahmet Ölmez",place:"Ankara"},
    {id:3 , name:"Yusuf Çetinadam",place:"İstanbul"}
];
const app=express();
const PORT=5000;
// app.use(accessControl);

//Get REQUEST
// localhost:5000/users
// MİDDLEWARE İLE ACCESS CONTROL
// app.get("/users",[accessControl,defaultMidware],(req,res,next)=>{
//     res.json(users);
// });
app.use(express.json());

app.get("/users",(req,res,next)=>{
    res.json({
        success:true,
        data:users
    });
});

app.post("/users",(req,res,next)=>{
    const user=req.body;
    users.push(user);
    res.json({ 
        success:true,
        data:"Post Request"
    });
});

app.put("/users/:id",(req,res,next)=>{
    const id=parseInt(req.params.id);
    for (let i = 0; i < users.length; i++) {
        if(users[i].id===id){
            users[i]={
                ...users[i],
                ...req.body
            };
        }
        
    }
    res.json({
        success:true,
        data:users
    });
});

app.delete("/users/:id",(req,res,next)=>{
    const id=parseInt(req.params.id);
    for (let i = 0; i < users.length; i++) {
        if(users[i].id===id){
            users.splice(i,1);
        }
        
    }
    res.json({
        success:true,
        data:"Delete Request"
    });
});


// Middleware Örnek
// app.get("/products",(req,res,next)=>{
//     res.send("Products");
// });

 app.listen(PORT,()=>{
console.log("Server Started at :"+PORT+". PORT");
 });

