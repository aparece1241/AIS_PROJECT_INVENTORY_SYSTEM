const express = require('express');
const app = express();
const {port} = require('./config');
const conn = require('./connection/connection');
const bodyParser = require('body-parser');
var cors = require('cors');
const path = require('path');

//headers
app.use(cors());

//set static files
app.use('/static',express.static(path.join(__dirname,'Public')));

//Parse the body
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());


//Verify mongodb connection
conn.mongoDBconnection()
    .then(res => {
        console.log(res.message);
        app.listen(port,()=> console.log(`Server is listening to port ${port}`));
    }).catch(err => {
        console.log(err.message);
    });

//use direct routes
const directRoutes = require('./routes/DirectRoutes');
app.use(directRoutes);

//use user routes
const userRoutes = require('./routes/UserRoutes');
app.use('/user',userRoutes);

//use product routes
const productRoutes = require('./routes/ProductRoutes');
app.use('/product',productRoutes);




