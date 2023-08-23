const express = require('express');
const cors = require('cors');
const http = require('http');
const connectToMongo = require('./db');
const app = express();


app.set('view engine','ejs')
app.use(express.static('public'))

const PORT = process.env.PORT || 8180;
const doctorsDetail=require('./models/doctors')


// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectToMongo();

// Routes
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/doctors',async(req,res)=>{
  try{
      const getDoctors=await doctorsDetail.find({});
      res.send(getDoctors)
  }catch(e){
      console.log(e);
  }
})
app.get('/doctorimage',(req,res)=>{
  res.render('index')
})


  // Start the server
app.listen(PORT, () => {
console.log(`Server is running on port http://localhost:${PORT}`);
});
