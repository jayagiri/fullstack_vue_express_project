
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//Middel ware..
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server started on port 5000 ${port}`));
