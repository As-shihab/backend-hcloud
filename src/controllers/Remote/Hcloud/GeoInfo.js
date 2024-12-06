const Mysql = require("../../../Config/mysql")

const GetDistrict = async(req ,res)=>{
    
    try{
        await Mysql.query("SELECT * FROM districts ", (err , result)=>{
            if(err) return res.json("No district found")
                return res.json(result)
           })
    }catch(err){
        return res.json({msg:err.message})
    }
       
}

const GetDivision = async(req ,res) =>{
    try{
        await Mysql.query("SELECT * FROM divisions ", (err , result)=>{
            if(err) return res.json("No district found")
                return res.json(result)
           })
    }catch(err){
        return res.json({msg:err.message})
    }
}

const GetUpazila = async(req ,res) =>{
    try{
        await Mysql.query("SELECT * FROM upazilas ", (err , result)=>{
            if(err) return res.json("No district found")
                return res.json(result)
           })
    }catch(err){
        return res.json({msg:err.message})
    }
}
module.exports = {GetDistrict , GetDivision , GetUpazila}