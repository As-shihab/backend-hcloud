const express = require('express')

const Mysql = require('../Config/mysql')
const {NewCategory, GetCategorys} = require('../controllers/Remote/Hcloud/Catagory')
const {NewUser , CheckUser , LoginUser, UpdatePrimary, GetUserById, SentCode, VerifyCode, Del_hv_ac} = require('../controllers/Remote/Hcloud/User')

const multer =require('multer')
const path = require('path')
const VerifyUser = require('./middleware/UserMiddleware')
const { DraftListing, NewListing, GetListing, DelListing, GetPublish, GetOneListing, GetLUuser } = require('../controllers/Remote/Hcloud/Listing')
const { GetDistrict, GetDivision, GetUpazila } = require('../controllers/Remote/Hcloud/GeoInfo')

const Hcloud = express.Router()

// multer

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "Uploads")
    },
    filename: function (req, file, cb) {
        const dataname = Math.floor(200000000 + Math.random() * 900000);
        const actual = dataname + "file" + path.extname(file.originalname)
        cb(null, actual)
        req.body.blogfilename = actual
        req.body.image = actual
    } 
})
const upload = multer({ storage: storage })

// user middleware
Hcloud.post('/new-user' , NewUser) 
Hcloud.get('/check-user' ,VerifyUser, CheckUser)
Hcloud.post('/login-user' , LoginUser)
Hcloud.put('/update-primary' ,upload.single('avatar') , VerifyUser ,UpdatePrimary )
// end
// --------------
// category 

Hcloud.post('/category' , upload.array('image') , NewCategory)
Hcloud.get('/get-categorys' , GetCategorys)
// end-----

//user listing
Hcloud.post("/new-listing/:id" ,VerifyUser,upload.array("images") ,  NewListing)
Hcloud.post('/draft-listing' ,VerifyUser, DraftListing )
Hcloud.get('/get-listing', VerifyUser , GetListing)
Hcloud.delete("/del-listing/:id" ,VerifyUser, DelListing)
// end

// --------- geo info apis
Hcloud.get('/get-district' , GetDistrict)
Hcloud.get('/get-division' , GetDivision)
Hcloud.get('/get-upazila' , GetUpazila)

// end

// public
Hcloud.get('/get-publish' , GetPublish)
Hcloud.get('/get-onelisting/:id', GetOneListing)
Hcloud.get('/user-list/:id/:product' , GetLUuser)

// user->
Hcloud.get('/get-user/:id', GetUserById)

// end

// verify-email (hv=> houscloud verify)
Hcloud.get('/hv-email', VerifyUser , SentCode)
Hcloud.post('/hv-verify-email' , VerifyUser , VerifyCode)
Hcloud.delete('/del-hv-ac' , VerifyUser , Del_hv_ac)
module.exports = Hcloud


