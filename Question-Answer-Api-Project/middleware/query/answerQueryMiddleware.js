const asyncErrorWrapper = require("express-async-handler");
const {
    populateHelper,
    paginationHelper
}=require("./queryMiddlewareHelpers")

const answerQueryMiddleware=function(model,options){
    return  asyncErrorWrapper(async (req, res, next) => {
        const {id}=req.params;
        const arrayName="answers";
        const total=(await model.findById(id))["answerCount"];
        const paginationResult=await paginationHelper(total,"undefined",req);
        const startIndex=paginationResult.startIndex;
        const limit=paginationResult.limit;
        
        let queryObject={};
        queryObject[arrayName]={$slice:[startIndex,limit]};//MONGODB Özellilği

        let query=model.find({_id:id},queryObject);
        query=populateHelper(query,options.population)
        const queryResult=await query;
        res.queryResult={
            success:true,
            pagination:paginationResult.pagination,
            data:queryResult
        }
        next();
    });
};
module.exports=answerQueryMiddleware;