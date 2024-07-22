const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');
const User = require('./studentschema');
// const firstproject = require('./firstproject');

const port = 3000;
const app = express();

app.listen(port, () => {
    console.log("Server is listening at port:" + port);
});

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Parses the text as json
app.use(bodyParser.json());
// app.use(routes);

app.use('/api', api);
app.post('/api', (req, res) => {
    // console.log(req)
    console.log(req.body)
    res.send('Hello world  '+req.body.name);
    

  });
  app.post('/save', async(req, res) =>{
    // console.log(req)
    
    // const users = await User.insertMany([req.body]);
    const users = await User.find();
    console.log(users);
    res.send('data saved successfully  '+users);
    

  });

