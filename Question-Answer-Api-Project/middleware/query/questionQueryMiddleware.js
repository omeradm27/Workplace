const asyncErrorWrapper = require("express-async-handler");
const {
    searchHelper,
    populateHelper,
    questionSortHelper,
    paginationHelper
}=require("./queryMiddlewareHelpers")

const questionQueryMiddleware=function(model,options){
    return  asyncErrorWrapper(async (req, res, next) => {
        // initial query
        let query=model.find();        
        // Search        
        query=searchHelper("title",query,req);
        // Population
        if(options&&options.population){
            query=populateHelper(query,options.population);
        }
        query=questionSortHelper(query,req);
        // pagination
        const total=await model.countDocuments();
        const paginationResult=await paginationHelper(total,query,req);
        query=paginationResult.query;
        const pagination=paginationResult.pagination;

        const queryResult=await query;
        res.queryResult={
            success:true,
            count:queryResult.length,
            pagination:pagination,
            data:queryResult
        }
     
        next();
    });
};
module.exports=questionQueryMiddleware;