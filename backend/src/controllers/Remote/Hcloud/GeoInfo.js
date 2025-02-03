const Mysql = require("../../../Config/mysql")
const {PrismaClient} = require("prisma/prisma-client")
const Prisma = new PrismaClient()

// get country 

const GetCountry = async(req ,res)=>{
    try{
        await Prisma.country.findMany({})
        .then(result =>{
            return res.json(result)
        })

    }
    catch(error){
        return res.json({msg:"No country found"})
    }
}







const GetDistrict = async(req ,res)=>{
    const {division} =req.params;
    
    try{
      await Prisma.districs.findMany({
      where:{
      division: division
      }
      })
      .then(result=>{
        return res.json(result)
      })
    }catch(err){
        return res.json({msg:err.message})
    }
       
}

const GetDivision = async(req ,res) =>{
    const {country} =req.params;
    try{
        await Prisma.divisoins.findMany({
            where:{
                country: country,
                active: true
            }
        })
        .then(result=>{
          return res.json(result)
        })
      }catch(err){
          return res.json({msg:err.message})
      }
}

const GetUpazila = async(req ,res) =>{
    try{       
        const data = await Prisma.uplozila.findMany({})
        return res.status(200).json(data)
    }catch(err){
        return res.json({msg:err.message})
    }
}

// ------------------

const NewCountry = async(req ,res) =>{
    console.log(req.body)
    const {lat ,lon , name , continent} = req.body
    console.log(req.body)
    try{
        if(name==""){
            return res.json({msg:"Fill the Country name"})
        }
        await Prisma.country.create({data:{
            lat: lat ,
            lon : lon , 
            continent: continent,
            label : name,
            value: name
            
        }})
        return res.status(200).json({
            msg: "Country added successfully"
        })
    }
    catch(err){
        return res.status(404).json({ 
        stack : err.message,
        msg: "Cannot add country"
        })
    }
}


// divison ------
const NewDivision = async(req ,res)=>{
    console.log(req.body)
    try{
        await Prisma.divisoins.create({data: req.body})
        
        return res.json({msg:"Division added successfully"})
    }
    catch(err){
        return res.json({
            stack : err.stack,
            msg: "Cannot Create divison"
        })
    }
}


//  new district 

const NewDistrict = async(req ,res) =>{
    try{
        await Prisma.divisoins.create({
        data:{
            country: req.body.country && req.body.country,
            label: req.body.name && req.body.name,
            value:req.body.name && req.body.name
        }
        })

        return res.status(200).json({
            msg:"Division added successfully"
        })
    }
    catch(err){
        return res.status(500).json({
            stack : err.stack,
            msg: "Cannot Create divison"
        })
    }
}

// NEW UPOZILA

const NewUpozila = async(req ,res)=>{
    try{
        await Prisma.uplozila.create({
        data:{
            district: req.body.district && req.body.district,
            label: req.body.name && req.body.name,
            value:req.body.name && req.body.name
        }
        })

        return res.status(200).json({
            msg:"Upozila added successfully"
            
        })
    }
    catch(err){
        return res.status(500).json({
            stack : err.stack,
            msg: "Cannot Create Upozila"
        })
    }
}

module.exports = {
    GetDistrict , 
    GetDivision ,
     GetUpazila  ,
      NewDivision
   , NewCountry ,
    NewDistrict,
   NewUpozila, 
   GetCountry
}