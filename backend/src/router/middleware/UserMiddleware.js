

const VerifyUser = async (req, res ,next) => {
    const token = req.headers['user-token'];

  try{
      require('jsonwebtoken').verify(token, process.env.WEBTOKEN_KEY, (err, decoded) => {
        if (err) return res.json({ msg: "User Not verifyd" });
               
        req.email = decoded.data.email
        req._id = decoded.data._id
        req.id = decoded.data.id
       
        next()
    })
  }
  catch(err){
    return res.json({
        msg: err.message
    })
  }
   
}
module.exports = VerifyUser

