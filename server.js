const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const BASEURL = 'http://localhost:8080';

mongoose.connect(
 'mongodb://localhost:27017/nodeApi?retryWrites=true',
 {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to database!!');
}).catch((err)=>{
  console.log('Connection failed!!'+ err.message);
});

app.use(cors());
app.use(express.json());

require('./src/Routes/index')(app); 


const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
  console.log(`Server Up at http://localhost:${PORT}`);
});

