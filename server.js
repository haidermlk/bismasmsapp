const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const cors = require('cors');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');

const app = express();
// store config variables in dotenv
require('dotenv').config();

// ****** Set up default mongoose connection  START ****** //
var mongoDB = process.env.mongoDBOLURL; // cloud hosted MongoDB
//var mongoDB = process.env.mongoDBLOCALURL; // locally hosted MongoDB
mongoose.connect(mongoDB, { useNewUrlParser: true,useUnifiedTopology: true });

//mongoose.connect('mongodb://localhost:27017/payroll', {useNewUrlParser: true});

schema = require('./schema/mongoDBSchema'); // uncomment this for MONGODB
//schema = require('./schema/mysqlDBSchema'); // uncomment this for MYSQL // MYSQL version is not WORKING yet, will update in near future release v1.1.9

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.once('open', () => {
    console.log('connected to MONGODB- BismasoftERP database');
});
// ****** Set up default mongoose connection END ****** //

// ****** allow cross-origin requests code START ****** //
app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname+'/public')));
//app.use(express.static(path.join(__dirname+'/')));

 app.get('*',function(req,res){
    
    res.sendFile(path.join(__dirname+'/public/index.html'));
   // res.sendFile(path.join(__dirname+'/index.html'));
    
});

//app.use(cors({ origin: 'http://localhost:4200' })); // uncomment this to enable all CORS and delete cors(corsOptions) in below code
//app.use(cors()); // uncomment this to enable all CORS and delete cors(corsOptions) in below code

var allowedOrigins = process.env.allowedOrigins.split(',');
 app.use(cors({
    origin: function (origin, callback) {
        // allow request with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));
// ****** allow cross-origin requests code END ****** //



// bind express with graphql

app.use(
    '/graphql',
    cors(),
     graphqlHTTP({
    schema,
    graphiql: false

}),
);


app.use('/bismasofttracking', graphqlHTTP({
    
    schema,
    graphiql: false
}));


//app.use('/', (req, res) => res.send("Welcome BismasoftERP User"));
app.listen(process.env.GRAPHQLPORT, () => console.log('Bismasoft Enterprise Server is ready on localhost:' + process.env.GRAPHQLPORT));
