const {PrismaClient} = require('prisma/prisma-client')
const CategoryModel =new PrismaClient()
const sharp = require('sharp')

const NewCategory = async(req ,res) =>{

    const {title , image , details  } =req.body
try{
   

   await CategoryModel.category.create({
   data:{
    title : title,
    image : image,
    details: details,
   }
    
   })
   return res.json({msg: "Category created successfully"})

}
catch(err){
    return res.json({msg: err.message})
}
}

const GetCategorys = async (req ,res) =>{
try{
     const data = await CategoryModel.category.findMany()
     return res.json({
        category: data,
        code: 200
     })
}
catch(err){
    return res.json({
        msg: err.message
    })
}
}



module.exports = {NewCategory , GetCategorys }