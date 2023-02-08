const express=require('express');
const app=express();
const port=5000;
app.use(express.json());

const router=require('./src/routes/userRouter');
app.use('/user',router);



app.listen(port,()=>{

  console.log(`strated listening on port ${port}`)

})