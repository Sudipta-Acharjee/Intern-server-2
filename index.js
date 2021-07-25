const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
const port = 5000;
app.use(cors());
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/',(req,res)=>{
    res.send('hello ema watson')
})

client.connect(err => {
  const alldatas = client.db("mernDataFull1").collection("datas");
  
  app.post('/addData',(req,res)=>{
      const alldata=req.body;
      console.log(first)
      alldatas.insertOne(alldata)
      .then(result=>{
          console.log(result)
      })
  })
});


app.listen(port)