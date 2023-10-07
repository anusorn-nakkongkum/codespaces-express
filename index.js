const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World 1111!')
}); 

app.get('/user;, (req, res)=>{
        res.send({first_name: "anusorn", last_name:"nakkongkum"});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
