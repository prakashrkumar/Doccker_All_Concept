const mongoose =require("mongoose")
const dbConnect=async()=>{
    try{
       const {MONGO_URL,MONGO_USER,MONGO_PASSWORD,MONGO_AUTH_SOURCE}=process.env
       if(!MONGO_URL){
           throw new Error("MONGO_URL is required")
       }
       if(Boolean(MONGO_USER)!==Boolean(MONGO_PASSWORD)){
           throw new Error("MONGO_USER and MONGO_PASSWORD must both be set")
       }

       const options={}
       if(MONGO_USER){
           options.user=MONGO_USER
           options.pass=MONGO_PASSWORD
           if(MONGO_AUTH_SOURCE){
               options.authSource=MONGO_AUTH_SOURCE
           }
       }

       await mongoose.connect(MONGO_URL,options)
       console.log("mongo db connect successfully")
    }
    catch(error){
        console.error("MongoDB connection failed:", error)
        process.exit(1)
    }
}

module.exports=dbConnect