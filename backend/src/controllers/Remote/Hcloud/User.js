const { PrismaClient } = require('prisma/prisma-client')
const usermodel = new PrismaClient()
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const fs = require('fs')

const NewUser = async (req, res) => {
  const { firstname, email, password } = req.body

  try {
    if (firstname == "" || email == "" || password == "") {
      return res.json({ msg: "Fill all the fields" })
    } else {

      await usermodel.user.create({
        data: {
          firstname: firstname,

          email: email,
          password: password
        }

      })
      

      const user = await usermodel.user.findUnique({
        where:{
          email: email,
          password:password
        }
      })
      const token = await jwt.sign({ exp: Math.floor(Date.now() / 1000) + 60 * 60 * 60, data: { email: user.email,  id: user.id } }, 'welcometoshihabcloud')
      return res.json({
        msg: "User created succesfully",
        token: token,
        code: 200
      })
    
    }

  }

  catch (err) {
    if (err.code == "P2002") {
      return res.json({ msg: "Email already exist" })
    }
    else {
      return res.json({ msg: "Server error" })
    }
  }


} 

const CheckUser = async (req, res) => {
  const email = req.email

  try{
    usermodel.user.findUnique({
      where: {
        email: email
      }
    })

    

      .then(result => {
       if(result){
 return res.json({
          msg: "Yeah you logedin",
          user: true,
          verify: false,
          info: result
        })
       }else{
       return res.json({msg:"Login again" })
       }
      })
  }
catch(err){
return res.json({msg:"Your session out"})
}
  

}

const LoginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    await usermodel.user.findUnique({
      where: {
        email: email,
        password: password
      }

    }).then(result => {
      if (result) {
        const token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + 60 * 60 * 60, data: { email: result.email, firstname: result.firstname , id: result.id } }, 'welcometoshihabcloud')
        return res.json({
          msg: "Welcome back!",

          token: token,
          code: 200
        })
      } else {
        return res.json({ msg: "No user found" })
      }
    }).catch(err => {
      return res.json({ msg: err.message })
    })



  }
  catch (err) {
    return res.json({ msg: "No user found" })
  }
}

const UpdatePrimary = async (req, res) => {
  const {firstname ,lastname , phone} =req.body
  const avatar = req.body.image
const email = req.email;

try{
  await usermodel.user.findUnique({
    where:{
      email: email
    }
  }).then(info=>{
    const dir = "Uploads/"
    if(info.avatar){
      fs.unlink(dir+info.avatar , (err)=>{
        if(err) console.log(err)
        
      })
    }
  })

await usermodel.user.update({
  where:{
    email: email
  },
  data:{
    firstname: firstname,
    lastname:lastname,
    phone: Number(phone),
    avatar: avatar&&avatar
  }
})
return res.json({msg:"Profile updated successfully"})

}
catch(err){
  console.log(err)
  return res.json({msg:"Profile cannot be updated"})
}

}


const GetUserById = async(req ,res) =>{
  const {id}= req.params;
 try{
const user=  await usermodel.user.findUnique({
    where:{
      id:Number(id)
    },
    select:{
      avatar:true,
      firstname:true,
      lastname:true,
      password:false
      
    }
   })
   return res.json({host: user})
 }
 catch(err){
  return res.json({msg:err.message})
 }
}

const SentCode = async(req ,res) =>{
  const id = req.id;

  let randomcode = Math.floor(100000+ Math.random() * 9000000)

  const html_format = `<div>
      <h1>Welcome to Shihab Cloud!</h1><br/>
                      <font>Hi , i'm shihab . i've sent you an otp code right here , please don't share this to anyone . this may assist you stay encrypted</font><br/>

                      <h2>${randomcode}</h2><br/>
                      <h1>Sincarely</h1>
                      <span>As-shiab</span>
  </div>`;

  try{
    const transporter = nodemailer.createTransport({
      host : "smtp.gmail.com",
      secure: true,
      port: 465,
      auth:{
        user:"html.shihab@gmail.com",
        pass: "ebxmxouucxldzcdu"
      }
    })

    // sent mail

    await transporter.sendMail({
      from: "html.shihab@gmail.com",
      to: req.email,
      subject: "Hcloud OTP verification",
      html: html_format
    })

    await usermodel.user.update({
      where:{
        id: id
      },
      data:{
        otp: Number(randomcode)
      }
    })

    return res.json({msg: "OTP CODE SENT TO EMAIL " , sent : true})
  }
  catch(err){
    return  res.json({msg:err.message})
  }
}


const VerifyCode = async(req ,res)=>{
  const id = req.id;

try{
  const find_user= await usermodel.user.findUnique({
    where:{
      id: id
    }
    
 
  })


    
  if(find_user.otp){

    if(find_user.otp ==Number(req.body.otp)){
     await usermodel.user.update({
      where:{
        id: id
      },
      data:{
        otp: null,
        active:true
      }
     })
     return res.json({msg:"Verification success" , verify: true })
    }

else{
  return res.json({msg: "Sorry"})
}

   
  }else{
    return res.json({msg: "Code not yet sent"})
  }
}
catch(err){
  return res.json({
    msg: err.message,
    
  })
}

}


// -------------------
// -------------------

const Del_hv_ac= async(req ,res) =>{
try{
  await usermodel.user.delete({
    where:{
      id: req.id
    }
  
  
  })
  return res.json({
    msg:"Account deleted successfully",
    del:true
  })
}
catch(err){
  return res.json({
    msg:err.message,
    del: false
  })
}
}

module.exports = { NewUser, CheckUser, LoginUser, UpdatePrimary , GetUserById ,
   SentCode , VerifyCode , Del_hv_ac }