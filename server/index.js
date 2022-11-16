
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//Middel ware..

app.use(bodyParser.json());
app.use(cors());
const posts =require('./routes/api/posts');
app.use('/api/posts',posts);



//Handle Production...
if(process.env.NODE_ENV==='production' ){
    //static folder .
    app.use(express.static(__dirname+'/public'));
    //Handle SPA>....

    app.get(/.*/,(req,res)=>res.sendFile(__dirname+ '/public/index.html'));
}ß

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server started on port 5000 ${port}`));
