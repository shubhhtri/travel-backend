const jwt=require("jsonwebtoken");

const isAuthenticatedUser=async (req, res, next)=>{
    

    try{
        const token=req.params.token;
    
        const result=jwt.verify(token, process.env.SECRETKEY);
        if(result){
            next();
        }
        else{
            console.log("Not an authorized user");
        }
    }catch(err){
        console.log("Err", err);
    }
}

module.exports=isAuthenticatedUser;