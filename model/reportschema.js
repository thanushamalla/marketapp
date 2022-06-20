var mongoose=require("mongoose");

const REPORT_SCHEMA =new mongoose.Schema({
    id:{type: number},
    userID:{type:string},
    marketID:{type:string},
    marketName:{type:string},
    cmdtyID:{type: string},
    marketType:{type: string},
    cmdtyName:{type: string},
    priceUnit:{type: string},
    convFctr:{type: number},
    price:{type: number},
    
})
module.exports=mongoose.model("report",REPORT_SCHEMA);