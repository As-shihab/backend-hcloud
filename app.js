const express = require('express');
const app = express();
const cors = require('cors');
const admin = require('./src/router/AdminRouter');
const shihab = require('./src/router/Shihab');
const Hcloud = require('./src/router/Hcloud');
const VerifyUser = require('./src/router/middleware/UserMiddleware');
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('./Uploads'))
// routers

app.use('/admin' ,admin)
app.use('/shihab' , shihab)
app.use('/hcloud',  Hcloud)

// end routers

const port = process.env.PORT || 3000
app.listen((3000), () => {
    console.log(`App listening on port ${port}`);
});






