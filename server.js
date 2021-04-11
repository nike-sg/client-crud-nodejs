const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const BASEURL = 'http://localhost:8080'
mongoose.connect(
 'mongodb+srv://admin:admin123@crudclient.ij8dd.mongodb.net/nodeApi?retryWrites=true&w=majority',
 {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());

require('./src/Routes/index')(app); 


const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
  console.log(`Server Up at http://localhost:${PORT}`);
});

