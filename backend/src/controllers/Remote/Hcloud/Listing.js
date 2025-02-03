const { PrismaClient } = require('prisma/prisma-client')
const Prisma =new PrismaClient()

const NewListing = async (req,res) =>{
    const {id} = req.params
       let name = []
       
       for(let i=0; i < req.files.length; i++){
        name.push(req.files[i].filename)
       }
  try{
await Prisma.listing.update({
    where:{
        id: Number(id),
        authorId: req.id
    },data:{
       publish: true,
       draft: false,
       images: JSON.stringify(name)
    }
})


return res.json({msg: "Listing created successfully"})
  }
  catch(err){
    return res.json({msg: err.message, id: id})
  }
}
const DraftListing = async (req,res) =>{
const userid = req.id
try{
   const info= await Prisma.listing.create({
        data:{
            title:req.body.title ,
            location: req.body.location,
            authorId : userid
        }
    })
    return res.json({msg:"Saved as draft" , data: req.body ,id: info.id})
}
catch(err){
    return res.json({msg:userid ,id: userid , data: req.body})
}
}
const GetListing = async(req,res) =>{
   try{
    await Prisma.listing.findMany({
        where:{
            authorId: req.id
        }
    
    })
    .then(data=>{
        return res.json(data)
    }).catch(err=>{
        return res.json({msg:"No data found"})
    })
   }catch(err){
    return res.json({msg:"No data found"})
   }
}

const DelListing =async(req, res) =>{
    const {id } =req.params
   const list_id = Number(id)
    try{
     await Prisma.listing.delete({where:{id: list_id}})
        return res.json({msg:"Product deleted successfully"})
       
    }
    catch(err){
        return res.json({
            msg:err.message
        })
    }

}

const GetPublish = async(req ,res)=>{
 const publish=  await Prisma.listing.findMany({
    where:{
        publish: true,
        draft: false
    },
    orderBy:{
        id:'desc'
    }
 })
 return res.json({msg: "Getting all latest" , publish: publish , })
 
}

// public

const GetOneListing = async(req ,res) =>{
    const {id} =req.params
 const onelist= await   Prisma.listing.findUnique({
        where:{
            id: Number(id)
        }
    })
    const hostinfo = await Prisma.user.findUnique({
        where:{
            id: onelist.authorId
        },
        select:{
            id: true,
            firstname : true,
            lastname: true ,
            avatar: true ,
            password: false
        }
    })


   
return res.json({onelist: onelist  , msg: "Found list" ,
    host: hostinfo
})
}

const GetLUuser= async(req ,res) =>{
    const {id , product} =req.params
 try{
    const userlist= await   Prisma.listing.findMany({
        where:{
            authorId: Number(id),
            publish: true
        },
        orderBy:{
            id: "desc"
            
        }
    
        
    })
    return res.json({publish:userlist,id: id , product: product})
 }catch(err){
    return res.json({msg: err.message })
 }
}

// export
module.exports = {NewListing , DraftListing , GetListing , DelListing , GetPublish ,
    GetOneListing, GetLUuser
}

