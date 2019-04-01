const express = require('express');
const helmet = require('helmet');
const compression = require('compression')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')

const app = express();

const apiRoutes = require('./routes/api');
const errorRoutes = require('./routes/error');

 const accessLogStream = fs.createWriteStream(
    path.join(__dirname,'access.log'),
    {flags:'a'}
);
 
app.use(helmet());
app.use(compression());
app.use(morgan('combined',{stream:accessLogStream}));


app.use('/api',apiRoutes);
app.use(errorRoutes);


app.listen(3000);