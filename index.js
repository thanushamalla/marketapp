const express = require('express');
const app = express();
app.use(express.json())

const PORT=4000;

var  reportmodel =require('./model/reportschema');
app.use("/reportschema",reportmodel)

var mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/databaseapi',{
   useNewUrlParser:true,
   useUnifiedTopology:true,
   useFindAndModify:false,
   useCreateIndex:true,
}).then(res=>{
    console.log('DB connected')
}).catch(err=>{
    console.log('Not connected')
});

/*Get all report Details*/ 
app.get('/list',(req,res)=>{
    res.send(report)
});
/*Get single report details*/
app.get('/getreport/:id',async(req,res)=>{
    let params=req.params.id;
    let report= await REPORT_SCHEMA.findOne({id:params}).sort({id:-1});
    res.send(report)
})

/*Add Report details*/ 
app.post('/add', (req,res) =>{
    let body=req.body;
    REPORT_SCHEMA.insertMany(body).then(result =>{
        res.send({ sts:200, msg:'created'});
    }).catch(err =>{
        res.send({ sts:500, msg:err.message})
        })
          
    })
        /*update report details by id*/
    app.put('/update/:id',(req,res)=>{ 
        let index=report.findIndex(x=>x.id==_body.id);
        if(index!=-1)
        {
            report[index]=_body
        } 
        res.send(report);
    });  
    /*Delete report by id*/

app.delete('/delete/:id',(req,res)=>{ 
        let index=report.findIndex(x=>x.id==_body.id);
        if(index!=-1)
        {
            report.splice(index,1)
        } 
        res.send(report);
    });  


app.listen(PORT, () =>{
    console.log("server running.."+PORT)
})


